import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

const image = { uri: "https://miro.medium.com/max/4574/1*b1T9PtMK3bxboKvnSctNmg.jpeg" };

export default class ReadStory extends React.Component {
    render() {
      return (
        <View>
          <ImageBackground ImageBackground source={image} style={styles.image}>
            <Text style={styles.headers}>READ STORY</Text>
          </ImageBackground> 
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: '100vh',
  },
  headers:{
    fontWeight: 'bold',
    marginTop: '15px',
    fontSize: '40px',
    fontFamily: 'Helvetica',
    border: '4px solid black',
    padding:'20px',
    textAlign: 'center',
    width: '500px',
    marginLeft: '670px',
    borderRadius: '20px',
    color: 'pink',
  },
});