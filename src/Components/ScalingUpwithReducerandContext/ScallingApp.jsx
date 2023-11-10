import { Button, Checkbox, Input, Space } from "antd";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { TaskContext, TaskDispatchContext } from "./TaskContexts";

const initialState = {
  status: "ok",
  taskList: [{ id: 1, taskText: "workout", done: true }],
};

const taskReducer = (initialState, action) => {
  switch (action.type) {
    case "add_task":
      return {
        ...initialState,
        taskList: [...initialState.taskList, action.newTask],
      };

    case "delete":
      return {
        ...initialState,
        taskList: initialState.taskList.filter((i) => i.id !== action.id),
      };

    case "change":
      return {
        ...initialState,
        taskList: initialState.taskList.map((i) => {
          if (i.id === action.details.id) {
            return action.details;
          } else {
            return i;
          }
        }),
      };

    default:
      console.log("type does not matched");
  }
};

const TaskApp = () => {
  const [getTasks, taskDispatcher] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={getTasks.taskList}>
      <TaskDispatchContext.Provider value={taskDispatcher}>
        <div style={{ padding: "10px 30px" }}>
          <h1>ScalingUpwithReducerandContext</h1>
          <AddTask></AddTask>
          <TaskList style={{ marginTop: "20px" }}></TaskList>
        </div>
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

function AddTask() {
  const ref = useRef();
  const [id, setid] = useState(1);
  const taskDispatcher = useContext(TaskDispatchContext);

  function handleAddTask(newTask) {
    taskDispatcher({ type: "add_task", newTask });
  }

  const handleInputValue = () => {
    handleAddTask({ id: id + 1, taskText: ref.current.value, done: false });
    setid(id + 1);
  };

  return (
    <div>
      <input ref={ref} type="text" placeholder="Enter Task" />{" "}
      <button type="submit" onClick={handleInputValue}>
        Add Task
      </button>
    </div>
  );
}

function TaskList({}) {
  const taskList = useContext(TaskContext);
  const taskActions = useContext(TaskDispatchContext);

  const listData = taskList.map((element, index) => {
    return (
      <div key={element.id}>
        <TaskListComponent task={element}></TaskListComponent>
      </div>
    );
  });

  return <div>{listData}</div>;
}

function TaskListComponent({ task, handleChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const taskDispatcher = useContext(TaskDispatchContext);

  function handleChange(details) {
    taskDispatcher({ type: "change", details });
  }

  function handleDlete(id) {
    taskDispatcher({ type: "delete", id });
  }

  let element;
  let ref = "";
  if (isEditing) {
    element = (
      <input
        type="text"
        onChange={(e) => {
          handleChange({ ...task, taskText: e.target.value });
        }}
        defaultValue={task.taskText}
      />
    );
  } else {
    element = <p>{task.taskText}</p>;
  }

  return (
    <Space>
      <Checkbox
        defaultChecked={task.done}
        onClick={(e) => {
          handleChange({ ...task, done: e.target.checked });
        }}
      ></Checkbox>
      {element}
      <Button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button onClick={() => handleDlete(task.id)}>Delete</Button>
    </Space>
  );
}

export default TaskApp;
