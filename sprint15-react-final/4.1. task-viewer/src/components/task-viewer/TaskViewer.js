import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer({ data }) {
  return (
    <div className="task-viewer">
      {data.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
}

export default TaskViewer;
