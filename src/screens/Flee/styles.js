import {
    StyleSheet,
    Dimensions
} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {
    width,
    height = height - 50
} = Dimensions.get("window");

const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 1,
        },
        TopBackgroundImage: {
            width: wp('100%'),
            height: hp('33.33%'),
            zIndex: -99,
            flex: 1,
        },
        MiddleBackgroundImage: {
            width: wp('100%'),
            height: hp('33.33%'),
            zIndex: -99,
            flex: 1,
        },
        BottomBackgroundImage: {
            width: wp('100%'),
            height: hp('33.33%'),
            zIndex: -99,
            flex: 1,
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
        post: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flex: 1,
            zIndex: 2,
            alignSelf: "stretch",
            position: "relative",
            bottom: 30
      },
      page_container: {
            flex: 1,
            width,
            height
      },
      video: {
            width: "100%",
            flex: 1,
            zIndex: 2
      },
      videoPlayer: {
            width: "100%",
            zIndex: 2,
            flex: 1
      },
      header: {
        flexDirection: "row",
        position: "absolute",
        top: 40,
        left: 75,
        alignItems: "center"
      },
      spanCenterHeader: { color: "white", fontSize: 20 },
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
      InnerContent: {
          width: "100%",
          position: "relative",
          bottom: 0,
          justifyContent: "flex-end",
          paddingHorizontal: 10,
          flexDirection: "column"
      },
      name: { color: "white", marginVertical: 3, fontSize: 15, fontWeight: "bold" },
      description: { color: "white", marginTop: 2, fontSize: 15 },
      hashtags: { color: "white", fontWeight: "bold" },
      componentMusic: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        width: 190
      },
      
      contentIcon: {
        width: "20%",
        position: "absolute",
        bottom: 11,
        right: 0,
        alignItems: "center",
        zIndex: 3
      },
      contentIconProfile: {
        alignItems: "center",
        marginBottom: 2
      },

      iconProfile: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 25,
        borderColor: "white",
        borderWidth: 1
      },
      iconPlusProfile: {
        height: 35,
        width: 25,
        position: "relative",
        bottom: 20,
        zIndex: 5,
        resizeMode: "contain"
      },
      iconsAction: {
        alignItems: "center",
        marginBottom: 20
      },
      contentIconAction: {
        alignItems: "center",
        marginBottom: 13
      },
      iconAction: {
        height: 40,
        width: 40
      },
      iconWhatsapp: {
        height: 40,
        width: 40,
        resizeMode: "cover",
        borderRadius: 20
      },
      textActions: { color: "white", textAlign: "center", width: 54 },
      iconMusic: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 30
      }
  });

  export { styles }