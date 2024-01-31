import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,

} from "react-native";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";

import { db } from "./firebase/config";
import { useState } from "react";
import Google from "./components/google";

export default function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "students"), {
        Name: name,
      });
      console.log("Document written with ID: ", docRef.id);
      // alert("name added  ");
//  ToastAndroid.show("data added ", ToastAndroid.SHORT)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setUser(data);
      console.log(data);

      // console.log(`${doc.id} => ${doc.data()}`);
    });
  };
  return (
    <View style={styles.container}>
      <Text>main page hello !</Text>
      <TextInput
        placeholder="enter name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Google/>
      <Button title="add data " onPress={addData} />
      <Button title="read data " onPress={readData} />
      
      <StatusBar style="auto" />
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
});
