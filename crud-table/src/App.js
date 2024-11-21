import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  useEffect(() => {
    const { name, phone, email } = form;
    const value = name && phone && email;
    setIsValid(value);
  }, [form]);

  useEffect(() => {
    return () => {
      setStudentList([]);
      setForm({
        name: "",
        phone: "",
        email: ""
      });
      setIsValid(false);
      setIndexSelected(-1);
    };
  }, []);

  const handleChange = (event) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value
    }));
  };

  const handleSelect = (studentSelected, index) => {
    setForm(JSON.parse(JSON.stringify(studentSelected)));
    setIndexSelected(index);
  };

  const handleSubmit = () => {
    if (isValid) {
      if (indexSelected > -1) {
        setStudentList(prevList => {
          const newList = [...prevList];
          newList.splice(indexSelected, 1, form);
          return newList;
        });
      } else {
        setStudentList(prevList => [...prevList, form]);
      }

      setForm({
        name: "",
        phone: "",
        email: ""
      });
      setIsValid(false);
      setIndexSelected(-1);
    }
  };

  const handleDelete = (index) => {
    setStudentList(prevList => {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className="container py-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="text-center mb-4">
            <i className="fas fa-users me-2"></i>
            Student List
          </h1>

          <form className="mb-4">
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label d-flex align-items-center">
                  <i className="fas fa-user me-2"></i>
                  <span className="label-text">
                    <span className="label-main">Full</span>
                    <span className="label-sub">Name</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label d-flex align-items-center">
                  <i className="fas fa-phone me-2"></i>
                  <span className="label-text">
                    <span className="label-main">Phone</span>
                    <span className="label-sub">Number</span>
                  </span>
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label d-flex align-items-center">
                  <i className="fas fa-envelope me-2"></i>
                  <span className="label-text">
                    <span className="label-main">Email</span>
                    <span className="label-sub">Address</span>
                  </span>
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={handleSubmit}
                disabled={!isValid}
              >
                <i className="fas fa-save me-2"></i>
                {indexSelected > -1 ? 'Update Student' : 'Add Student'}
              </button>
            </div>
          </form>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col"><i className="fas fa-user me-2"></i>Full Name</th>
                  <th scope="col"><i className="fas fa-phone me-2"></i>Phone Number</th>
                  <th scope="col"><i className="fas fa-envelope me-2"></i>Email Address</th>
                  <th scope="col" className="text-center"><i className="fas fa-cogs me-2"></i>Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => handleSelect(student, index)}
                        title="Edit Student"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                        title="Delete Student"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                {studentList.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      No students found. Please add a new student.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;