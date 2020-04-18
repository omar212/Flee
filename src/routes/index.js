import React from "react";

import { Image, Text } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Feed from "../screens/Feed";
import Find from "../screens/Find";
import Capture from "../screens/Plus/Capture";
import MessageBox from "../screens/MessageBox";
import Profile from "../screens/Profile";
import Flee from "../screens/Flee/Flee";
import Featured from "../screens/Featured/Featured";


import message from "../../assets/windowscomments-grey.png";
import search from "../../assets/search-grey.png";
import plusTikTokWhite from "../../assets/plusTikTok-white.png";
import home from "../../assets/home.png";
import star from "../../assets/star1.png";

const Routes = createBottomTabNavigator(
  {
    Flee: {
      screen: Flee,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
      })
    },
    Search: Find,
    Plus: {
      screen: Capture,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
      })
    },
    Message: MessageBox,
    Featured: {
      screen: Feed
    }
      
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      showLabel: false,
      style: {
        backgroundColor: "black",
        height: 57,
        borderTopColor: "grey",
        borderTopWidth: 0.19,
        paddingVertical: 7
      }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconName;

        if (routeName === "Flee") IconName = home;
        else if (routeName === "Search") IconName = search;
        else if (routeName === "Plus") IconName = plusTikTokWhite;
        else if (routeName === "Message") IconName = message;
        else if (routeName === "Featured") IconName = star;

        return (
          <>
            <Image
              source={IconName}
              style={{
                width: IconName === plusTikTokWhite ? 43 : 25,
                height: IconName === plusTikTokWhite ? 28 : 25
              }}
            />
            {routeName === "Plus" ? null : (
              <Text style={{ color: "grey", fontSize: 10 }}>{routeName}</Text>
            )}
          </>
        );
      }
    })
  }
);

export default createAppContainer(Routes);
