import { View, Text } from 'react-native';
import React from 'react';
import CardHeader from './Header';
import CardBody from './CardBody';
import Reaction from './Reaction';
type Props = {
  image: string;
};
const CardWrapper = ({ image }: Props) => {
  return (
    <View className=" bg-white my-[0.5px] rounded">
      <CardHeader />
      <CardBody image={image} />
      <Reaction />
    </View>
  );
};

export default CardWrapper;
