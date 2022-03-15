import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((previousValue) => ({
      //   ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> register
        </h1>
        <p>Create a new account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              id="password2"
              value={password2}
              name="password2"
              onChange={onChange}
            />
          </div>
          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
