import { NavLink } from 'react-router-dom';
import useAuth from 'service/hooks/useAuth';
import css from './Navbar.module.css';
import icon from '../../Icons/logo.png';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  const isLogin = useAuth();
  console.log(isLogin);
  return (
    <div className={css.wrapper}>
      <NavLink className={css.logo} to="/">
        <img
          className={css.logo}
          src={icon}
          width="40"
          height="40"
          alt="logo"
        />
      </NavLink>
      <h2 className={css.title}>Your own phonebook</h2>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
