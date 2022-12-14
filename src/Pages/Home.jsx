import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Components/Form";
import List from "../Components/List";

const Home = () => {
  const { dragon, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "message" });
    }, 1000);
  }, [message]);

  return (
    <main>
      <div className="flex justify-center items-center flex-col">
        <div className=" w-full bg-red-400 flex justify-center items-center py-5 ">
          <h2>Number of Dragon(s) : {dragon.length}</h2>
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

export default Home;
