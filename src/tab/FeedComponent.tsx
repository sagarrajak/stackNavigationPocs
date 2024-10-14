import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { TabScreen } from './TabMain';


const style = StyleSheet.create({
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#1624e4',
    width: 200,
    margin: 50,
    borderRadius: 10,
  },
});

const FeedComponent: React.FC<TabScreen<'Feed'>> = ({ navigation }) => {
  const navigateToRoot = () => {
    navigation.navigate('Profile');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };


  return (
    <View>
      <Text>FeedComponent</Text>
      <TouchableOpacity style={style.button} onPress={navigateToRoot}>
        <Text style={{ color: '#FFFFF' }} >Go to profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={navigateToSettings}>
        <Text style={{ color: '#FFFFF' }} >Go to settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedComponent;
