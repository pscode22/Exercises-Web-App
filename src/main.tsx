import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <MantineProvider
    withGlobalStyles
    // withNormalizeCSS
    theme={{
      colorScheme: 'dark',
      globalStyles: theme => ({
        body: {
          backgroundColor: theme.colorScheme === 'dark' ? '#050605' : theme.white,
        },
      }),
      components: {
        Container: {
          defaultProps: {
            sizes: {
              xs: 540,
              sm: 720,
              md: 960,
              lg: 1140,
              xl: 1320,
            },
          },
        },
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>,
  // </React.StrictMode>
);
