import { Link } from 'react-router-dom';
import useAuth from 'service/hooks/useAuth';
import css from './Navbar.module.css';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  const isLogin = useAuth();
  console.log(isLogin);
  return (
    <div className={css.wrapper}>
      <Link className={css.logo} to="/">
        Logo
      </Link>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
