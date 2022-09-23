import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { logout } from 'redux/authentication/authentication-operations';
import { getUser } from 'redux/authentication/authentication-selectors';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <span>{email}</span> |{' '}
      <Button variant="contained" onClick={onLogout} type="button">
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
