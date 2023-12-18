import { View, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import colors from 'utils/colors';

const Reaction = () => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  return (
    <View className="flex flex-row py-3 px-4 justify-between items-center">
      <View className="flex items-center flex-row space-x-2">
        <Ionicons
          onPress={() => setLike((prev) => !prev)}
          color={like ? colors.purple : colors.black}
          name={like ? 'heart-circle' : 'heart-outline'}
          size={25}
        />
        <EvilIcons name="comment" size={25} color={colors.black} />
        <EvilIcons name="share-google" size={25} color={colors.black} />
      </View>
      <TouchableHighlight>
        <Ionicons
          onPress={() => setBookmark((prev) => !prev)}
          name={bookmark ? 'bookmark' : 'bookmark-outline'}
          size={25}
          color={colors.black}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Reaction;
