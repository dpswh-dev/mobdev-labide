import { Image, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [emailText, setEmailText] = useState("");
  const [confirmEmailText, setConfirmEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/laravel-nobg.png")}
          resizeMode="contain"
          style={{ marginHorizontal: "auto", width: 200, height: 200 }}
        />
        <TextInput
          label="Email"
          value={emailText}
          onChangeText={setEmailText}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Confirm Email"
          value={confirmEmailText}
          onChangeText={setConfirmEmailText}
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          value={passwordText}
          onChangeText={setPasswordText}
          mode="outlined"
          style={styles.textInput}
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          value={confirmPasswordText}
          onChangeText={setConfirmPasswordText}
          mode="outlined"
          style={styles.textInput}
          secureTextEntry
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() =>
            alert(
              JSON.stringify({
                email: emailText,
                confirmEmail: confirmEmailText,
                password: passwordText,
                confirmPassword: confirmPasswordText,
              })
            )
          }
        >
          Sign up
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => router.push("/")}
        >
          Sign in
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    gap: 12,
  },
  mainContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },
  textInput: {
    borderRadius: 100,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 5,
  },
});