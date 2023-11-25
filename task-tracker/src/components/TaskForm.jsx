import { useState } from "react";

const intTask = { title: "", isCompleted: false };

const TaskForm = ({ taskList, setTaskList, editIndex }) => {
  const [task, setTask] = useState(intTask);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title === "") {
      setError("Task cannot be blank");
      return;
    } else {
      setTaskList([...taskList, task]);
      setTask(intTask);
      console.log(task);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Task Tracker App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={task.title}
          onChange={handleChange}
        />
        <button>{editIndex === -1 ? "Add Task" : "Update Task"}</button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default TaskForm;
