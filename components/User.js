import React from "react";
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView } from "react-native";

const User = ({userProperty}) => {
    console.log("props == ",userProperty)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {userProperty.map((user) => {
                    return (
                        <View key={user.id} style={styles.userCart} >
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
                                <Text style={{fontFamily : "Inter_200ExtraLight"}} >{user.email} </Text>
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
    userCart: {
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
        right: 35,
        position: "absolute"
    },
    scrollView: {
        marginHorizontal: 1,
    },
    image: {
        flex: 2,
        position : "relative"
    },
    profile: {
        flex: 4,
    },
    name: {
        fontSize: 25,
        // fontWeight: "bold",
        fontFamily : "Inter_500Medium"
    }
});

export default User