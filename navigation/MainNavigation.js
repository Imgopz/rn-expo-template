import React from 'react';
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../constants/Colors'
import { DrawerNavigation } from '../navigation/AppNavigation'

const MainNavigation = () => {
    return (
      <NavigationContainer> 
        <StatusBar backgroundColor={Colors.statusBar} barStyle={'default'} />
        <DrawerNavigation />
      </NavigationContainer>
    );
}

export default MainNavigation