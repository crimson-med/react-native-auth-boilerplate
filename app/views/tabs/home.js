import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import styles from "./../../styles";

type Props = {};
export default class Home extends Component<Props> {
constructor(props) {
    super(props);
    this.state = {
        users: [],
    };
}

componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => this.setState({ users: response.data }));
}

userList() {
    return this.state.users.map((user) => {
      return (
        <View key={`user_${user.id}`}><Text>{user.name}</Text></View>
      )
    })
}

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Calling API!</Text>
        {this.userList()}
      </View>
    );
  }
};
