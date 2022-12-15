import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addDragon, messageDragon, reverseDragon } from "../../Actions/actions.type";

const Form = () => {
  const { dragon } = useSelector((state) => state.reducerDragon);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameDragon = e.target.elements.name.value;
    const ageDragon = e.target.elements.age.value;

    if (nameDragon.trim() === "" || ageDragon.trim() === "") {
      alert("Il y a un champ vide !");
      return;
    }

    for (const el of dragon) {
      if (nameDragon.trim() == el) {
        alert("Il y a déjà un dragon avec ce nom !");
        return;
      }
    }

    dispatch(addDragon(nameDragon, ageDragon));
    dispatch(messageDragon(`Merci votre dragon ${nameDragon} a bien été ajouté !`));

    e.target.elements.name.value = "";
    e.target.elements.age.value = "";
  };

  const handleReverse = () => {
    dispatch(reverseDragon());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-10 px-10 bg-white rounded-2xl shadow-xl mt-10"
      >
        <div className="mb-4">
          <label htmlFor="name">Name(dragon) :</label>
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
        <div className="flex flex-col gap-5">
          <button className="px-4 py-1 w-max text-xl text-white bg-red-400 rounded-md">
            Add
          </button>
          <button
            onClick={handleReverse}
            type="button"
            className="px-2 py-1 w-max text-white bg-red-300 rounded-md"
          >
            Reverse 🔁
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
