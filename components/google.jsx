import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../firebase/config";

const Google = () => {
  const signGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <View>
      <Text>
        sign with google
        <Button title="sign google" onPress={signGoogle} />
      </Text>
    </View>
  );
};

export default Google;

const styles = StyleSheet.create({});
