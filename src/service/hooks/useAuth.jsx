import { useSelector } from 'react-redux';
import { isAuth } from 'redux/authentication/authentication-selectors';

const useAuth = () => {
  const result = useSelector(isAuth);
  return result;
};

export default useAuth;
