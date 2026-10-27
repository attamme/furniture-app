
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { colors } from "@/styles/colors";
import type { Category } from "@/data/categories";

type Props = {
  item: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryBox({ item, selected = false, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, selected && styles.selected]}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        contentFit="cover"
      />

      <Text
        style={[styles.title, selected && styles.selectedTitle]}
        numberOfLines={1}
      >
        {item.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    marginRight: 12,
  },
  selected: {
    borderColor: colors.blue,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: colors.grey,
    fontWeight: "600",
  },
  selectedTitle: {
    color: colors.black,
  },
});
