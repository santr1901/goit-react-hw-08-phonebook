import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/signup" className={css.link}>
        <Button variant="contained">SignUp</Button>
      </NavLink>
      |
      <NavLink to="/login" className={css.link}>
        <Button variant="contained">Login</Button>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
