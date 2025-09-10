const Input = (props) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-base border border-gray-400 rounded w-full py-2 px-3 text-gray-900 placeholder:text-gray-500 bg-white"
      placeholder={placeholder}
      name={name}
      id={name}
      autoComplete="off"
    />
  );
};

export default Input;
