// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Footer, Navbar } from '../components';
// import axios from 'axios';

// const Register = () => {
//     const history = useHistory();
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//     const [registrationSuccess, setRegistrationSuccess] = useState(false);
//     const [registrationMessage, setRegistrationMessage] = useState('');

//     const handleFullNameChange = (e) => {
//         setFullName(e.target.value);
//         updateButtonState();
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         updateButtonState();
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         updateButtonState();
//     };

//     const updateButtonState = () => {
//         if (fullName && email && password) {
//             setIsButtonDisabled(false);
//         } else {
//             setIsButtonDisabled(true);
//         }
//     };

//     const handleRegistration = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=rhsco-ayaaa-aaaao-a2lra-cai/register', {
//                 username: fullName,
//                 password,
//             });
//             if (response.status === 200) {
//                 setRegistrationSuccess(true);
//                 setRegistrationMessage("Registration successful. You can now log in.");
//                 history.push('/Login'); // Redirect to the login page
//             }  else {
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
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div className="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form onSubmit={handleRegistration}>
//                             {registrationSuccess && (
//                                 <div className="alert alert-success">{registrationMessage}</div>
//                             )}
//                             <div className="form my-3">
//                                 <label htmlFor="Name">Full Name</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     id="Name"
//                                     placeholder="Enter Your Name"
//                                     value={fullName}
//                                     onChange={handleFullNameChange}
//                                 />
//                             </div>
//                             <div className="form my-3">
//                                 <label htmlFor="Email">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="Email"
//                                     placeholder="name@example.com"
//                                     value={email}
//                                     onChange={handleEmailChange}
//                                 />
//                             </div>
//                             <div className="form my-3">
//                                 <label htmlFor="Password">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     id="Password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={handlePasswordChange}
//                                 />
//                             </div>
//                             <div className="my-3">
//                                 <p>
//                                     Already have an account?{' '}
//                                     <Link to="/login" className="text-decoration-underline text-info">
//                                         Login
//                                     </Link>{' '}
//                                 </p>
//                             </div>
//                             <div className="text-center">
//                                 <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={isButtonDisabled}>
//                                     Register
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

// export default Register;




import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../src/loginbeutify.css'; 
import { Footer, Navbar } from '../components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dummy_project_backend } from '../../../declarations/dummy_project_backend/index';


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Confirm Password does not match Password");
      return;
    }

    const signUpRes = await  dummy_project_backend.registerUser(username, password);

    if (signUpRes) {
      toast.success("Signup Successful");
      navigate("/login");
    } else {
      toast.error("Username already exists");
    }
  };

  return (

    <>
    <Navbar/>
    <div className="login-container">
      
        
        <h1 className='text-center'>Register</h1>
        <hr/>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="but" type="submit">Sign Up</button>
        </form>
        <p className="para" onClick={() => navigate("/login")}>Already have an account?</p>
      </div>
      <ToastContainer />

    
    
    <Footer/>
    </>
  );
};

export default Register;
