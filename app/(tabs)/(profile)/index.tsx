import { View, Text, Image } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View className=" flex flex-row py-2 items-center justify-around">
      <Image
        className="rounded-full"
        source={{
          width: 100,
          height: 100,
          uri: 'https://github.com/onesamket.png',
        }}
      />
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
    </View>
  );
};

export default Profile;
