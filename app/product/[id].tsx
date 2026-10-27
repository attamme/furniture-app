
import { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { ImageCarousel } from "@/components/ImageCarousel";
import { products } from "@/data/products";
import { colors } from "@/styles/colors";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const product = useMemo(() => {
    return products.find((item) => item.id === Number(id));
  }, [id]);

  const imageHeight = Math.round(height * 0.45);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Product not found</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const images = product.images?.length
    ? product.images
    : [product.image];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ImageCarousel
          key={product.id}
          images={images}
          height={imageHeight}
        />

        <View style={styles.card}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            A stylish and comfortable piece that fits well into any living
            space. Its simple design makes it easy to match with different
            furniture and interior styles, while providing comfort for
            everyday use.
          </Text>
        </View>

        <View style={styles.footerSpace} />
      </ScrollView>

      <View style={[styles.overlay, { top: insets.top + 12 }]}>
        <Pressable
          onPress={() => router.back()}
          style={styles.iconButton}
          hitSlop={10}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color={colors.black}
          />
        </Pressable>

        <Pressable
          onPress={() => console.log("toggle favorite")}
          style={styles.iconButton}
          hitSlop={10}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={colors.black}
          />
        </Pressable>
      </View>

      <View
        style={[
          styles.footer,
          { bottom: Math.max(insets.bottom, 16) },
        ]}
      >
        <View style={styles.footerButton}>
          <Button
            label="Contact Seller"
            onPress={() => console.log("contact seller")}
          />
        </View>

        <Pressable
          onPress={() => console.log("toggle favorite")}
          style={styles.footerIcon}
          hitSlop={10}
        >
          <Ionicons
            name="bookmark-outline"
            size={20}
            color={colors.black}
          />
        </Pressable>
      </View>
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
  overlay: {
    position: "absolute",
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
  },
  footerButton: {
    flex: 1,
  },
  footerIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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
