import React,{useState} from 'react'
import './Login.css'

const Login = () => {
const [show,setShow] = useState(true);

    return (
      <div className={show?"container":"container sign-up-mode"}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <div className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div  className="social-icon">
                <i className="fab fa-twitter"></i>
              </div>
              <div  className="social-icon">
                <i className="fab fa-google"></i>
              </div>
              <div  className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <div className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="social-icon">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="social-icon">
                <i className="fab fa-google"></i>
              </div>
              <div className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={()=>setShow(false)}>
              Sign up
            </button>
          </div>
          <img src="logo2.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={()=>setShow(true)}>
              Sign in
            </button>
          </div>
          <img src="logo1.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    )
}

export default Login
