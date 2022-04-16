import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CreateBar from "./components/CreateBar";
import ToDo from "./components/ToDo";
import Completed from "./components/Completed";

function App() {
  //<=================================================================app starts from here

  //<==================== declaring variblaes and use state
  const [data, setData] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [obj, setObj] = useState({
    title: "",
    completed: false,
  });
  //<============================ functions
  // get uncompleted tasks
  const getData = async () => {
    try {
      const response = await axios.get("/api/todo/");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // get completed tasks
  const getcompleted = async () => {
    try {
      const response = await axios.get("/api/todo/completed");
      setCompletedTodos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // create function
  const handleCreate = async () => {
    await axios.post("/api/todo/new", { todo: obj });
    getData();
  };

  //delete function
  const handleDelete = async (id) => {
    await axios.delete(`/api/todo/${id}`);
    await axios.delete(`/api/todo/completed/${id}`);
    getData();
    getcompleted();
  };
  //handle Change
  const handleChange = async (event) => {
    setObj({ ...obj, [event.target.name]: event.target.value });
  };

  //handle completed
  const handleCompleted = async (ele) => {
    await axios.put(`/api/todo/${ele._id}`, {
      todo: { title: ele.title, completed: true },
    });
    getData();
    getcompleted();
  };
  //<=============================use effect for both completed and new data
  useEffect(() => {
    getData();
    getcompleted();
  }, []);

  return (
    <div className="App">
      <h1 className="title">My To Do List </h1>
      <CreateBar handleChange={handleChange} handleCreate={handleCreate} />
      <ToDo
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        data={data}
      />
      <Completed handleDelete={handleDelete} completedTodos={completedTodos} />
    </div>
  );
}

export default App;
