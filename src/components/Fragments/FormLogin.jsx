import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value);
    localStorage.setItem('password', e.target.password.value);

    window.location.href = '/products';
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@email.com"
      />

      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />

      <Button classname="bg-blue-800 w-full mb-2" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
