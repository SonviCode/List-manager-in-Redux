import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteLogs } from "../Redux/Actions/actions.type";

const Log = () => {
  const { log } = useSelector((state) => state.reducerLog);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteLogs());
  };

  return (
    <main>
      <div className=" w-full bg-yellow-300 flex justify-center items-center py-5 ">
        <h2>Number of log(s) : {log.length}</h2>
      </div>
      <div className="p-10">
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md w-full relative">
          {log.map((el, i) => {
            return (
              <li
                key={i}
                className="px-5 py-5 bg-white w-full hover:bg-yellow-100 hover:text-yellow-900 border-b last:border-none border-yellow-200 transition-all duration-300 ease-in-out  flex items-center"
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full px-10 justify-end">
        <button
          onClick={handleDelete}
          className="px-2 py-1 w-max text-white bg-yellow-400 rounded-md "
        >
          Delete All Logs
        </button>
      </div>
    </main>
  );
};

export default Log;
