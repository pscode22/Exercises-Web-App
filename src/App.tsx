import { SWRConfig } from 'swr';
import AppRoutes from '@routes/index';
import { useReducer, useMemo } from 'react';
import { CtxFavoriteExercises, initialState, reducer } from './context/favorites.ctx';

function App() {
  const [favoriteExercises, dispatch] = useReducer(reducer, initialState);
  const memoedValue = useMemo(() => ({ favoriteExercises, dispatch }), [favoriteExercises]);
  return (
    <SWRConfig
      value={{
        dedupingInterval: 500,
        revalidateOnFocus: false,
        errorRetryInterval: 2000,
        errorRetryCount: 3,
      }}
    >
      <CtxFavoriteExercises.Provider value={memoedValue}>
        <AppRoutes />
      </CtxFavoriteExercises.Provider>
    </SWRConfig>
  );
}

export default App;
