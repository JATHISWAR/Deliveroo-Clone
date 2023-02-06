import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

// import Categories from "../components/Categories";
// import FeatureRow from "../components/FeatureRow";
// import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {}, [
  //   sanityClient
  //     .fetch(
  //       `
  //     *[_type == "featured"] {
  //       ...,
  //       restaurants[]->{
  //         ...,
  //         dishes[] ->
  //       }
  //     }`
  //     )
  //     .then((data) => {
  //       setFeaturedCategories(data);
  //     }),
  // ]);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default "
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying the juicy discounts!"
        />

        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
