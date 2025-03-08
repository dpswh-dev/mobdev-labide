import { Image, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { useState } from "react";

export default function HomeScreen() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

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
          label="Password"
          value={passwordText}
          onChangeText={setPasswordText}
          mode="outlined"
          style={styles.textInput}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() =>
            alert(
              JSON.stringify({
                email: emailText,
                password: passwordText,
              })
            )
          }
        >
          Sign in
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => alert("Pressed")}
        >
          Sign up
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
