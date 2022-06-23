import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import userAction from "../../redux/actions/userAction";

function GoogleSignUp(props) {
  const responseGoogle = async (res) => {
    const userData = {
      firstName: res.profileObj.firstName + " " + res.profileObj.familyName,
      lastName: res.profileObj.lastName + " " + res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      image: res.profileObj.imageUrl,
      adress: "undefined",
      city: "undefined",
      country: "undefined",
      from: "google",
    };
    await props.signUpUser(userData);
  };

  return (
    <GoogleLogin
      className="buttonsocial"
      clientId="551525785233-6brk2jcbjhp7mk2vrs4qltimicqik0n0.apps.googleusercontent.com"
      buttonText="Sign Up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  signUpUser: userAction.signUpUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp);
