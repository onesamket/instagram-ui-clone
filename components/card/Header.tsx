import { View, Text, Image, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { Fontisto, Ionicons } from '@expo/vector-icons';

const CardHeader = () => {
  return (
    <View className="flex flex-row px-2 items-center justify-between">
      <View className="flex items-center flex-row space-x-2 p-2">
        <Image
          className="rounded-full"
          source={{
            width: 50,
            height: 50,
            uri: 'https://github.com/onesamket.png',
          }}
        />
        <View className="flex flex-col">
          <Pressable>
            <Text>#onesamket</Text>
          </Pressable>
          <Pressable>
            <Text>onesamket.dev</Text>
          </Pressable>
        </View>
      </View>
      <Pressable>
        <Fontisto name="more-v-a" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default CardHeader;
