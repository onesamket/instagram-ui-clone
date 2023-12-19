import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import HeaderLeft from 'components/Profile/HeaderLeft';
import HeaderRight from 'components/Profile/HeaderRight';
import SearchInput from 'components/Profile/search/SearchInput';
import EditScreenInfo from 'components/edit-screen-info';
import { Link, Tabs } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3788de',

        tabBarInactiveTintColor: '#18191a',
      }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: '',
          headerLeft: () => <Text className="mx-4 font-bold text-xl">Instagram</Text>,
          headerRight: () => <HeaderRight />,
          tabBarIcon: ({ size, color }) => (
            <Ionicons color={color} size={size} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)/index"
        options={{
          title: '',
          headerLeft: () => <SearchInput />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(real)/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size + 4} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(message)/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)/index"
        options={{
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
