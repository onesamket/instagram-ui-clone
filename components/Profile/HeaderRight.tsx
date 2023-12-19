import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons, Octicons } from '@expo/vector-icons';
import colors from 'utils/colors';

const HeaderRight = () => {
  return (
    <View className="flex flex-row space-x-4 px-3">
      <Ionicons name="add-circle-outline" size={24} color={colors.black} />
      <Ionicons name="heart-outline" size={24} color={colors.black} />
      <Ionicons name="paper-plane-outline" size={24} color={colors.black} />
      {/* <Octicons name="three-bars" size={24} color="black" /> */}
    </View>
  );
};

export default HeaderRight;
