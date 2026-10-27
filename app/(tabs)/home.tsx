
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CategoryBox } from "@/components/CategoryBox";
import { categories } from "@/data/categories";

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
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <CategoryBox
            item={item}
            selected={(item.id ?? null) === selectedCategoryId}
            onPress={() => setSelectedCategoryId(item.id ?? null)}
          />
        )}
      />

      <View style={styles.content}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  list: {
    flexGrow: 0,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
