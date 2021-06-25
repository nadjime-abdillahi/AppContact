import React, { useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import firebase from 'firebase'

function Home({ route }) {
    const [data, setData] = useState({
        updated: false,
        userFirstName: '',
        userLastName: '',
        email: '',
        userAddress: '',
        userAge: '',
        users: [],
        password: '',
    })

    const email = route.params ? route.params.email : 'nadjimeabdillahi@gmail.com'
    
    if(email && !data.updated) 
        firebase.firestore()
            .collection('users')
            .doc(email)
            .get()
            .then(r => {
                const data = r.data()
                firebase.firestore().collection('users').get().then(r => {
                    setData({ 
                        updated: true,
                        userFirstName: data.userFirstName,
                        userLastName: data.userLastName, 
                        userAddress: data.userAddress,
                        email: data.email,
                        userAge: data.userAge,
                        password: data.password,
                        users: r.docs.map(d => d.data())
                    })
                })
            })

    // const printUsers = users => users.map((u, i) => <Text key={i} style={ Styles.foreground_white }>{ u.userName}</Text>)
    const printUsers = users => users.map((u, i) => {
        return (
            <View style={ Styles.container }>
                <Text key={i} style={ Styles.orange }>prenom: { u.userFirstName }</Text>
                <Text key={i} style={ Styles.orange }>nom: { u.userLastName }</Text>
                <Text key={i} style={ Styles.orange }>adresse: { u.userAddress }</Text>
                <Text key={i} style={ Styles.orange }>email: { u.email }</Text>
                <Text key={i} style={ Styles.orange }>age: { u.userAge } ans</Text>
            </View>
            )
    })
            console.log(data.users)
    return (
        <View style={ Styles.container1 }>
            <Text style={ Styles.foreground_white }>Bienvenue!</Text>
            <Text style={ Styles.foreground_white }>Liste d'utilisateurs: </Text>
            { printUsers(data.users) }
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderColor: "red",
        borderWidth: 1,
        textAlign: 'left',
    },
    container1: {
        marginBottom: 15,
    },
    orange: {
        color: 'orange',
    },
    foreground_white: {
        borderColor: "black",
        borderWidth: 1,
        textAlign: 'center',
    }
})

export default Home