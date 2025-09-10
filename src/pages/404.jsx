import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Oops!</h1>
        <p className="mb-2">Sorry, an unexpected error has occurred</p>
        <p className="text-red-500">{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
