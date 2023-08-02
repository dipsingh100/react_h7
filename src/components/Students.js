import React from "react";
import "../css/students.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Students = () => {
  const data = useSelector((state)=>state.Details)
  return (
    <>
      <div className="container">
        <div className="title-cont">
          <h1>Students Details</h1>
          <Link to='/new_student'>
            <button className="add-new-st">
              Add new student
            </button>
          </Link>
        </div>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td>
                      <Link to={'/edit/' + index}>Edit</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
