import React, { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([
                ...tasks, {
                    id: Date.now(),
                    text: newTask,
                    completed: false
                }
            ]);
            setNewTask('');
        }
    };


    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tarefas</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Digite uma nova tarefa"
                        className="flex-grow p-2 border rounded-l-lg"
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                    />
                    <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                        Adicionar
                    </button>
                </div>

                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="flex items-center justify-between p-2 border-b">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                    className="mr-3"
                                />
                                <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
                                    {task.text}
                                </span>
                            </div>
                            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 text-center text-gray-600">
                    Total de tarefas: {tasks.length} |
                    Concluídas: {tasks.filter(task => task.completed).length}
                </div>
            </div>
        </section>
    );
};

export default ToDoList;