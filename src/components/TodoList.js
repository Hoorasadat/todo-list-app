import "./Todo.css";

const Todo = () => {
    return (
        <div className="todo">
            <ul>
                <div className="task">
                    <li>Task 1</li>
                    <input type="checkbox" />
                </div>
                <div className="task">
                    <li>Task 2</li>
                    <input type="checkbox" />
                </div>
                <div className="task">
                    <li>Task 3</li>
                    <input type="checkbox" />
                </div>
            </ul>
        </div>
    );
}

export default Todo;
