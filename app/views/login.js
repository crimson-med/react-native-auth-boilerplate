import React, {Component} from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import axios from 'axios';
import qs from 'qs';
import Snackbar from 'react-native-snackbar';
import Splashscreen from "./../components/splashscreen";
import styles from "./../styles";
import {api} from './../config/api.js';

const auth = require('./../tools/auth.js');



export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bearer: "",
            isLoading: false,
            username: "",
            password: ""
        };
        this.login = this.login.bind(this);
    }

    componentWillMount() {
    }

 login() {
     const params = {
         username: this.state.username,
         password: this.state.password
     }
     const options = {
       method: 'POST',
       config: {headers: { 'content-type': 'application/x-www-form-urlencoded' }},
     };
     this.setState({ isLoading: true});
     axios.post(api.login,qs.stringify(params),{headers: options})
       .then(response => {
           const token = response.data.token
           this.setState({ bearer: token });
           const tester = auth.store("connectionToken", token);
           Snackbar.show({
               title: 'You have been logged in',
               duration: Snackbar.LENGTH_LONG,
           });
           this.setState({ isLoading: false});
           this.props.navigation.navigate("Details");
       })
       .catch(err => {
           console.log(err);
       })

 }
 render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={[styles.splash, styles.column, styles.colcenter]}>
        <Splashscreen modalVisible={this.state.isLoading}/>
        <Image style={{width: "50%", height: "50%"}} source={require('./../images/logo.png')} />
        <View style={{flex: 1, display: "flex", flexDirection:"row"}}>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", display: "flex", flexDirection:"column"}}>
                <TextInput
                style={{marginTop: 10, marginBottom: 10, height: 40, width: "80%", fontSize: 18, borderColor: "transparent",  color: 'white', borderWidth: 1}}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                placeholder='Username'
                blurOnSubmit={true}
                selectionColor="white"
                underlineColorAndroid="white"
                placeholderTextColor="white"
                />
                <TextInput
                style={{marginTop: 10, marginBottom: 10, height: 40, width: "80%", fontSize: 18, borderColor: "transparent", color: 'white', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder='Password'
                blurOnSubmit={true}
                selectionColor="white"
                underlineColorAndroid="white"
                placeholderTextColor="white"
                secureTextEntry={true}
                />
                <View style={{ height: 40, width: "80%", marginTop: 20}}>
                    <TouchableOpacity
                          style={styles.loginScreenButton}
                          onPress={this.login}
                          activeOpacity={0.5}>
                          <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }
}
