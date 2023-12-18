import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';

const CardBody = ({ image }: { image: string }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View className="px-1">
      <Image
        className="rounded-md"
        source={{
          width: width - 8,
          height: height / 2,
          uri: image,
        }}
      />
    </View>
  );
};

export default CardBody;
