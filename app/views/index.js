import React, {Component} from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import qs from 'qs';
import Snackbar from 'react-native-snackbar';
import Splashscreen from "./../components/splashscreen";
import {api} from './../config/api.js';

const auth = require('./../tools/auth.js');


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bearer: "",
            isLoading: true,
            key: "",
        };
    }

    componentWillMount() {
        auth.retrieve("connectionToken")
            .then(plop => {
                if (plop !== null) {
                    const header = {Authorization: `Bearer ${plop}`};
                    axios.get(api.ping, { headers: header })
                        .then(response => {
                            if (response.data.auth) {
                                this.props.navigation.navigate("Details");
                            }
                        })
                        .catch(err => {
                            this.props.navigation.navigate("Login");
                        })

                } else {
                    this.setState({ key: "desd" });
                }
            })
    }
 render() {
     const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        {/*<Splashscreen modalVisible={this.state.isLoading}/>*/}
        <Text style={styles.textFirst}> {this.state.key} </Text>
        {<Button
          onPress={() => navigate("Login")}
          style={styles.button}
          title="SCREEN ONE">
          SCREEN ONE
        </Button>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textFirst: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});
