import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, /*Pressable*/ } from 'react-native'
import firebase from 'firebase'


function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e)
    }

    const handlePassword = e => {
        setPassword(e)
    }

    const handleSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        var user = userCredential.user;
        console.log("success" + user);
        document.write("la connexion est un succès")
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
        });
    }
    return(
        <View>
        <Text style={styles.barstyle}>APPMOBILE OF CURTIS</Text>
        <View style={styles.container2}>
            <Text style={styles.center}>Welcome</Text>
            <TextInput style={styles.input} placeholder="email" onChangeText={handleEmail}/>
            <TextInput style={styles.input} placeholder="password" onChangeText={handlePassword}/>
            <View style={styles.bouton}>
                <Button title="CONNEXION" onPress={handleSubmit}/>
            </View>
            
            {/* <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.input}>Creer un compte</Text>
            </Pressable> */}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container2: {
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10,
    },
    center: {
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        fontSize: 30,
        textTransform: 'uppercase',
    },
    input: {
        height: 45,
        backgroundColor: "white",
        borderWidth: 1,
        color: 'black',
        margin: 5,
        padding:15,
        marginTop: 10,
        marginBottom: 10,
    },
    bouton: {
        backgroundColor: 'orange',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 10,
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

export default Login