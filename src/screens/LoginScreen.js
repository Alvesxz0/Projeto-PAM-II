import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const user = "adm123@gmail.com";
 const senha = "adm123"

 const Login = () => {
  if (email !== user || password !== senha) {
       Alert.alert("Erro", "Email e senha não correspondem, tente de novo.");
       return;
  }
  navigation.navigate('Home');
 };

 return (
  <View style={styles.container}>
       <Text style={styles.title}>Login</Text>
       <TextInput
           style={styles.input}
           placeholder="Email"
           value={email}
           onChangeText={setEmail}
           keyboardType="email-address"
           autoCapitalize="none"
       />
       <TextInput
           style={styles.input}
           placeholder="Senha"
           value={password}
           autoCapitalize="none"
           onChangeText={setPassword}
           secureTextEntry
       />
       <View style={styles.buttonContainer}>
           <Button title="Entrar" onPress={Login} />
       </View>
  </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff'
    },
    input: {
        width: windowWidth * 0.8,
        height: 50,
        borderWidth: 1,
        borderColor: '#4169E1',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#87CEFA',
    },
    buttonContainer: {
        width: windowWidth * 0.5,
        borderRadius: 5,
        backgroundColor: '#90ee90',
    },
});