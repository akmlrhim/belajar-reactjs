import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@email.com"
      />

      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />

      <Button classname="bg-blue-800 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
