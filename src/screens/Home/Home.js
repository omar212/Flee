import React, { Component, useState, useEffect } from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Form,
  Container,
  ImageBackground,
  Navigator,
  TouchEvent,
  TouchableHighlight
} from "react-native";

import { iOSUIKit } from 'react-native-typography'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextTicker from "react-native-text-ticker";
import VerticalViewPager from "react-native-vertical-view-pager";
import Buttons from '../Buttons/Buttons';

const { width, height = height - 50 } = Dimensions.get("window");

import sky from "../../../assets/sky.gif";
import ocean from "../../../assets/ocean.gif";


import api from "../../services/api.js";

import { styles } from './styles'

import { Video } from "expo-av";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    
    const { count } = this.state;
    
    return (
    <SafeAreaView>
      <VerticalViewPager showsVerticalScrollIndicator={true}>
      <View style={styles.container}>
        <ImageBackground  style= { styles.TopBackgroundImage } source={sky}>
        <View
            style={{flex:1,
            alignItems:'center',
            justifyContent: 'space-around',}}>
              <TouchableOpacity style={{
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }} onPress={() => this.props.navigation.navigate('Message')}>
                  <Text style={iOSUIKit.largeTitleEmphasized}>Flee</Text>
                  <Icon style={{ paddingLeft: 10 }}
                    name="plane"
                    size={28}
                    color="black" />
                  </TouchableOpacity> 
          </View> 
        </ImageBackground>
        <ImageBackground  style= { styles.MiddleBackgroundImage } source={{uri: 'https://media.giphy.com/media/fxe1ajQoTN0fe2EGPw/giphy.gif'}} >
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }} onPress={() => this.props.navigation.navigate('Featured')}>
                  <Text style={iOSUIKit.largeTitleEmphasized}>Featured</Text>
                  <Icon style={{ paddingLeft: 10 }}
                    name="star"
                    size={28}
                    color="black" />
                </TouchableOpacity>
              </View>
        </ImageBackground>
        <ImageBackground  style= { styles.BottomBackgroundImage } source={ocean}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={{
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }} onPress={() => this.props.navigation.navigate('Search')}>
                  <Text style={iOSUIKit.largeTitleEmphasized}>Find</Text>
                  <Icon style={{ paddingLeft: 10 }}
                    name="search"
                    size={28}
                    color="black" />
                </TouchableOpacity>
              </View>
        </ImageBackground>
      </View>
      </VerticalViewPager>
    </SafeAreaView>
    )
  }
}