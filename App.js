import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity , SafeAreaView } from "react-native";
import { useState } from "react"

const App = () => {
  const [task, add_task] = useState([])
  const [text, onChangeText] = useState("")
  const [edit, setEdit] = useState(true)
  const [editIndex, setEditIndex] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      {/* <View style={styles.fixToText}>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        /> */}
      {edit ?
        <View style={styles.fixToText}>
          <View
            style={styles.textInput}
          >

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          {/* <View style={styles.button}> */}
          <TouchableOpacity
            style={styles.addButton}

            onPress={() => {
              console.log("press button", add_task)
              add_task([...task, text])
              onChangeText("")
            }} >
            <Text>Add</Text>
          </TouchableOpacity>


        </View>
        // </View>
        :
        <View style={styles.fixToText}>
          <View
            style={styles.textInput}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder={task[editIndex]}
            />
          </View>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              console.log("press edit button", editIndex)
              const editItem = [...task]
              editItem[editIndex] = text
              add_task(editItem)
              onChangeText("")
              setEdit(true)
            }}>
            <Text>Edit</Text>
          </TouchableOpacity>

        </View>
      }
      {/* </View> */}

      <ScrollView style={styles.scrollView}>
        {task.map((task_itam, taskInd) => {
          return (
            <View style={styles.fixToText} key={taskInd}>

              <Text style={styles.task}> {taskInd + 1}. {task_itam}</Text>
              <TouchableOpacity
            style={styles.editTask}
                // style={styles.button}
                onPress={() => {
                  console.log("edit button")
                  setEdit(false)
                  setEditIndex(taskInd)
                }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
            style={styles.deleteTask}
                // style={styles.button}
                onPress={() => {
                  console.log("delete button", taskInd)
                  let filter_data = task.filter((filter_task, filter_ind) => filter_ind !== taskInd)
                  console.log(filter_data)
                  add_task(filter_data)

                }}
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>

          )
        })}
      </ScrollView>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 30,
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
  textInput: {
    height: 40,
    flex: 4,
    margin: 12,
  },
  input: {
    height: "100%",
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    // width: 270,
  },
  addButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#54BAB9",
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
  },
  editButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFBC80",
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
  },
  editTask : {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "#8BDB81",
    padding: 9,
    fontSize: 20,
    borderRadius: 6,
    marginLeft : 2,
    marginTop : 9
  },
  deleteTask : {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "#FC4F4F",
    padding: 9,
    fontSize: 20,
    borderRadius: 6,
    marginLeft : 2,
    marginTop : 9


  },
  fixToText: {
    flexDirection: 'row',
    alignItems: "center"
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 1,
  },

  task: {
    marginTop: 9,
    paddingVertical: 5,
    // borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    flex: 3,
  }
});

export default App;
