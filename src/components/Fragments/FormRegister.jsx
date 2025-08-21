import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Insert your full name here"
      />

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

      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="********"
      />

      <Button classname="bg-blue-800 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
