import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/HeaderButton'

const AboutUsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About us Screen</Text>
    </View>
  );
};

export const screenOptions = props => {
  return {
  headerTitle: 'About us',
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

};

const styles = StyleSheet.create({
    
});

export default AboutUsScreen;
