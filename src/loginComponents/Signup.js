import React from 'react';
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFormik  } from 'formik';
import * as EmailValidator from 'email-validator';
import './Login.css'
import axios from 'axios';


 
 
   const Signup=(props)=>{


    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validate,
      onSubmit: values => {
        axios.post('http://localhost:9000/user', 
          values
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      
      },
    });
    // return (
    //   <form onSubmit={formik.handleSubmit}>
    //     <label htmlFor="firstName">First Name</label>
    //     <input
    //       id="firstName"
    //       name="firstName"
    //       type="text"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.firstName}
    //     />
    //     {formik.touched.firstName && formik.errors.firstName ? (
    //       <div>{formik.errors.firstName}</div>
    //     ) : null}
   
    //     <label htmlFor="email">Email Address</label>
    //     <input
    //       id="email"
    //       name="email"
    //       type="email"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.email}
    //     />
    //     {formik.touched.email && formik.errors.email ? (
    //       <div>{formik.errors.email}</div>
    //     ) : null}
    //     <button type="submit">Submit</button>
    //   </form>
    // );
      
   return (
     
     <div >
   <div >
     <div>
       <Form  onSubmit={formik.handleSubmit}>
       <label className="headlogin"><h2><b>SIGNUP</b></h2></label>
       <Form.Group controlId="">
        <Form.Control  type="text" name="name" placeholder="Name" 
          // id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} />
         {formik.touched.name && formik.errors.name ? (
         <div className="errortext">{formik.errors.name}</div>
         ) : null}
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control  type="email" name="email" placeholder="Email" 
          // id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
    />
        {formik.touched.email && formik.errors.email ? (
        <div className="errortext">{formik.errors.email}</div>
        ) : null}
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" name="password" placeholder="Password" 
          // id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
    />
          {formik.touched.password && formik.errors.password ? (
        <div className="errortext">{formik.errors.password}</div>
        ) : null}
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" 
      //  id="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword} 
          />
             {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="errortext">{formik.errors.confirmPassword}</div>
        ) : null}
  </Form.Group>

  
  <Form.Group controlId="formBasicCheckbox" id="check">
    <Form.Check type="checkbox" label="I accept the Terms & Privacy Policy" required="true" />
  </Form.Group>
 


  <Button type="submit"  variant="dark" size="md"  block>SIGNUP</Button>

  <div className="footsign">
  <p>Already have an account? 
  <Link to="/Login">
  <span id="signuplink"> Login</span>
  </Link>
  </p>
  </div>
 
 
</Form>
 </div>
   </div>


     
     </div>
   );
  };
 

//     const [state,setstate] =useState({
    
//     userDetails:{},
//     passStatus:false
    
//     })


//     const textChange=(event)=>{
//       const userDetails=state.userDetails;
//       userDetails[event.target.name] = event.target.value
//       setstate({
//         userDetails:userDetails
//       });
//      // console.log (state.userDetails);
//      }

//      const passSuccess=(props)=> {
//       return <h1>Pass {props.status}</h1>;
//     }
    
//     // const PassFailed=(props)=> {
//     //   return <h1>PassFailed</h1>;
//     // }


     
//      const buttonClickHandler=()=>{
//       console.log(state.userDetails);
//       let password=state.userDetails.password;
//       let confirmpassword=state.userDetails.confirmPassword;


      

//        if(password == confirmpassword )
//       {
//         setstate({
//           passStatus:{...true}
//         });
//         console.log("Pass success");
//       }else{
//         setstate({
//           passStatus:{...false}
//         });
//         console.log("pass incorrect")
//       }
//      }



const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  } else if(values.name){
   // let valid="";
  //const val= 
  // valid();
  //  const valid=()=>{ 
  axios.post('http://localhost:9000/users', 
    {"name":"Jamshy Ek11"}
  )
  .then(function (response) {
    return response.data;
    // console.log(response.data);
    // errors.name = response.data.error;
    // console.log("===")
   // valid=response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
  //errors.name = valid;

  }
  

  if (!values.email) {
    errors.email = 'Required';
  } 
  else if (!EmailValidator.validate(values.email)) {
    errors.email = 'Invalid email address';
  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }


  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters ';
  }else if (!/(?=.*[a-z])(?=.*[A-Z])/i.test(values.password)) {
    errors.password = 'Must be lowercase characters';
  }
  else if (!/(?=.*[0-9])/i.test(values.password)) {
    errors.password = 'Must be digit characters';
  }
  else if (!/(?=.*[!@#%&])/i.test(values.password)) {
    errors.password = 'Must be special characters';
  }
 


  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password mismatch';
  }

  return errors;
};

export default Signup;