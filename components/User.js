import React from "react";
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect, } from "react";
import { getUser } from "../services/apiConfig";

const User = () => {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        let mounted = true;
        getUser().then((items) => {
            console.log("users items= ", items.data.data)
            if (mounted) {
                setUsers(items.data.data)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {users.map((user) => {
                    return (
                        <View key={user.id} style={styles.fixToText} >
                            <View style={styles.image}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: user.avatar,
                                    }}
                                />
                                <View style={styles.statusCircle}/>
                            </View>

                            <View style={styles.profile}>

                                <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                                <Text >{user.email} </Text>
                            </View>

                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        marginLeft : 10

    },
    fixToText: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 10,
        // justifyContent: "center"
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    statusCircle : {
        width: 20,
        height: 20,
        borderRadius : 50,
        backgroundColor: "green",
        bottom: 5,
        right: 40,
        position: "absolute"
    },
    scrollView: {
        marginHorizontal: 1,
    },
    image: {
        flex: 2,
    },
    profile: {
        flex: 4,
    },
    name: {
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default User