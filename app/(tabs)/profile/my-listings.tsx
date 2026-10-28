
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import Button from "@/components/Button";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { colors } from "@/styles/colors";

export default function MyListings() {
  const router = useRouter();
  const [listings, setListings] = useState<Product[]>(
    products.slice(0, 3)
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="My Listings"
        leftAction="back"
        onLeftPress={() => router.back()}
      />

      <FlatList
        data={listings}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>
            You don't have any listings yet.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Pressable
              style={styles.details}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: { id: String(item.id) },
                })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                contentFit="cover"
              />

              <View style={styles.info}>
                <Text numberOfLines={2} style={styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </Pressable>

            <Pressable
              hitSlop={10}
              onPress={() =>
                setListings((previous) =>
                  previous.filter((listing) => listing.id !== item.id)
                )
              }
            >
              <Ionicons
                name="trash-outline"
                size={24}
                color={colors.black}
              />
            </Pressable>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Button
          label="Create a new listing"
          onPress={() =>
            router.push("/(tabs)/profile/new-listing")
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 14,
    backgroundColor: colors.line,
  },
  info: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    color: colors.grey,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
});
