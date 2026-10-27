
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { products } from "@/data/products";
import { colors } from "@/styles/colors";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <Header
          title="Product"
          leftAction="back"
          onLeftPress={() => router.back()}
        />
        <View style={styles.content}>
          <Text>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="Product Details"
        leftAction="back"
        onLeftPress={() => router.back()}
      />

      <View style={styles.content}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          contentFit="cover"
        />

        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
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
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: colors.line,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.grey,
    marginTop: 8,
  },
});
