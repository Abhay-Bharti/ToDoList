import { useContext } from "react"
import Task from "../components/Task";
import TaskContext from "../components/context/TaskContext";
import { useNavigate } from "react-router-dom";

const ToDoScreen = () => {

    const { taskList } = useContext(TaskContext);
    const navigate = useNavigate();

    return (
        <>
            <div className="btn">
                <h1 className="ui heading center">To Do List</h1>
                <div className="btn">
                    <button onClick={(event) => {
                        navigate("/add-task");
                    }}
                        className="ui secondary button btn">Add Task</button>
                    <section>
                        <div className="ui cards">
                            {taskList.map((task) => (<Task task={task} key={task.taskId} />))}
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default ToDoScreen;