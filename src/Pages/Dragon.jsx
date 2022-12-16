import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageDragon } from "../Redux/Actions/actions.type";
import Form from "../Components/Dragon/Form";
import List from "../Components/Dragon/List";

const Dragon = () => {
  const { dragon, message } = useSelector((state) => state.reducerDragon);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(messageDragon(""));
    }, 1000);
  }, [message]);

  // console.log(localStorage.getItem({ ...localStorage }
  //   ));

  // useEffect(() => {
  //   localStorage.setItem(dragon.indexOf(dragon[0]), dragon);
  // }, []);

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

export default Dragon;
