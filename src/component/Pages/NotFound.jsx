import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="flex justify-center items-center h-screen text-bold flex-col">
          <h1 className="text-2xl font-bold ">😲OOPS😲</h1>
          <p>Sorry the page your looking for doesn't exist</p>
          <p className="font bold text-3xl text-red-600">{error.statusText || error.message}</p>
      </div>
    </>
  );
}
