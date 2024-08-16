import React, { useContext, useState } from 'react';
import axios from 'axios';
import './task.css';
import { AuthContext } from '../../components/auth/AuthContext';
import Header from '../../navbar/Header';

const TaskForm = () => {
  const [task, setTask] = useState({
    taskname: '',
    description: '',
    duedate: '',
    priority: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { token } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('https://taskmanagement-backend-97sv.onrender.com/api/addtask', task, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });

      console.log('Task Submitted:', response.data);
      // Reset form or redirect as needed
      setTask({
        taskname: '',
        description: '',
        duedate: '',
        priority: 1,
      });
    } catch (error) {
      setError('Failed to submit task. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="task-form-container">
        <form className="task-form" onSubmit={handleSubmit}>
          <h2>Add New Task</h2>

          {error && <p className="error-message">{error}</p>}

          <label htmlFor="taskname">Task Name:</label>
          <input
            type="text"
            id="taskname"
            name="taskname"
            value={task.taskname}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="4"
            required
          />

          <label htmlFor="duedate">Due Date:</label>
          <input
            type="date"
            id="duedate"
            name="duedate"
            value={task.duedate}
            onChange={handleChange}
            required
          />

          {/* <label htmlFor="priority">Priority (1-10):</label>
          <input
            type="number"
            id="priority"
            name="priority"
            min="1"
            max="10"
            value={task.priority}
            onChange={handleChange}
            required
          /> */}

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              required
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add Task'}
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;