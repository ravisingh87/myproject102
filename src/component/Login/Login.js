import React from 'react'

const Login = () => {
    return (
    <div className="container">
        <div className="form-container">
            <div className="signin-signup">
                <form className="sign-in">
                    <h2 className="title">Sign In</h2>
                    <div className="input-field">
                        <i className="fa fas-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fa fas-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login" className="btn-solid" />
                    <p className="social-text">Or Sign in with social-media platform</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-googel"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <div className="panel-container"></div>
    </div>
    )
}

export default Login