
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { FavoriteItem } from "@/components/FavoriteItem";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import { colors } from "@/styles/colors";

export default function Favorites() {
  const favorites: Product[] = products.slice(0, 3);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header title="Favorites" />

      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            item={item}
            onRemove={() => console.log("remove", item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: colors.line,
    marginVertical: 10,
  },
});
