import React from "react";
import "./sign.scss";
import FormInput from "../sign_form_input/formInput";
import Button from "../button/button";
import "tachyons";
import { FcGoogle } from "react-icons/fc";
import { FaAirbnb } from "react-icons/fa";
import { signInWithGoogle } from "../../firebase/firebase.utils.js";

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
      <div className="fl w-50 shadow-5 mt5">
        <div className="sign-in center measure-narrow ma3 pa3">
          <h2>Already have an account?</h2>
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
            <Button
              className="f5 fl w-50 br-pill bg-green dim pointer"
              type="submit"
            >
              <FaAirbnb className="mr1 mt1 pa" />
              Sign In
            </Button>
            <Button
              className="f5 fl w-50 br-pill bg-blue dim shadow-3 pointer"
              onClick={signInWithGoogle}
            >
              <FcGoogle className="mr1 mt1 pa" />
              Google
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Sign;
