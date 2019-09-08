import React from "react";

import FormInput from "../form-input/form-input.component";
import "./signin.style.scss";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <CustomButton type="submit">SUBMIT</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
