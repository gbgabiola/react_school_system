import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
  const [student, setStudent] = useState({
    name: '',
    course: '',
    major: '',
    email: '',
    address: '',
    image: '',
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/students/${id}`);
    setStudent(res.data);
  };

  return (
    <div className="">
      <Link className="" to="/students">
        back to Students List
      </Link>
      <h1 className="">User Id: {id}</h1>
      <hr />
      <ul className="">
        <li className="">name: {student.name}</li>
        <li className="">course: {student.course}</li>
        <li className="">email: {student.email}</li>
        <li className="">address: {student.address}</li>
        <li className="">image: {student.image}</li>
      </ul>
    </div>
  );
};

export default Student;
