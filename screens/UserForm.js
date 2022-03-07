import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native"
import { useForm, Controller } from "react-hook-form";
import { uploadForm } from "../services/apiConfig";

const UserForm = () => {
    const [form_data, set_form_data] = useState(null)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            job: ''
        }
    });


    useEffect(() => {
        uploadForm(form_data)
            .then((response) => {
                response &&
                    response?.status === 201 &&
                    console.log("user details = ", form_data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [form_data])


    const onSubmit = data => set_form_data(data);

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.textAlign}>

                <Text style={{ fontSize: 30, fontFamily: "Inter_400Regular", flex: 3 }}>Name :</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
                {errors.firstName && <Text>This is required.</Text>}
            </View>
            <View style={styles.textAlign}>
                <Text style={{ fontSize: 30, fontFamily: "Inter_400Regular", flex: 3 }}>Job :</Text>
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="job"
                />
            </View>

            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
            <View style={styles.textAlign}>
                <TouchableOpacity
                    style={styles.user}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,

    },
    input: {
        flex: 7,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        fontFamily: "Inter_900Black",
    },
    textAlign: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 10,
    },
    user: {
        backgroundColor: "#C1F8CF",
        padding: 10,
        borderRadius: 6,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})

export default UserForm