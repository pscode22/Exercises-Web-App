import { LoadingOverlay } from '@mantine/core';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Containers
const RouteLayout = React.lazy(() => import('./layout'));
const RouteSearch = React.lazy(() => import('./search'));
const RouteFavorites = React.lazy(() => import('./favorites'));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <LoadingOverlay
          visible
          overlayBlur={1}
          overlayColor="#050605"
          loaderProps={{ size: 'md', color: '#f76808', variant: 'oval' }}
        />
      }
    >
      <Routes>
        <Route
          // errorElement={<RouteError />}
          element={<RouteLayout />}
        >
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<RouteSearch />} />
          <Route path="/favorites" element={<RouteFavorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
