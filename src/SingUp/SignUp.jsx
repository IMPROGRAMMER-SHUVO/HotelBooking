import { Link } from "react-router-dom";
import { 
  
  FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AnotherProvider/AuthPoviders";

const SignUp = () => {
  const [error,setError]=useState('')
const {createUser}=useContext(AuthContext)

  const handlesingUp=event=>{
    event.preventDefault();
     const form=event.target;
     const email=form.email.value;
     const password=form.password.value;
     const Confirmpassword=form.Confirmpassword.value
     console.log(email,password,Confirmpassword)
     setError('')
if(password !=Confirmpassword){
  setError('your passord dint match')
  return
}
else if(password.length<6){
  setError('password must be at last 6 characters')
  return
}
createUser(email,password)
.then(result=>{
  const loggeduser=result.user;
  console.log(loggeduser)
})
.catch(error=>{
  console.log(error)
  setError(error.message)
})

  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign Up!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlesingUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" name="Confirmpassword" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <div className=" grid-cols-2 m-2 ">  <button className="px-10 py-2 border-2 rounded-md  bg-indigo-500 shadow-lg shadow-indigo-500/50"><FaGoogle className="text-black"/> </button>  <button className="px-10 py-2 border-2 rounded-md  bg-indigo-500 shadow-lg shadow-indigo-500/50"><FaGithub className="text-black"/></button></div>
          <small><Link to='/SingIn'>You have already account</Link></small>
        </div>
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;