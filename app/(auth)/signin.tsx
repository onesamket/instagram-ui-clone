import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignIn = () => {
  return (
    <View className="w-screen flex-1 items-center justify-center gap-7 px-12 py-5">
      {/* header text  */}
      <View>
        <Text className="text-xl font-bold">login into instagram </Text>
      </View>

      {/* form  */}
      <View className=" w-full gap-1">
        <TextInput
          className="border border-slate-300 w-full py-2 px-5 rounded-md"
          placeholder="enter username or email "
        />
        <TextInput
          className="border border-slate-300 w-full py-2 px-5 rounded-md"
          secureTextEntry
          placeholder="password "
        />
        <Pressable className="border flex items-center justify-center bg-blue-500  border-slate-300 w-full py-2 px-5 rounded-md">
          <Text className="text-white">log in</Text>
        </Pressable>
        <Link className=" py-2 self-end mr-2 text-blue-500 mt-3" href="/(auth)/forget-password">
          forget password
        </Link>
      </View>

      {/* divider  */}
      <View className="w-full">
        <View className="flex flex-row items-center space-x-1">
          <View className="h-[0.5px] flex-grow bg-slate-400 rounded-md" />
          <Text>OR</Text>
          <View className="h-[0.5px] flex-grow bg-slate-400 rounded-md" />
        </View>

        {/* face book  */}
        <View>
          <Pressable className="flex flex-row justify-center items-center space-x-1 border border-slate-300 p-2 ">
            <Ionicons name="logo-facebook" size={24} />
            <Text> continue with Facebook</Text>
          </Pressable>
        </View>
      </View>
      <View className=" w-full">
        <Pressable className="flex flex-row justify-center items-center rounded space-x-4 p-3 border border-slate-400 my-5">
          <Text>Don't have account?</Text>
          <Link className="text-blue-500" href={'/(auth)/signup'}>
            sign up
          </Link>
        </Pressable>
      </View>
      {/* sign up btn  */}
    </View>
  );
};

export default SignIn;
