import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TaskMatrix = lazy(() => import('./pages/TaskMatrix'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Layout
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Carregando...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/matrix" element={<TaskMatrix />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;