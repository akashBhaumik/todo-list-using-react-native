import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';


const Login = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                style={styles.openTodo}
                onPress={() =>
                    navigation.navigate('todo')
                }
            >
                <Text style={{ fontFamily: 'Inter_400Regular' , fontSize : 20}}>Open Todo App</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.user}
                onPress={() =>
                    navigation.navigate('userScreen')
                }
            >
                <Text style={{ fontFamily: 'Inter_400Regular' , fontSize : 20 }}>Go To User</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.imageChoose}
                onPress={() =>
                    navigation.navigate('chooseImage')
                }
            >
                <Text style={{ fontFamily: 'Inter_400Regular' , fontSize : 20}}>Set Image</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    openTodo: {
        // alignItems: "center",
        backgroundColor: "#42C2FF",
        padding: 10,
        fontSize: 20,
        borderRadius: 6,
    },
    user: {
        backgroundColor: "#C1F8CF",
        padding: 10,
        fontSize: 20,
        borderRadius: 6,
        marginTop: 10
    },
    imageChoose: {
        backgroundColor: "#94B49F",
        padding: 10,
        fontSize: 20,
        borderRadius: 6,
        marginTop: 10
    }
})