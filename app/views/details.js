import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Tab } from "./../config/navigation";


export default class Details extends React.Component {
    render() {
        const { state, navigate } = this.props.navigation;
       return (
         <ScrollView>
           <Tab />
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
