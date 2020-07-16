import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const SportsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sports Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Sports Screen'
};

const styles = StyleSheet.create({
    
});

export default SportsScreen;
