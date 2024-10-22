import React, { useEffect, useState } from 'react';
import log from "../../../assets/log.jpg";
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


const Signup = () => {
  const [message, setMessage] = useState(''); // State to hold the message
  const [isLoading, setIsLoading] = useState(false); // State to control loading
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  
   const url = "https://bookit-app-vn3p.vercel.app/user/signup"

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: "",
    },

    onSubmit: (values) => {
      setIsLoading(true);
      axios.post(url, values)
        .then((res) => {
          let userName = userNamee.value
          console.log(res);
          Swal.fire("User Registered, Login to proceed");
          navigate("/user/signin");
          localStorage.setItem("userName", JSON.stringify({ name: userName }));
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response?.data.message || 'An error occurred'); // Set error message
        })
        .finally(() => {
          setIsLoading(false);
        })
    },

    validationSchema: yup.object({
      Email: yup.string().required("Email is required"),
      Name: yup.string()
      .required("Name is required")
      .matches(/^[A-Z]/, "First letter must be uppercase"), 
      Password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/,
          "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    }),
  });

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [message]);
  
  return (
    <>
      <div className="wrapper login-3">
        <div className="container d-flex" style={{ marginTop: "160px" }}>
          <div className="col-left">
            <div className="login-text">
              <h2><img src={log} alt="Logo" /></h2>
              <p>
                Experience a range of beautifully designed rooms and suites that cater to all your needs. Each room is equipped with:
              </p>
              <button className='btn'>Read More</button>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>SIGNUP!</h2>
              {message && <p className="error-message fw-bolder text-danger fs-3">{message}!!!!!!!!</p>} 
              <form onSubmit={formik.handleSubmit}>
                <p>
                  <input id='userNamee' type="text" placeholder="Name" name='Name' onChange={formik.handleChange} />
                  <small>{formik.errors.Name}</small>
                </p>
                <p>
                  <input type="email" placeholder="Email" name='Email' onChange={formik.handleChange} />
                  <small>{formik.errors.Email}</small>
                </p>
                <p>
                                <div className='d-flex'>
                                <input type={isPasswordShow ? "text" : "password"} placeholder="Password" name='Password'  onChange={formik.handleChange}/>
                                <button type='button' class="input-group-text" id="addon-wrapping" onClick={() => { setIsPasswordShow(!isPasswordShow) }} ><i class={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></button>
                                </div>
                                <small>{formik.errors.Password}</small>
                                
                            </p>
                <p>
                  <button className='btn w-100 btn-primary'  disabled={isLoading}>
                    {
                      !isLoading ? 
                      "Sign up"
                      : "Signing up...Please wait"
                    }
                    
                    
                    </button>
                </p>
                <p>
                  <small>Have an account?</small>
                  <Link to="/user/signin"> Sign In.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
