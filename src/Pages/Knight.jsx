import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageKnight } from "../Actions/actions.type";
import Form from "../Components/Knight/Form";
import List from "../Components/Knight/List";

const Knight = () => {
  const { knight, message } = useSelector((state) => state.reducerKnight);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(messageKnight(""));
    }, 1000);
  }, [message]);

  return (
    <main>
      <div className="flex justify-center items-center flex-col">
        <div className=" w-full bg-blue-400 flex justify-center items-center py-5 ">
          <h2>Number of Knight(s) : {knight.length}</h2>
        </div>

        <Form />

        <div className="relative w-full flex justify-center">
          <p className="absolute ">{message}</p>
        </div>

        <List />
      </div>
    </main>
  );
};

export default Knight;