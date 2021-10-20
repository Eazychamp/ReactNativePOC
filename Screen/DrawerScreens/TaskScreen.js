import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from '../Components/Task';

const Todo = () => {

    const [ task, setTask ] = useState('')
    const [ tasksList, setTasksList ] = useState([])

    const handleAddTask = () => {
        setTasksList([...tasksList, task])
        setTask('')
        Keyboard.dismiss()
    }

    const complsteTask = index => {
        let newTasks = [...tasksList]
        newTasks.splice(index, 1)
        setTasksList(newTasks)
    }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.titleHeading}>Today's tasks</Text>
        <ScrollView style={styles.items}>
          {tasksList.map((item, index) => <TouchableOpacity  style={{ activeOpacity: .2 }} key={index} onPress={( ) => complsteTask(index)}>
            <Task text={item} taskCount={index + 1} />
          </TouchableOpacity>)}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addtextWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your task here"
          onChangeText={value => setTask(value)}
          value={task}
        />
        <TouchableOpacity 
        onPress={handleAddTask}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  addtextWrapper: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 20,
  },
  textInput: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
      fontSize: 24
  }
});

export default Todo;
