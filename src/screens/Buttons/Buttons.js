import React, { Component } from "react";

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Form,
    Container,
    ImageBackground,
    Navigator
} from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import VerticalViewPager from "react-native-vertical-view-pager";

const { width, height = height - 50 } = Dimensions.get("window");

import sky from "../../../assets/sky.gif";
import ocean from "../../../assets/ocean.gif";


import { styles } from './styles'




export default class Buttons extends React.Component {
    handleClick = () => {
        alert('Button clicked!');
        console.log('i ran')
    }
    componentDidMount(){
        console.log('navi: ', this.props.screenName)
    }

    render(){
        return(
            <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 1,
                    justifyContent: 'space-around',
                }}>
                    
                    {/* <TouchableOpacity style={styles.button} >
                        <Button
                            icon={
                                <Icon
                                    style={{ paddingLeft: 10 }}
                                    name="search"
                                    size={18}
                                    color="gold"
                                />
                            }
                            style={styles.buttons}
                            titleStyle={{ color: 'gold', fontSize: hp('2%') }}
                            buttonStyle={{ backgroundColor: 'red' }}
                            iconRight
                            title="Find"
                            onPress={() => this.props.navigation.navigate('Flee')} />
                    </TouchableOpacity> */}
                
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Featured')}>
                        <Button
                            icon={
                                <Icon
                                    style={{ paddingLeft: 10 }}
                                    name="star"
                                    size={18}
                                    color="gold"
                                />
                            }
                            style={styles.buttons}
                            titleStyle={{ color: 'gold', fontSize: hp('2%') }}
                            buttonStyle={{ backgroundColor: 'black' }}
                            iconRight
                            onPress={() => this.props.navigation.navigate('Featured')}
                            title="Featured"
                        />
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Flee')}>
                        <Button
                            icon={
                                <Icon
                                    style={{ paddingLeft: 10 }}
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
                    </TouchableOpacity>
                
            </View>
        )
    }
}