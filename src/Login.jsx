import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (  
    <>
      <div className='container shadow my-5'>
        <div className='row'>
          <div className='col-md-5 d-flex flex-column align-items-center text-black justify-content-center'>
            <p1 className='display-4 fw-bolder'>welcome back </p1>
            <h3 className='lead text-center'>enter your credentials to login</h3>
            <h5 className='mb-4'>New user?</h5>
            <Link to="/Signup"className='btn btn-outline-dark rounded-pill pb-2 w-50'>Sign-up</Link>
          </div>
          <div className='col-md-6 p-5'>
             <h1 className="display-6 fw-bolder mb-5"></h1>
             <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      accept terms and conditions
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

          </div>
        </div>
        
        </div> 
    </>
    );
}

export default Login;

