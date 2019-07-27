import React, { Component } from 'react';
import { View, Image, Text, Platform } from 'react-native';

import styles from './styles';

class Card extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}
              source={require('./user.png')} />
          </View>
          <View>
            <Text style={styles.cardName}>
              Kevin Toledo
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              Kevin is a really great Javascript developer. He loves
              using JS to build React Native applications for IOS and Android.
            </Text>
          </View>


        </View>
      </View>

    )
  }
}


export default Card;