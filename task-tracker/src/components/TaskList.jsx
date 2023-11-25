import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkXFill } from "react-icons/bs";

const TaskList = ({ taskList, deleteTaskFromList }) => {
  const [isComplete, setIsComplete] = useState(false);

  const clasSname = isComplete ? "complete" : "incomplete";

  return (
    <div className="tasks-container">
      {taskList.map((task, id) => {
        return (
          <div className={`task ${clasSname}`} key={id}>
            {task.title}
            <div className="task-buttons">
              <AiFillEdit style={{ color: "blue" }} />
              <AiFillDelete
                style={{ color: "orange" }}
                onClick={() => deleteTaskFromList(id)}
              />
              {isComplete ? (
                <BsBookmarkXFill
                  style={{ color: "red" }}
                  onClick={() => setIsComplete(!isComplete)}
                />
              ) : (
                <BsBookmarkCheckFill
                  style={{ color: "green" }}
                  onClick={() => setIsComplete(!isComplete)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
