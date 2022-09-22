import { NavLink } from 'react-router-dom';

import css from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/signup" className={css.link}>
        SignUp
      </NavLink>
      |
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
