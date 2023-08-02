import React, {useState} from 'react'
import "../css/students.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { EditStudent, RemoveStudent } from '../features/StudentSlice';

const Edit = () => {
  const dispatch = useDispatch()
  const id = parseInt( useParams().id)
  const data = useSelector((state)=>state.Details)

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
  }

  const handleDelete = ()=>{
    const Student = {
      id: id,
      Name: name,
      Age: age,
      Course: course,
      Batch: batch
    }
    dispatch(RemoveStudent(Student))
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
        <Link to={'/students'} onClick={handleDelete}><button>Delete</button></Link>
        <button>Cancel</button>
        <Link to={'/students'} onClick={handleEdit}><button>Update</button></Link>
      </div>
    </>
  )
}

export default Edit
