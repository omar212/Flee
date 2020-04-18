import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import imageIcon from '../../../assets/image-icon.png'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements'


export default class ImagePickerExample extends React.Component {
    
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ display: 'fixed',right: wp('8'), marginTop: hp('90%'), float: 'left', alignItems: 'flex-end', }}>
                <Icon
                    name='image'
                    type='font-awesome'
                    color='white'
                    size={wp('5')}
                    />
                
                    {image && <Image source={{ uri: image }} style={{ position:'flex', width: 600, height: 600 }} />}
                
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [5, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
}
