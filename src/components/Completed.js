export default function Completed(props) {
  const handleDelete = props.handleDelete;
  const completedTodos = props.completedTodos;
  return (
    <div>
      <h3>Completed: </h3>
      <ul>
        {completedTodos.map((ele) => {
          return (
            <li key={ele._id} className="oneLi">
              {ele.title}

              <button
                onClick={() => {
                  handleDelete(ele._id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
