import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Navigator } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CameraRoll from '../CameraRoll/CameraRoll'
import { Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Capture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Icon
              iconStyle={{ top: hp('5%'), left: wp('4') }}
              name='close'
              type='font-awesome'
              color='#f50'
              size={wp('5')}
              onPress={() => this.props.navigation.navigate('Flee')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon
              iconStyle={{ top: hp('85%'), left: wp('40%'), fontSize: hp('10'), bottom: hp('5'), color: 'white' }}
              name='adjust'
              type='material'
              color='#f50'
            />
          </TouchableOpacity>
    
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon
              iconStyle={{  bottom: hp('92%'), left: wp('75%'), fontSize: wp('5'), color: 'white'}}
              name='refresh'
              type='material'
              color='#f50'
              />
          </TouchableOpacity>
          <CameraRoll />
        </View>
      </Camera>
    </View>
  );
}