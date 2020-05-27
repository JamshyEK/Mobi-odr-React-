import React from 'react';
import '../App.css';
import {Form,Button} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import {useFormik} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Login.css'

const google = <FontAwesomeIcon icon={faGoogle } />
const facebook = <FontAwesomeIcon icon={faFacebook } />
 const Login=(props)=> {


  

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    
    },
  });


   return (
     <div >
  <div >
     <div>
       <Form onSubmit={formik.handleSubmit}>
       <label className="headlogin"><h2><b>LOGIN</b></h2></label>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" name="email"  placeholder="Email"
    
      id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} 
    />
        {formik.touched.email && formik.errors.email ? (
         <div className="errortext">{formik.errors.email}</div>
         ) : null}
  </Form.Group>
  
  <Form.Group controlId="formBasicPassword">
  <Form.Control  type="password" name="password" placeholder="Password" 
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
  />

  {formik.touched.password && formik.errors.password ? (
         <div className="errortext">{formik.errors.password}</div>
         ) : null}
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox" id="check">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>

  <Button type="submit"  variant="dark" size="md" block>LOGIN</Button>
  <hr/>

  
  <p>Or login with</p>
  <div className="row">
    <div className="col-md-6 col-sm-6 col-xs-6">
    <Button variant="outline-secondary" size="md" type="submit" block>{facebook}
    Facebook
  </Button>
    </div>
    <div className="col-md-6 col-sm-6 col-xs-6">
    <Button variant="outline-secondary" type="submit" block>{google}
      Google
  </Button>

    </div>
   
  </div>
  <div className="footsign">
  <p>Not a member? 
  <Link to="/Signup">
  <span id="signuplink"> Signup </span>
  </Link>
  </p>
  </div>
 
 
</Form>
 </div>
   </div>

     
     </div>
   );
 };


 
const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Enter Email or Username';
  } 
  // else if (!EmailValidator.validate(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }


  if (!values.password) {
    errors.password = 'Enter Password'; 
   }
  //else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i.test(values.password)) {
  //   errors.password = 'Incorrect Password';
  // }

 

  return errors;
};

export default Login;