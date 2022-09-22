import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const RegistrationPage = lazy(() =>
  import('./Pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('./Pages/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/mycontacts" element={<MyContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
