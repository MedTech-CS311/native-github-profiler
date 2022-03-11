import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable, TextInput } from "react-native-web";

import { toast } from "react-toastify";

import { signup } from "../redux/auth/auth.actions";

import { useDispatch } from "react-redux";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = () => {
    if (repeatPassword !== password) {
      console.log("Passwords mismatch!");
    } else {
      dispatch(signup({ email, password, navigate: navigation.navigate }));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        name="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        style={[styles.input, styles.formElement]}
      />
      <TextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        onChange={(event) => setPassword(event.target.value)}
        style={[styles.input, styles.formElement]}
      />
      <TextInput
        name="repeatPassword"
        placeholder="Repeat Password"
        secureTextEntry={true}
        onChange={(event) => setRepeatPassword(event.target.value)}
        style={[styles.input, styles.formElement]}
      />
      {password !== repeatPassword && (
        <Text style={styles.errorMessage}>Passwords Missmatch</Text>
      )}
      <Pressable
        onPress={handleSubmit}
        style={[styles.formElement, styles.button]}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
        Already have an account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "gray",
    textDecorationLine: "underline",
    fontSize: 12,
    marginTop: 5,
  },
  header: {
    marginBottom: 25,
    fontWeight: 600,
    fontSize: 24,
    color: "gray",
  },
  formElement: {
    width: 240,
    height: 30,
    marginTop: 10,
    borderRadius: 15,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "gray",
    paddingLeft: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  buttonText: {
    color: "white",
    fontWeight: 600,
  },
  errorMessage: {
    color: "red",
    fontSize: 15,
    margin: 2,
  },
});
