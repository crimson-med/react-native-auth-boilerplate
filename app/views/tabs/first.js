import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class First extends Component {
 render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> FIRST PAGE </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
