import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { StyleSheet, ImageBackground } from 'react-native';


const MyComponent = () => {
    const [text, setText] = React.useState('');

    return (

        <PaperProvider>


            <ImageBackground
                source={require('./slike/prijava.jpg')}
                style={styles.container} >


                <TextInput
                    label="Username"
                    mode="flat"
                    style={{ height: 50, width: 250, marginTop: 350 }}
                    selectionColor="#000000"
                    underlineColor="#FFC532"
                    value={text}
                    onChangeText={text => setText(text)}
                    theme={{ colors: { text: 'black', primary: "#FFC532" } }}
                />

                <TextInput
                    label="Password"
                    mode="flat"
                    style={{ height: 50, width: 250, marginTop: 10 }}
                    selectionColor="#000000"
                    underlineColor="#FFC532"
                    value1={text}
                    onChangeText={text1 => setText(text)}
                    secureTextEntry={true}
                    theme={{ colors: { text: 'black', primary: "#FFC532" } }}
                />

                <Button
                    mode="contained"
                    dark
                    style={{ height: 40, width: 110, marginTop: 10, marginLeft: 140 }}
                    color="#FFC532" onPress={() => console.log('Pressed')}>
                    Login
                </Button>

            </ImageBackground>


        </PaperProvider>


    );
};
export default MyComponent;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
});

