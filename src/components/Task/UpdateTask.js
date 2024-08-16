import React, { useEffect, useState } from 'react';
import Header from '../../navbar/Header';

const UpdateTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://taskmanagement-backend-97sv.onrender.com/api/getalltask');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError('Failed to fetch tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`https://taskmanagement-backend-97sv.onrender.com/api/updatetask/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    } catch (error) {
      setError('Failed to update task. Please try again.');
    }
  };

  return (
    <>

      <Header></Header>

      <div className="task-update-container">
        {loading && <p>Loading tasks...</p>}
        {error && <p className="error-message">{error}</p>}
        {tasks.length === 0 && !loading && <p>No tasks available.</p>}
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              {/* <th>Description</th> */}
              <th>Due Date</th>
              {/* <th>Priority</th> */}
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.taskName}</td>
                {/* <td>{task.description}</td> */}
                <td>{task.dueDate}</td>
                {/* <td>{task.priority}</td> */}
                <td>
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpdateTask;
