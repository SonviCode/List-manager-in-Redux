import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addKnight, messageDragon, messageKnight, reverseKnight } from "../../Actions/actions.type";

const Form = () => {
  const { knight } = useSelector((state) => state.reducerKnight);
  const { dragon } = useSelector((state) => state.reducerDragon);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameKnight = e.target.elements.name.value;
    const ageKnight = e.target.elements.age.value;

    if (nameKnight.trim() === "" || ageKnight.trim() === "") {
      alert("Il y a un champ vide !");
      return;
    }

    for (const el of knight) {
      if (nameKnight.trim() === el) {
        alert("Il y a déjà un knight avec ce nom !");
        return;
      }
    }

    dispatch(addKnight(nameKnight, ageKnight));
    dispatch(messageKnight(`Merci votre knight ${nameKnight} a bien été ajouté !`));

    e.target.elements.name.value = "";
    e.target.elements.age.value = "";
  };

  const handleReverse = () => {
    dispatch(reverseKnight());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-10 px-10 bg-white rounded-2xl shadow-xl mt-10"
      >
        <div className="mb-4">
          <label htmlFor="name">Name(knight) :</label>
          <input
            id="name"
            type="text"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <label htmlFor="age">Age :</label>
          <input
            id="age"
            type="text"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <select name="connectDragonToKnight" id="dragonChoice">
          {dragon.map((el, i) => {
            return (
              <option
                key={i}
                className="px-4 py-2 bg-white w-full hover:bg-red-100 hover:text-red-900 border-b last:border-none border-red-200 transition-all duration-300 ease-in-out  flex items-center"
              >
                {el.drag_name} - {el.age}ans
              </option>
            );
          })}
        </select>
        <div className="flex flex-col gap-5 mt-10">
          <button className="px-4 py-1 w-max text-xl text-white bg-blue-400 rounded-md">
            Add
          </button>
          <button
            onClick={handleReverse}
            type="button"
            className="px-2 py-1 w-max text-white bg-blue-300 rounded-md"
          >
            Reverse 🔁
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
