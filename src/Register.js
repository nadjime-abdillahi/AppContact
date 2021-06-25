import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import firebase from 'firebase'

function Register() {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userAddress, setUserAdress] = useState('');
  const [userAge, setUserAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserFirstName = e => {
    setUserFirstName(e)
  }

  const handleUserLastName = e => {
    setUserLastName(e)
  }

  const handleUserAddress = e => {
      setUserAdress(e)
  }

  const handleUserAge = e => {
      setUserAge(e)
  }

  const handleEmail = e => {
    setEmail(e)
  }

  const handlePassword = e => {
    setPassword(e)
  }

  var db = firebase.firestore();

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      db.collection("users").doc(email).set({
        userFirstName: userFirstName,
        userLastName: userLastName,
        userAddress: userAddress,
        userAge: userAge,
        password: password
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }
    return(
        <View style={styles.container2}>
      <Text style={styles.barstyle}>Bienveune dans Register</Text>
      <TextInput 
        style={styles.input} 
        placeholder="first name"
        onChangeText={handleUserFirstName}/>
        <TextInput 
        style={styles.input} 
        placeholder="last name"
        onChangeText={handleUserLastName}/>
      <TextInput 
        style={styles.input} 
        placeholder="user adresse"
        onChangeText={handleUserAddress}/>
      <TextInput 
        style={styles.input} 
        placeholder="user age"
        onChangeText={handleUserAge}/>
      <TextInput 
        style={styles.input} 
        placeholder="email"
        onChangeText={handleEmail}/>
      <TextInput 
        style={styles.input} 
        type="password" 
        placeholder="password"
        onChangeText={handlePassword}/>
      <View style={styles.buttonContainer}>
        <Button 
          title="INSCRIPTION"
          onPress={handleSubmit}/>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        margin: 15,
        borderRadius: 10,
    },
    input: {
        height: 45,
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        padding:15,
    },
    pink: {
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    barstyle:{
        backgroundColor: 'red',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 30,
        paddingBottom: 30,
      },
  });

export default Register