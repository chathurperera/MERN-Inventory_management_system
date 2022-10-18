import React, { useState } from "react";
import classes from "./login.module.scss";
import API from "api";
import { useNavigate } from "react-router-dom";
import Spinner from "components/Spinner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "features/userSlice";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "admin@gmail.com",
    password: "admin123",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitDetails = async (e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.password) {
      return;
    }
    dispatch(loginStart());
    
    await API.post("/login", userInput)
      .then((res) => {
        dispatch(loginSuccess(res.data.data));
        navigate("/");
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log(error);
      });
  };
  
  return (
    <div className={classes.login}>
      <form className={classes.loginHolder} onSubmit={submitDetails}>
        <h3>Welcome back</h3>
        <div className={classes.inputHolder}>
          <label>Email</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            required
            value={userInput.email}
            placeholder="enter your email"
          />
        </div>
        <div className={classes.inputHolder}>
          <label>Password</label>
          <input
            value={userInput.password}
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="enter your password"
          />
        </div>
        <button>{user.isFetching ? <Spinner /> : " Login"}</button>
      </form>
    </div>
  );
};

export default Login;
