import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react"

const App = () => {
  const [task, add_task] = useState([])
  const [text, onChangeText] = useState("")


  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      <View style={styles.fixToText}>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Button
          title="Add Task"
        
        style={styles.button}
        onPress={() => {
          console.log("press button", add_task)
          add_task([...task, text])
          onChangeText("")
        }}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {task.map((task_itam, taskInd) => {
          return (
            <View style={styles.fixToText} key={taskInd}>

              <Text style={styles.task}> {taskInd + 1}. {task_itam}</Text>
              <Button
                title="delete"
                color="red"
                // style={styles.button}
                onPress={() => {
                  console.log("delete button", taskInd)
                  let filter_data = task.filter((filter_task, filter_ind) => filter_ind !== taskInd)
                  console.log(filter_data)
                  add_task(filter_data)

                }}
              />
            </View>

          )
        })}
      </ScrollView>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    width: 270,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    width: 270,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 1,
  },

  task: {
    marginTop: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: 300,
  }
});

export default App;
