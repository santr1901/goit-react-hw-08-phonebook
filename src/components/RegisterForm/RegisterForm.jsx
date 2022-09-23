import useForm from '../../service/hooks/useForm';
import { Input, Button } from '@mui/material';
import css from './RegisterForm.module.css';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.group}>
        <label className={css.label} htmlFor="">
          User Name:
        </label>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          className={css.input}
          type="text"
          placeholder="Name"
          required
        />
      </div>
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
          Registration
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
