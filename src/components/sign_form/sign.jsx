import React from "react";
import "./sign.scss";
import FormInput from "../sign_form_input/formInput";
import Button from "../button/button";
import "tachyons";

class Sign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in fl w-third measure-narrow ma5 pa3">
        <h2>I already have an account</h2>
        <span>Sign In</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.state.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.state.handleChange}
            label="Password"
            required
          ></FormInput>
          <Button type="submit" value="Submit">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default Sign;
