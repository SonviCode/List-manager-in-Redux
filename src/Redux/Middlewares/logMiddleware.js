import { ADD_KNIGHT, DELETE_KNIGHT } from "../../Constants/actions";
import { ADD_DRAGON, DELETE_DRAGON } from "../../Constants/actions";
import { addLog, messageDragon, messageKnight } from "../Actions/actions.type";
import { useSelector } from "react-redux";

const logMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  const dispatch = store.dispatch;

  const newDay = new Date();

  let date = newDay.toJSON().slice(0, 10);
  let dayDate =
    date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);

  //   console.log(newDay.getHours());
  //   console.log(newDay.getMinutes());
  //   console.log(newDay.getSeconds());

  if (action.type === ADD_DRAGON) {
    dispatch(
      addLog(`Le dragon ${action.drag_name} a été ajouté le ${dayDate}`)
    );
  } else if (action.type == DELETE_DRAGON) {
    dispatch(
      addLog(`Le dragon ${action.value.drag_name} a été supprimé le ${dayDate}`)
    );
  } else if (action.type == ADD_KNIGHT) {
    dispatch(
      addLog(`Le knight ${action.knight_name} a été ajouté le ${dayDate}`)
    );
  } else if (action.type == DELETE_KNIGHT) {
    dispatch(
      addLog(
        `Le knight ${action.value.knight_name} a été supprimé le ${dayDate}`
      )
    );
  }

  return next(action);
};

export default logMiddleware;
