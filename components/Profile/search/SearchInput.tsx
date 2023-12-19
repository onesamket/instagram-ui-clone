import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SearchInput = () => {
  return (
    <View className=" flex flex-1 flex-row  w-screen space-x-2 items-center py-1 px-5  bg-gray-300 rounded">
      <Ionicons name="search-outline" size={15} />
      <TextInput placeholder="search" />
    </View>
  );
};

export default SearchInput;
