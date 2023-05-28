import { SWRConfig } from 'swr';
import AppRoutes from '@routes/index';

function App() {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 500,
        revalidateOnFocus: false,
        errorRetryInterval: 2000,
        errorRetryCount: 3,
      }}
    >
      <AppRoutes />
    </SWRConfig>
  );
}

export default App;
