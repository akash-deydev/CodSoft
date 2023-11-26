import { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkXFill } from "react-icons/bs";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskIndex, setTaskIndex] = useState(-1);
  const [incompleteTask, setIncompleteTask] = useState(0);

  useEffect(() => {
    noOfIncompleteTasks();
  }, [tasks]);

  const addTask = (e) => {
    if (taskTitle === "") {
      return;
    }
    if (taskIndex === -1) {
      setTasks([...tasks, { taskTitle, isComplete: false }]);
      setTaskTitle("");
      toast.success("Task added");
    } else {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = {
        taskTitle,
        isComplete: updatedTasks[taskIndex].isComplete,
      };
      setTasks(updatedTasks);
      setTaskIndex(-1);
      setTaskTitle("");
      toast.success("Task updated successfully");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    setTasks(updatedTasks);
    toast.error("Task Deleted Successfully");
  };

  const editTask = (taskId) => {
    setTaskTitle(tasks[taskId].taskTitle);
    setTaskIndex(taskId);
  };

  const toggleTaskComplete = (taskId) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskId].isComplete = !updatedTasks[taskId].isComplete;
    setTasks(updatedTasks);
    if (updatedTasks[taskId].isComplete === true) {
      toast.success("Task Completed", { icon: "👍" });
    } else {
      toast.error("Task marked incomplete", { icon: "😒" });
    }
  };

  const noOfIncompleteTasks = () => {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i]);
      if (tasks[i].isComplete === false) {
        count++;
      }
    }
    setIncompleteTask(count);
  };

  return (
    <div className="taskTracker-app">
      <Toaster />
      <div className="tasks-count">
        <div>Total No of Tasks: {tasks.length}</div>
        <div>Incomplete Tasks: {incompleteTask}</div>
      </div>
      <div className="task-form">
        <h1>Task Tracker</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={addTask}>
            {taskIndex === -1 ? "Add Task" : "Update Task"}
          </button>
        </div>
      </div>
      <div className="tasks-container">
        {tasks.map((task, index) => {
          return (
            <div
              className={`task-box ${
                task.isComplete ? "completed-task" : "incomplete-task"
              }`}
            >
              <div className="task" key={index}>
                {task.taskTitle}
              </div>
              <div className="task-buttons">
                <AiFillEdit
                  className="edit-btn"
                  onClick={() => editTask(index)}
                />
                <AiFillDelete
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                />
                {task.isComplete ? (
                  <BsBookmarkXFill
                    className="incomplete-btn"
                    onClick={() => toggleTaskComplete(index)}
                  />
                ) : (
                  <BsBookmarkCheckFill
                    className="complete-btn"
                    onClick={() => toggleTaskComplete(index)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <div>Copyright © 2023 - Akash Dey</div>
      </footer>
    </div>
  );
}

export default App;
