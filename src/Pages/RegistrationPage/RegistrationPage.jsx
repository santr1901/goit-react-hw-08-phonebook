import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';

import { signup } from '../../redux/authentication/authentication-operations';

import { getAuthError } from '../../redux/authentication/authentication-selectors';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default RegistrationPage;
