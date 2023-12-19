import { AntDesign } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const HeaderLeft = () => {
  return (
    <View className="flex items-center flex-row  px-3 space-x-3 ">
      <Text>onesamket</Text>
      <Link href="/(auth)/signin">
        <AntDesign name="down" size={14} color="black" />
      </Link>
    </View>
  );
};

export default HeaderLeft;
