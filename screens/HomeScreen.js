import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Home Screen'
};

const styles = StyleSheet.create({

});

export default HomeScreen;
