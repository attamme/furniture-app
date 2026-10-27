
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryBox } from "@/components/CategoryBox";
import { ProductHomeItem } from "@/components/ProductHomeItem";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="Home"
        leftAction="search"
        rightAction="logout"
        enableSearch
        keyword={keyword}
        onKeywordChange={setKeyword}
        onRightPress={() => console.log("logout")}
      />

      <FlatList
        key="products-grid-2"
        data={products}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductHomeItem item={item} />}
        ListHeaderComponent={
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <CategoryBox
                item={item}
                selected={(item.id ?? null) === selectedCategoryId}
                onPress={() => setSelectedCategoryId(item.id ?? null)}
              />
            )}
          />
        }
        ListFooterComponent={<View style={{ height: 24 }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  row: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 8,
  },
  categories: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
