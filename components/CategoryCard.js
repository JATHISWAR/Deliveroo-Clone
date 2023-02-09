import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-svg';

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity 
    className="relative mr-2 h-60 w-40">
    <Image
      source={{
        uri: imgUrl,
      }}
      className="h-60 w-40 rounded" 
      >
        </Image>
      
    <Text className="absolute bottom-1 left-1 text-white font-bold text-2xl bg-black">
      {title}
    </Text>
   
   
  </TouchableOpacity>
);
}

export default CategoryCard
