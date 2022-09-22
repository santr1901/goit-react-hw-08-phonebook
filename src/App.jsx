import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'UserRoutes';
import { current } from './redux/authentication/authentication-operations';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <UserRoutes />
    </>
  );
};

export default App;
