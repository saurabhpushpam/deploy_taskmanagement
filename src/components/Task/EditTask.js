import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/auth/AuthContext';
import './task.css';
import Header from '../../navbar/Header';

const EditTask = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [task, setTask] = useState({ taskname: '', description: '', duedate: '', priority: '', status: '' });
  const navigate = useNavigate();


  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`https://taskmanagement-backend-97sv.onrender.com/api/gettaskbyid/${id}`, {
          headers: { Authorization: `${token}` },
        });
        setTask(response.data.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTask();
  }, [id, token]);


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://taskmanagement-backend-97sv.onrender.com/api/updatetask/${id}`, task, {
        headers: { Authorization: `${token}` },
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <>
      <Header />

      <div className="edit-task-container">
        <h2>Edit Task</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="taskname">Task Name</label>
            <input
              type="text"
              id="taskname"
              value={task.taskname}
              onChange={(e) => setTask({ ...task, taskname: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duedate">Due Date</label>
            <input
              type="date"
              id="duedate"
              value={task.duedate}
              onChange={(e) => setTask({ ...task, duedate: e.target.value })}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              required
            >
              <option value="">Select Status</option>
              <option value="pending">pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>
    </>
  );
};

export default EditTask;
