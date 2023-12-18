import { View, Text } from 'react-native';
import React from 'react';
import CardHeader from 'components/card/Header';
import CardBody from 'components/card/CardBody';
import CardWrapper from 'components/card/CardWrapper';
import { ScrollView } from 'react-native-gesture-handler';

const index = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CardWrapper image="https://github.com/onesamket.png" />
      <CardWrapper image="https://github.com/sara.png" />
      <CardWrapper image="https://github.com/simen.png" />
      <CardWrapper image="https://github.com/vercel.png" />
      <CardWrapper image="https://github.com/alex.png" />
      <CardWrapper image="https://github.com/js.png" />
      <CardWrapper image="https://github.com/michael.png" />
      <CardWrapper image="https://github.com/yonas.png" />
      <CardWrapper image="https://github.com/ab.png" />
      <CardWrapper image="https://github.com/stave.png" />
      <CardWrapper image="https://github.com/react.png" />
      <CardWrapper image="https://github.com/remix-run.png" />
    </ScrollView>
  );
};

export default index;
