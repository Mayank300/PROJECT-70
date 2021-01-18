import React from 'react'
import {ImageBackground, View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'
import { TextInput } from 'react-native-paper';

const image = { uri: "https://wallpapercave.com/wp/wp2297884.jpg" };


export default class WriteStory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render(){
      return(
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.headers}>WRITE STORY</Text>
            <TextInput
              label="STORY TITLE"
              value={this.state.value}
              onChange={this.handleChange} 
              style={styles.textInput}
            />
            <TextInput
              label="AUTHOR"
              value={this.state.value}
              onChange={this.handleChange} 
              style={styles.textInput}
            /> 
            <TextInput
              label="WRITE YOUR STORY"
              value={this.state.value}
              onChange={this.handleChange} 
              style={styles.textInput}
              multiline={true}
            />         
            <TouchableOpacity style={styles.buttonStyle}>SUBMIT</TouchableOpacity>
          </ImageBackground>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  textInput:{
    width: 500,
    marginLeft: '35%',
    marginBottom: '4%',
  },
  headers:{
    fontWeight: 'bold',
    margin: '50px',
    fontSize: '40px',
    fontFamily: 'Helvetica',
    border: '2px solid black',
    padding:'30px',
    textAlign: 'center',
    width: '500px',
    marginLeft: '35%',
    borderRadius: '20px',
    color: 'orange',
  },
  buttonStyle:{
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    width: 120,
    height: 50,
    borderRadius: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: '45%',
    fontSize: '25px',
  },
  buttonText:{
    fontSize: 30,
  }
});