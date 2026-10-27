
import { View, Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { colors } from "@/styles/colors";
import type { Product } from "@/data/products";

type Props = {
  item: Product;
  onPress?: () => void;
};

export function ProductHomeItem({ item, onPress }: Props) {
  const { width } = useWindowDimensions();
  const itemWidth = (width - 32 - 12) / 2;

  return (
    <Pressable onPress={onPress} style={[styles.container, { width: itemWidth }]}>
      <Image
        source={{ uri: item.image }}
        style={[styles.image, { width: itemWidth, height: itemWidth }]}
        contentFit="cover"
      />

      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>

      <Text style={styles.price}>{item.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
    backgroundColor: colors.line,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    color: colors.grey,
    fontWeight: "600",
  },
});
