import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native"
import { useForm, Controller } from "react-hook-form";
import { uploadForm } from "../services/apiConfig";
import Toast from 'react-native-toast-message';
import UserFormChild from "../components/UserFormChild";

const UserForm = () => {
    const [form_data, set_form_data] = useState(null)
    


    useEffect(() => {
        uploadForm(form_data)
            .then((response) => {
                response &&
                    response?.status === 201 &&
                    Toast.show({
                        type: 'success',
                        text1: 'user profile saved👋'
                      });
                    console.log("user details = ", form_data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [form_data])


    const finalSubmit = data => 
    {
        set_form_data(data)
        console.log("parent =",data)
    };

    return <UserFormChild userParentData={finalSubmit}/>
    
}



export default UserForm