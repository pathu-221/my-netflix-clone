import React, { Component } from 'react';

import CustomButton from '../../component/CustomButton/CustomButton';
import FormInput from '../../component/FormInput/FormInput';
import { Link } from 'react-router-dom';

import { createUserwithEmailandPassword,
addUserToDatabase } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

       try {
         const user = await createUserwithEmailandPassword(email, password, displayName);
       } catch (error) {
        alert(error);
       }

       this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signup">
        <div
          className="signup__bg"
          style={{ backgroundImage: `url(https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg)` }}
        />
        <div className="signup__container">
          <div className="signup__shadow">
            <h1 className="signup__title">Sign Up</h1>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="displayName"
                type="name"
                value={displayName}
                handleChange={this.handleChange}
                label="Name"
                required
              />

              <FormInput
                name="email"
                type="email"
                value={email}
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={password}
                handleChange={this.handleChange}
                label="Password"
                required
              />

              <FormInput
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                handleChange={this.handleChange}
                label="Confirm Password"
                required
              />

              <div className="signup__btn-container">
                <div className="signup__btn">
                  <CustomButton type="submit"> Sign Up </CustomButton>
                </div>
              </div>
            </form>
            <div className="signup__option">
              <span className="signup__option--newuser">
                Already signed up?
              </span>
              <Link to="/signin" className="signup__option--link">
                Log in now.
              </Link>
            </div>
          </div>
        </div>
      </div>
        );
    }
}


export default SignUp;