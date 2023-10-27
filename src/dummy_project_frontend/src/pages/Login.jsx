// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Footer, Navbar } from '../components';
// import axios from 'axios';

// const Login = () => {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//     const [loginSuccess, setLoginSuccess] = useState(false);
//     const [loginMessage, setLoginMessage] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         updateButtonState();
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         updateButtonState();
//     };

//     const updateButtonState = () => {
//         if (email && password) {
//             setIsButtonDisabled(false);
//         } else {
//             setIsButtonDisabled(true);
//         }
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=rhsco-ayaaa-aaaao-a2lra-cai/login', {
//                 username: email,
//                 password,
//             });
//             if (response.status === 200) {
//                 setLoginSuccess(true);
//                 setLoginMessage("Login successful. Redirecting to your profile.");
//                 history.push('/Home'); // Redirect to the user's profile or dashboard
//             } else {
//                 // Registration was not successful
//                 setRegistrationSuccess(false);
//                 setRegistrationMessage("Registration failed. Please try again.");
//             }
//         } catch (error) {
//             // Handle network errors
//             setRegistrationSuccess(false);
//             setRegistrationMessage("An error occurred. Please try again later.");
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Login</h1>
//                 <hr />
//                 <div className="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form onSubmit={handleLogin}>
//                             {loginSuccess && (
//                                 <div className="alert alert-success">{loginMessage}</div>
//                             )}
//                             <div className="my-3">
//                                 <label htmlFor="display-4">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="floatingInput"
//                                     placeholder="name@example.com"
//                                     value={email}
//                                     onChange={handleEmailChange}
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <label htmlFor="floatingPassword display-4">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="floatingPassword"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={handlePasswordChange}
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>
//                                     New Here?{' '}
//                                     <Link to="/register" className="text-decoration-underline text-info">
//                                         Register
//                                     </Link>{' '}
//                                 </p>
//                             </div>
//                             <div className="text-center">
//                                 <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={isButtonDisabled}>
//                                     Login
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Login;





import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import { useNavigate } from "react-router-dom";
import '../../src/loginbeutify.css'; 

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dummy_project_backend } from '../../../declarations/dummy_project_backend/index';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginRes = await dummy_project_backend.verifyuser(username, password);

    if (loginRes === "Success") {
      toast.success("Login Successful");
      navigate("/Home");
    } else {
      toast.error("Login Failed - Invalid Credentials");
    }
  };

  return (
    <>
    <Navbar/>

    <div className="login-container">
    <h1 className="text-center">Login</h1>
    <hr />
        
        <h3 className="web-txt-auth">
         
        </h3>
      </div>
      <div className="ford">
       
        <form className="hero" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="but" type="submit">Login</button>
        </form>
        <p className='para' onClick={() => navigate("/register")}>Don't have an account?</p>
      </div>
      <ToastContainer />




    
    <Footer/>
    </>
  );
};

export default Login;
