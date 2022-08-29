import React from "react";
import './sign-in.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from '../../component/FormInput/FormInput.js';
import CustomButton from '../../component/CustomButton/CustomButton';
import { Link } from "react-router-dom";
import { signInwithEmailandPass } from "../../firebase/firebase.utils";


class SignIn extends React.Component {

    constructor(){
        super();
        this.state = {
            currentuser: null,
            email: '',
            password: '',
        }
    }

    handleSubmit = async (e) =>{
      e.preventDefault();
      
      const { email, password}  = this.state;
      await signInwithEmailandPass(email, password);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({[name] : value })
    }


    render() {
        return (
            <div className="signin">
        <div
          className="signin__bg"
          style={{ backgroundImage: `url(https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg)` }}
        />
        <div className="signin__container">
          <div className="signin__shadow">
            <h1 className="signin__title">Sign In</h1>

            <form
              autoComplete="new-password"
              onSubmit={this.handleSubmit}
            >
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="Password"
                required
              />

              <div className="signin__btn-container">
                <div className="signin__btn">
                  <CustomButton type="submit" signin>
                    {" "}
                    Sign In{" "}
                  </CustomButton>
                  <CustomButton onClick={signInWithGoogle}>
                    Sign In With Google
                  </CustomButton>
                </div>
              </div>
            </form>
            <div className="signin__option">
              <span className="signin__option__newuser">New to Netflix?</span>
              <Link to="/signup" className="signin__option__link">
                Sign up now.
              </Link>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default SignIn;