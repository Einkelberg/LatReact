import { useEffect, useState } from "react";

export default function Button({ title, type, onClick }) {
  const [button, setButton] = useState("default");
  onclick = {onClick};
  useEffect(() => {
    setButton(title);
  }, [title]);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
        type={type}
      >
        {button}
      </button>
    </>
  );
}
