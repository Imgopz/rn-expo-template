import React from 'react';
import { Platform, View, SafeAreaView } from 'react-native'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HomeScreen from '../screens/HomeScreen';
import PoliticsScreen from '../screens/PoliticsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SportsScreen from '../screens/SportsScreen';
import AboutUsScreen, { screenOptions as AboutUsScreenOptions } from '../screens/stackscreens/AboutUsScreen'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors';

const defaultTopTabNavOptions = {
  activeTintColor:'white',
  inactiveTintColor:'black',
  style: {
    backgroundColor: Platform.OS === 'android' ? Colors.accent : '',
    borderTopWidth:2,
    borderTopColor:'white',
  },
  tabStyle: {
    width: 100, 
    // borderWidth: 1,
    // borderTopRightRadius: 15,   
  },
  labelStyle:{
    fontFamily: 'open-sans-bold',
    //fontSize: 15,
  },
  indicatorStyle: {
    backgroundColor: 'black',
    borderWidth: 2
  },
  scrollEnabled: true,
};


const Tab = createMaterialTopTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={defaultTopTabNavOptions}> 
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Politics" component={PoliticsScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
    </Tab.Navigator>
  )
}

const BottomTab = createMaterialBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator> 
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Category" component={CategoryScreen} />
    </BottomTab.Navigator>
  )
}

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};


// const BottomTabStack = createStackNavigator();

// export const BottomTabStackNavigation = () => {
//   return (
//     <BottomTabStack.Navigator screenOptions={defaultNavOptions}>
//       <BottomTabStack.Screen name="Main" component={BottomTabNavigation}/>
//     </BottomTabStack.Navigator> 
//   )
// }

const CloverStack = createStackNavigator();

export const CloverStackNavigation = () => {
  return (
    <CloverStack.Navigator screenOptions={defaultNavOptions}>
      <CloverStack.Screen name="Clover" component={TabNavigation} options={CloverScreenOtions}/>
    </CloverStack.Navigator> 
  )
}


const AboutStack = createStackNavigator();

export const AboutStackNavigation = () => {
  return (
    <AboutStack.Navigator screenOptions={defaultNavOptions}>
      <AboutStack.Screen name="About us" component={AboutUsScreen} options={AboutUsScreenOptions} />
    </AboutStack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
        <Drawer.Screen name="Main Screen" component={CloverStackNavigation}  
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={23}
                color={props.color}
              />
            )
          }}
        />
        <Drawer.Screen name="About us" component={AboutStackNavigation} 
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-help' : 'ios-help'}
                size={23}
                color={props.color}
              />
            )
          }}
        />
    </Drawer.Navigator>
  )
}

export const CloverScreenOtions = props => {
  return {
    headerTitle: 'Clover',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={ () => {props.navigation.toggleDrawer()}}
        />
      </HeaderButtons>
    )
  } 
}
