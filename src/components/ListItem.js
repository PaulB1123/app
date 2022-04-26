export default function ListItem(props) {
  function handelDelete() {
    props.deleteItem(props.id);
  }

  function handleCompletion() {
    props.toggleCompletion(props.id);
  }
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task}{" "}
      <div class="button">
        <button id="comp" onClick={handleCompletion}>
          {props.completed ? "Undo" : "Complete"}
        </button>{" "}
        <button onClick={handelDelete}>Delete</button>
      </div>
    </li>
  );
}
