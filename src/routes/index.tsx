import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Containers
const RouteLayout = React.lazy(() => import('./layout'));
const RouteSearch = React.lazy(() => import('./search'));
const RouteFavorites = React.lazy(() => import('./favorites'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        // errorElement={<RouteError />}
        element={<RouteLayout />}
      >
        <Route path="/" element={<RouteSearch />} />
        <Route path="/favorites" element={<RouteFavorites />} />
      </Route>
    </Routes>
  );
}
