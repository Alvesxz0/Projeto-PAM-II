import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff'
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});
