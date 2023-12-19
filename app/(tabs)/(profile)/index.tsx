import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView className=" flex flex-row py-2 items-center justify-around">
      <View>
        <Image
          className="rounded-full"
          source={{
            width: 100,
            height: 100,
            uri: 'https://github.com/onesamket.png',
          }}
        />
        <Ionicons name="add" className="absolute right-2 bottom-1" />
      </View>
      <View className="flex flex-row gap-6">
        <View className="text-center flex items-center justify-center">
          <Text className="font-semibold">79</Text>
          <Text>Posts</Text>
        </View>
        <View className="text-center flex items-center justify-center">
          <Text className="font-semibold">109M</Text>
          <Text>Followers</Text>
        </View>
        <View className="text-center flex items-center justify-center">
          <Text className="font-semibold">10</Text>
          <Text>Following</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
