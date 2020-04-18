import {
    StyleSheet,
    Dimensions
} from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {
    width,
    height = height - 50
} = Dimensions.get("window");

const styles = StyleSheet.create({


    // container: {
    //     flex: 1,
    //     paddingHorizontal: 10,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: 1,
    //     justifyContent: 'space-around',
    // },
    // button: {
    //     alignItems: 'center',
    //     backgroundColor: '#DDDDDD',
    //     padding: 10,
    // },
    // countContainer: {
    //     alignItems: 'center',
    //     padding: 10,
    // },
    // countText: {
    //     color: '#FF00FF',
    // },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 1,
    },
    fleeButton: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    },
    findButton: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'blue',
    },
    featureButton: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green'
    },
    header: {
        flexDirection: "row",
        position: "absolute",
        top: 40,
        left: 75,
        alignItems: "center"
    },
    textHeader: {
        color: "black",
        paddingHorizontal: wp('25%'),
        paddingVertical: hp('100%'),
        fontSize: hp('5%'),
    },
    buttons: {
        width: wp('28%'),
        height: hp('15%'),
        fontSize: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        width: "75%",
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 3
    },
});

export { styles }