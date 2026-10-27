
import { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "@/data/products";
import { colors } from "@/styles/colors";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { height } = useWindowDimensions();

  const product = useMemo(() => {
    return products.find((item) => item.id === Number(id));
  }, [id]);

  const imageHeight = Math.round(height * 0.45);

  if (!product) {
    return (
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.center}>
          <Text style={styles.notFound}>Product not found</Text>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backText}>Go Back</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={{ uri: product.image }}
          style={[styles.heroImage, { height: imageHeight }]}
          contentFit="cover"
        />

        <View style={styles.card}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Some random placeholder text for the product descriptioin.
          </Text>
        </View>

        <View style={styles.footerSpace} />
      </ScrollView>

      <SafeAreaView
        edges={["top"]}
        style={styles.backContainer}
        pointerEvents="box-none"
      >
        <Pressable
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={24} color={colors.black} />
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  heroImage: {
    width: "100%",
    backgroundColor: colors.line,
  },
  card: {
    marginTop: -18,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.line,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.black,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
    color: colors.grey,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: "800",
    color: colors.black,
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: colors.grey,
  },
  footerSpace: {
    height: 120,
  },
  backContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFound: {
    color: colors.grey,
    fontWeight: "700",
  },
  backText: {
    color: colors.black,
    marginTop: 16,
  },
});
