export default function CreateBar(props) {
  const handleChange = props.handleChange;
  const handleCreate = props.handleCreate;
  return (
    <>
      <h3>New Item : </h3>
      <li className="createbar">
        <div className="leftbar">
          <input name="title" onChange={handleChange} />
        </div>
        <div className="rightbar">
          {" "}
          <button
            onClick={() => {
              handleCreate();
            }}
          >
            Create
          </button>
        </div>
      </li>
    </>
  );
}
