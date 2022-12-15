import { useDispatch, useSelector } from "react-redux";
import { deleteKnight, messageKnight } from "../../Actions/actions.type";

const List = () => {
  const { knight } = useSelector((state) => state.reducerKnight);
  const dispatch = useDispatch();

  const handleDelete = (el) => {
    dispatch(deleteKnight(el));
    dispatch(
      messageKnight(`Le dragon ${el.knight_name} a bien été supprimé !`)
    );
  };

  return (
    <div className="px-4 sm:px-8 w-full mt-20">
      <h1>List of knight :</h1>
      <ul className="border border-gray-200 rounded overflow-hidden shadow-md w-full relative">
        {knight.map((el, i) => {
          return (
            <li
              key={i}
              className="px-4 py-2 bg-white w-full hover:bg-blue-100 hover:text-blue-900 border-b last:border-none border-blue-200 transition-all duration-300 ease-in-out  flex items-center"
            >
              {el.knight_name} - {el.age}ans
              <button
                onClick={() => handleDelete(el)}
                className="px-2 py-1 w-max  text-white bg-blue-400 rounded-md absolute right-5"
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
