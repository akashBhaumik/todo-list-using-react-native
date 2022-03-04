import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image , ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const SelectImage = () => {
    const [l_Image, set_l_Image] = useState(null);
    const [c_image, set_c_image] = useState(null);
    // const [status, requestPermission] = ImagePicker.useCameraPermissions();
    // console.log("camera permission = ", status)


    const libraryImage = async () => {
        // No permissions request is necessary for launching the image library
        let libraryResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 1,
        });

        console.log(libraryResult);

        if (!libraryResult.cancelled) {
            set_l_Image(libraryResult.uri);
        }
    };

    const cameraImage = async () => {
        let cameraResult = await ImagePicker.launchCameraAsync()
        console.log("async = ",cameraResult)
        if (!cameraResult.cancelled) {
            set_c_image(cameraResult.uri);
        }
    }

    return (
        <ScrollView style={{ flex: 1, padding: 20, paddingBottom : 80 }}>
            <View style={styles.fixButtonSpace}>
                <TouchableOpacity
                    style={styles.chooseFromLibrary}
                    onPress={libraryImage}>
                    <Text style={{fontFamily : "Inter_500Medium" , fontSize : 12}}>Choose Image From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.chooseFromCamera}
                    onPress={cameraImage}>
                    <Text style={{fontFamily : "Inter_500Medium" , fontSize : 12}}>Choose Image From Camera</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fixImageSpace}>

            {l_Image && <Image source={{ uri: l_Image }} style={{  width: "100%", height: 400 }}  resizeMode="contain" />}
            {c_image && <Image source={{ uri: c_image }} style={{  width: "100%", height: 400  }} resizeMode="contain" />}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fixButtonSpace: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 10,
    },
    chooseFromLibrary: {
        flex: 5,
        alignItems: "center",
        backgroundColor: "#FFBED8",
        padding: 10,
        // fontSize: 20,
        borderRadius: 6,
    },
    chooseFromCamera: {
        flex: 5,
        alignItems: "center",
        backgroundColor: "#CDB699",
        padding: 10,
        // fontSize: 20,
        borderRadius: 6,
        marginLeft: 10
    },
    fixImageSpace : {
        flexDirection: 'column',
        marginTop: 10,
    }

})

export default SelectImage