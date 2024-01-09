import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AnotherProvider/AuthPoviders";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
const SingIn = () => {
  const [show ,setShow]=useState(false)
  const {signIn} =useContext(AuthContext )
  const navigate=useNavigate();
const location=useLocation()
console.log(location)

const from=location.state?.from?.pathname||'/home'
console.log(from)

  const handlesingIn=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(reult=>{
      const loggeduser=reult.user;
      console.log(loggeduser)
      form.reset()
      navigate(from ,{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">SignIn!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlesingIn}>
        
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
          <input type={show?'text' :'password'} name="password" placeholder="password" className="input input-bordered" required />
           <p className="pl-2" onClick={()=>setShow(!show)}><small>
            {
              show? <span className="w-5"><IoEyeSharp /> </span  >:<span><FaEyeSlash /></span>
            }
            </small></p>
<label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <div className=" grid-cols-2 m-2 ">  <button className="px-10 py-2 border-2 rounded-md  bg-indigo-500 shadow-lg shadow-indigo-500/50"><FaGoogle className="text-black"/> </button>  <button className="px-10 py-2 border-2 rounded-md  bg-indigo-500 shadow-lg shadow-indigo-500/50"><FaGithub className="text-black"/></button></div>    
          <small><Link to='/SignUp'>Plase create an account</Link></small>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingIn;