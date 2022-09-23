import useForm from '../../service/hooks/useForm';
import { Input, Button } from '@mui/material';
import css from './Login-form.module.css';

import { initialState } from './InitialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User Email:
        </label>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User Password:
        </label>
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className={css.group}>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
