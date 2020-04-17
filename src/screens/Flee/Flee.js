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
  Navigator
} from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextTicker from "react-native-text-ticker";
import VerticalViewPager from "react-native-vertical-view-pager";

const { width, height = height - 50 } = Dimensions.get("window");

import sky from "../../../assets/sky.gif";
import ocean from "../../../assets/ocean.gif";


import api from "../../services/api.js";

import { styles } from './styles'

import { Video } from "expo-av";

export default class Flee extends Component {
  
  render(){
    return (
    <SafeAreaView>
      <VerticalViewPager showsVerticalScrollIndicator={true}>
      <View style={[{ height: 50, zIndex: 7 }, styles.header]}>
        <View>
          <TouchableOpacity>
            <Text style={styles.textHeader}>Flee</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <ImageBackground  style= { styles.TopBackgroundImage } source={sky}>
        <View
            style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            padding: 1,
            justifyContent: 'space-around',}}>
            
          </View> 
        </ImageBackground>
        <ImageBackground  style= { styles.MiddleBackgroundImage } source={{uri: 'https://media.giphy.com/media/fxe1ajQoTN0fe2EGPw/giphy.gif'}} >
                    <View
                      style={{
                        flex:1,
                        flexDirection:'row',
                        alignItems:'center',
                        padding: 1,
                        justifyContent: 'space-around',}}>
                <View onPress={
                  () => this.props.navigation.navigate('Search')
                }>
                            <Button
                              icon={
                                  <Icon
                                    style={{paddingLeft: 10}}
                                        name="search"
                                        size={18}
                                        color="gold"
                                    />
                              }
                              style={styles.buttons}
                              titleStyle={{ color: 'gold', fontSize: hp('2%') }}
                              buttonStyle={{backgroundColor: 'red'}}
                              iconRight
                              title="Find"
                              
                          />
                      </View>
                    <Button
                        icon={
                        <Icon
                            style={{paddingLeft: 10}}
                            name="star"
                            size={18}
                            color="gold"
                        />
                        }
                        style={styles.buttons}
                        titleStyle={{ color: 'gold', fontSize: hp('2%') }}
                        buttonStyle={{backgroundColor: 'black'}}
                        iconRight
                        onPress = {
                          () => this.props.navigation.navigate('Featured')
                        }
                        title="Featured"
                    />
                    <Button
                        icon={
                        <Icon
                            style={{paddingLeft: 10}}
                            name="plane"
                            size={18}
                            color="gold"
                        />
                        }
                        style={styles.buttons}
                        titleStyle={{ color: 'gold', fontSize: hp('2%') }}
                        iconRight
                        title="Flee"
                    />
                </View>
        </ImageBackground>
        <ImageBackground  style= { styles.BottomBackgroundImage } source={ocean}>
        <View
            style={{flex:1,
            flexDirection:'row',
            alignItems:'center',
            padding: 1,
            justifyContent: 'space-around',}}>
            
          </View> 
        </ImageBackground>
      </View>
      </VerticalViewPager>
    </SafeAreaView>
    )
  }
}

