// ===== smarthome.ino (NodeMCU ESP8266)
// Pin labels: D1=eyeLeft, D2=eyeRight, D3=relayPin, D4=buzzerPin
// Fill in your WiFi & Blynk credentials before uploading.

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char ssid[]     = "YOUR_SSID";
char pass[]     = "YOUR_PASSWORD";
char auth[]     = "YOUR_BLYNK_TOKEN";

const int eyeLeft  = D1; // sensor left (TCRT5000)
const int eyeRight = D2; // sensor right
const int relayPin = D3; // relay IN
const int buzzerPin= D4; // buzzer

unsigned long firstBlinkTime = 0;
int blinkCount = 0;
const unsigned long BLINK_WINDOW = 900; // ms - tune for comfort

const int V_STATUS = V1;

void setup(){
  Serial.begin(115200);
  pinMode(eyeLeft, INPUT);
  pinMode(eyeRight, INPUT);
  pinMode(relayPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);

  digitalWrite(relayPin, LOW);
  digitalWrite(buzzerPin, LOW);

  Blynk.begin(auth, ssid, pass);

  tone(buzzerPin, 1000, 80);
  delay(120);
}

void loop(){
  Blynk.run();

  int leftVal = digitalRead(eyeLeft);
  int rightVal= digitalRead(eyeRight);
  int nowDetect = (leftVal == LOW || rightVal == LOW) ? 1 : 0;

  static int lastDetect = 0;
  if (lastDetect == 0 && nowDetect == 1){
    unsigned long now = millis();
    if (firstBlinkTime == 0){
      firstBlinkTime = now;
      blinkCount = 1;
    } else {
      if (now - firstBlinkTime <= BLINK_WINDOW){
        blinkCount++;
      } else {
        firstBlinkTime = now;
        blinkCount = 1;
      }
    }
    Serial.print("blink registered. count=");
    Serial.println(blinkCount);
  }
  lastDetect = nowDetect;

  if (firstBlinkTime != 0 && (millis() - firstBlinkTime) > BLINK_WINDOW){
    if (blinkCount >= 2){
      toggleRelay();
    }
    blinkCount = 0;
    firstBlinkTime = 0;
  }
}

void toggleRelay(){
  int current = digitalRead(relayPin);
  digitalWrite(relayPin, !current);
  digitalWrite(buzzerPin, HIGH);
  delay(110);
  digitalWrite(buzzerPin, LOW);

  int state = digitalRead(relayPin);
  Blynk.virtualWrite(V_STATUS, state);
  Serial.print("Relay toggled. state=");
  Serial.println(state);
}
