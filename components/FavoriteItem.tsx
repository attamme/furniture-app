
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import type { Product } from "@/data/products";

type Props = {
  item: Product;
  onRemove?: () => void;
};

export function FavoriteItem({ item, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="cover"
      />

      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <Pressable onPress={onRemove} hitSlop={10} style={styles.removeBtn}>
        <Ionicons name="close" size={20} color={colors.grey} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: colors.line,
  },
  center: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.black,
  },
  price: {
    marginTop: 6,
    fontSize: 13,
    color: colors.grey,
    fontWeight: "600",
  },
  removeBtn: {
    paddingLeft: 8,
    paddingVertical: 8,
  },
});
