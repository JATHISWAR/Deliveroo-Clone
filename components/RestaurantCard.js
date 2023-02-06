import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";



 const RestaurantCard =({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
    return(
        <View>
        <Text>RestaurantCard </Text>
        </View>
 
  );
}



export default RestaurantCard;