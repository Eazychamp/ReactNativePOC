import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Task = ({text, taskCount}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text} </Text>
      </View>
      <View style={styles.circular}>
          <Text>{taskCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'lightblue',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
      width: '80%'
  },
  circular: {
     padding: 6,
     borderWidth:  2,
     borderRadius: 5,
     borderColor: 'lightblue'
  }
});

export default Task;
