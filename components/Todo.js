import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";

const Todo = () => {
  const [task, add_task] = useState([])
  const [text, onChangeText] = useState("")
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO List</Text>
      {edit ?
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
              setEdit(false)
            }}>
            <Text>Edit</Text>
          </TouchableOpacity>

        </View>
        :
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
          <TouchableOpacity
            style={styles.addButton}

            onPress={() => {
              console.log("press button", text == '')
              if (text == '') {
                add_task([...task])
              } else {

                add_task([...task, text])
              }
              onChangeText("")
            }} >
            <Text>Add</Text>
          </TouchableOpacity>


        </View>
      }

      <ScrollView style={styles.scrollView}>
        {task.map((task_itam, taskInd) => {
          return (
            <View style={styles.fixToText} key={taskInd}>

              <Text style={styles.task}> {taskInd + 1}. {task_itam}</Text>
              <TouchableOpacity
                style={styles.editTask}
                onPress={() => {
                  console.log("edit button")
                  setEdit(true)
                  setEditIndex(taskInd)
                }}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteTask}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // flexDirection: "column",
    backgroundColor: "#eaeaea",
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
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    flex: 6,
    
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
    marginLeft: 10
  },
  editButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFBC80",
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
    marginLeft: 10
  },
  editTask: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "#8BDB81",
    padding: 9,
    fontSize: 20,
    borderRadius: 6,
    marginLeft: 2,
    marginTop: 9
  },
  deleteTask: {
    flex: 0.5,
    alignItems: "center",
    backgroundColor: "#FC4F4F",
    padding: 9,
    fontSize: 20,
    borderRadius: 6,
    marginLeft: 2,
    marginTop: 9


  },
  fixToText: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop : 10,
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
    flex: 2.5,
  }
});

export default Todo