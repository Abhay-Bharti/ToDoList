import { useContext, useState } from "react";
import TaskContext from "./context/TaskContext";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

    const { addNewTask } = useContext(TaskContext);
    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: "",
        description: "",
    })

    let handleInput = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        setTask({});
        navigate("/");
    }

    return (
        <section className="addTask">
            <h1 className="ui heading center">Add new Task</h1>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field" >
                        <label >Title</label>
                        <input type="text" placeholder="Task Title" name="title" onChange={handleInput} value={task.title} />
                    </div>
                    <div className="field" >
                        <label>Description</label>
                        <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInput} value={task.description}></textarea>
                    </div>
                    <button type="submit" className="ui primary button">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default AddTask;