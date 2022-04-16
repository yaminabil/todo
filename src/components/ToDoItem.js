export default function ToDoItem(props) {
  const ele = props.ele;
  const handleCompleted = props.handleCompleted;
  const handleDelete = props.handleDelete;
  return (
    <>
      <li className="oneLi">
        <div className="left"> {ele.title}</div>
        <div className="right">
          <button
            onClick={() => {
              handleCompleted(ele);
            }}
          >
            Completed
          </button>
          <button
            onClick={() => {
              handleDelete(ele._id);
            }}
          >
            Remove
          </button>
        </div>
      </li>
    </>
  );
}
