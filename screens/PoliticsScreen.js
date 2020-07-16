import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const PoliticsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Politics Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Politics Screen'
};

const styles = StyleSheet.create({
    
});

export default PoliticsScreen;
