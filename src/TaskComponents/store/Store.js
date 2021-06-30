import { useContext, createContext } from 'react'
import useLocalStorage from '../../Hooks/UseLocalStorage';


const Context = createContext (
    {
        tasks: []
    }
);

const Provider = (props) => {
    const { children } = props;

    const [tasks, setTasks ] = useLocalStorage("tasks", []);

    const addTask = (text) => {
        const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 0;
        const newTask = {
            id: nextId,
            text,
            completed: false
        }
        setTasks([...tasks, newTask])
    };

    const removeTask = (id) => {
        const newTasks = tasks.filter(t => t.id !== id);
        setTasks(newTasks)
    };

    const toggleTask = (id) => {
        const foundTask = tasks.find(t => t.id === id);
        if (foundTask) {
            foundTask.completed = !foundTask.completed;
        }
        const newTasks = tasks.map(t => {
            if (t.id === id) {
                return foundTask
            }
            return t;
        });
        setTasks(newTasks)
    };

    return (
        <Context.Provider value={{ tasks, addTask, removeTask, toggleTask }}>{children}</Context.Provider>
    )
};

export const useTasks = () => useContext(Context);

export const withProvider = (Component) => {
    return (props) => {
        return <Provider>
            <Component {...props} />
        </Provider>
    };
};