import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/navLink";
import SignupScreen from "./SignupScreen";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text={"Don't have an account? Sign Up instead"}
        routeName="Signup"
      />
    </View>
  );
};

SignupScreen.navigationsOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
