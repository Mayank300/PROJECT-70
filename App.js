import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTran from './screens/BookTran'
import SearchScreen from './screens/SearchScreen'
import { render } from 'react-dom';
import { TextInput } from 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator({
  Transation:{screen:BookTran},
  Search:{screen:SearchScreen},
},{
  defaultNavigationOptions: ({navigation}) => {
    tabBarIcon: ({})=>{
      const routeName = navigation.state.routeName 
      if(routeName === 'Transaction'){ 
        return(<Image source= {require('https://i.pinimg.com/originals/d9/4a/49/d94a495eca526d82ebbe0640aea413a9.jpg')} 
        style={{width:30,height:30}}/>) 
      } else if(routeName === 'Search'){ 
        return(<Image source= {require('https://i.pinimg.com/originals/d9/4a/49/d94a495eca526d82ebbe0640aea413a9.jpg)')} 
        style={{width:30,height:30}}/>) }
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
