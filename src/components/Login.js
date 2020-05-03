import React, { Component } from 'react';
import preloader from '../img/preloader.gif';
import axios from 'axios';
class Login extends Component {
    state = {
        email: '',
        password: '',
        redirect : false,
    }
    handleFormSubmit( event ) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('email', this.state.email) 
        formData.append('password', this.state.password) 
        axios({
            method: 'POST',
            url: 'http://localhost/signin.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then((response) => {
            //handle success
            console.log(response.data.name);
            if(response.data.redirect==true)
                this.props.history.push("/")
                localStorage.setItem('loggedIn',true);
                localStorage.setItem('name',response.data.name)       
        })
        .catch(function (response) {
            //handle error
            console.log(response)
            
            
        });
    }

  render() {
      
    return (
    <div>
    <section id="page-title-area" class="section-padding overlay">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title  text-center">
                        <h2>Login</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="lgoin-page-wrap" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-8 m-auto">
                	<div class="login-page-content">
                		<div class="login-form">
                			<h3>Welcome Back!</h3>
							<form action="index.html">
								<div class="username">
                                <label for="exampleInputEmail1">Email address</label>
                                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                
								</div>
								<div class="password">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                                    value={this.state.password}
                                    onChange={e => this.setState({ password: e.target.value })}/>
								</div>
								<div class="log-btn">
									<button type="submit" onClick={e => this.handleFormSubmit(e)}><i class="fa fa-sign-in"></i> Log In</button>
								</div>
							</form>
                		</div>
                		
                		<div class="login-other">
                			<span class="or">or</span>
                			<a href="#" class="login-with-btn facebook"><i class="fa fa-facebook"></i> Login With Facebook</a>
                			<a href="#" class="login-with-btn google"><i class="fa fa-google"></i> Login With Google</a>
                		</div>
                		<div class="create-ac">
                			<p>Don't have an account? <a href="register.html">Sign Up</a></p>
                		</div>
                		<div class="login-menu">
                			<a href="about.html">About</a>
                			<span>|</span>
                			<a href="contact.html">Contact</a>
                		</div>
                	</div>
                </div>
        	</div>
        </div>
    </section>
    </div>
    );
    
  }
}
export default Login;
