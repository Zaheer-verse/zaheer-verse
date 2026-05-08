import { ThemeProvider } from 'next-themes';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="theme-midnight"
    enableSystem={false}
    disableTransitionOnChange
    themes={['theme-midnight', 'theme-aurora']}
  >
    <App />
  </ThemeProvider>,
);
