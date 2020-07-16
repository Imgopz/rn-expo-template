import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const CategoryScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Category Screen</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Category Screen'
};

const styles = StyleSheet.create({
    
});

export default CategoryScreen;
