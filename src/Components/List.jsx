import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const { dragon } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (el) => {
    dispatch({ type: "delete", value: el });
    dispatch({
      type: "message",
      value: `Le dragon ${el.name} a bien été supprimé !`,
    });
  };

  return (
    <div className="px-4 sm:px-8 w-full mt-20">
      <h1>List of dragon :</h1>
      <ul className="border border-gray-200 rounded overflow-hidden shadow-md w-full relative">
        {dragon.map((el, i) => {
          return (
            <li
              key={i}
              className="px-4 py-2 bg-white w-full hover:bg-red-100 hover:text-red-900 border-b last:border-none border-red-200 transition-all duration-300 ease-in-out  flex items-center"
            >
              {el.name} - {el.age}ans
              <button
                onClick={() => handleDelete(el)}
                className="px-2 py-1 w-max  text-white bg-red-400 rounded-md absolute right-5"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
