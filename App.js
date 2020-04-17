import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import * as Permissions from 'expo-permissions';
import Routes from "./src/routes";
import { Notifications } from 'expo';;
import Constants from 'expo-constants';

async function register() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  console.log('status: ', status)
  if ( status !== 'granted') {
    alert("You need to enable permissions");
    return
  }
  const token = await Notifications.getExpoPushTokenAsync();
  console.log(status, "token: ----> ", token) 

}

export default class App extends Component { 
  componentDidMount() {
    register();
    
    this.listener  = Notifications.addListener(this.listen)
  }

  listen = ({ origin, data }) => {
    console.log("origin: ", origin , " data: ", data)
  }

  render(){
    return (
      <Routes />
    )
  }
}
