import React, { useState } from 'react'
import "../css/students.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { EditStudent, RemoveStudent } from '../features/StudentSlice';

const Edit = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = parseInt(useParams().id)
  const data = useSelector((state) => state.Details)

  const [name, setName] = useState(data[id].Name)
  const [age, setAge] = useState(data[id].Age)
  const [batch, setBranch] = useState(data[id].Batch)
  const [course, setCourse] = useState(data[id].Course)
  const handleEdit = () => {
    const newStudent = {
      id: id,
      Name: name,
      Age: age,
      Course: course,
      Batch: batch
    }
    dispatch(EditStudent(newStudent))
    navigate('/students')
  }

  const handleDelete = () => {
    const Student = {
      id: id,
      Name: name,
      Age: age,
      Course: course,
      Batch: batch
    }
    dispatch(RemoveStudent(Student))
    navigate('/students')
  }
  return (
    <>
      <form className="form-container">
        <div className="inp-container">
          <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
          <label>Name</label>
        </div>
        <div className="inp-container">
          <input type="number" name="age" value={age} required onChange={(e) => setAge(e.target.value)} />
          <label>Age</label>
        </div>
        <div className="inp-container">
          <input type="text" name="course" value={course} required onChange={(e) => setCourse(e.target.value)} />
          <label>Course</label>
        </div>
        <div className="inp-container">
          <input type="text" name="batch" value={batch} required onChange={(e) => setBranch(e.target.value)} />
          <label>Batch</label>
        </div>
      </form>
      <div className="buttons">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigate('/students')
        }>Cancel</button>
        <button onClick={handleEdit}>Update</button>
      </div>
    </>
  )
}

export default Edit
