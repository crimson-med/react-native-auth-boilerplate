import React, {Component} from 'react';
import { Modal, View, Text, TouchableHighlight, Animated, Image, Easing } from 'react-native';
import styles from "./../styles";

export default class Splashscreen extends Component {

  constructor () {
    super()
    this.springValue = new Animated.Value(0.3);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    this.springValue.setValue(0.3)
    this.animatedValue.setValue(0)
    Animated.parallel([
      Animated.spring(
        this.springValue,
        {
          toValue: 1,
          friction: 1
        }
      ),
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      ),
    ]).start(() => this.animate())
  }
 render() {
    const rotateY = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={{...styles.splash, ...styles.centered}}>
          <Animated.Image
            style={{ width: 300, height: 300, transform: [{scale: this.springValue}, {rotateY}] }}
            source={{uri: 'https://image.noelshack.com/fichiers/2018/33/6/1534614310-logo.png'}}/>
        </View>
      </Modal>
    );
  }
}
