import ToDoItem from "./ToDoItem";

export default function ToDo(props) {
  const handleCompleted = props.handleCompleted;
  const handleDelete = props.handleDelete;
  const data = props.data;
  return (
    <>
      <h3>To Do Items :</h3>
      <ul>
        {data.map((ele) => {
          return (
            <ToDoItem
              ele={ele}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
}
