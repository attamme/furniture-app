
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import { Header } from "@/components/Header";
import { CategoryBox } from "@/components/CategoryBox";
import { ProductHomeItem } from "@/components/ProductHomeItem";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

type DemoProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Home() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const [demoProducts, setDemoProducts] = useState<DemoProduct[]>([]);
  const [loadingDemo, setLoadingDemo] = useState(true);
  const [demoError, setDemoError] = useState(false);

  const loadDemoProducts = useCallback(async () => {
    setLoadingDemo(true);
    setDemoError(false);

    try {
      const response = await axios.get<DemoProduct[]>(
        "https://fakestoreapi.com/products?limit=4",
        { timeout: 10000 }
      );

      setDemoProducts(response.data.slice(0, 4));
    } catch {
      setDemoError(true);
    } finally {
      setLoadingDemo(false);
    }
  }, []);

  useEffect(() => {
    void loadDemoProducts();
  }, [loadDemoProducts]);

  const filteredProducts = useMemo(() => {
    const byCategory =
      selectedCategoryId === null
        ? products
        : products.filter(
            (product) => product.category === selectedCategoryId
          );

    const search = keyword.trim().toLowerCase();

    if (!search) return byCategory;

    return byCategory.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  }, [selectedCategoryId, keyword]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <Header
          title="Home"
          leftAction="search"
          rightAction="logout"
          enableSearch
          keyword={keyword}
          onKeywordChange={setKeyword}
          onRightPress={() => router.replace("/(auth)/signin")}
        />

        <FlatList
          key="products-grid-2"
          data={filteredProducts}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          renderItem={({ item }) => (
            <ProductHomeItem
              item={item}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: { id: String(item.id) },
                })
              }
            />
          )}
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
          ListFooterComponent={
            <View style={styles.demoSection}>
              <Text style={styles.demoTitle}>API demo products</Text>
              <Text style={styles.demoSubtitle}>
                Fetched from Fake Store API
              </Text>

              {loadingDemo ? (
                <ActivityIndicator style={styles.demoStatus} />
              ) : demoError ? (
                <Pressable
                  onPress={() => void loadDemoProducts()}
                  style={styles.demoStatus}
                >
                  <Text style={styles.demoRetry}>
                    Couldn't load products. Tap to retry.
                  </Text>
                </Pressable>
              ) : (
                <View style={styles.demoGrid}>
                  {demoProducts.map((item) => (
                    <View style={styles.demoCard} key={item.id}>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.demoImage}
                        contentFit="contain"
                      />

                      <Text
                        numberOfLines={2}
                        style={styles.demoProductTitle}
                      >
                        {item.title}
                      </Text>

                      <Text style={styles.demoPrice}>
                        ${item.price.toFixed(2)}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          }
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  demoSection: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 28,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  demoSubtitle: {
    fontSize: 12,
    color: "#777",
    marginBottom: 16,
  },
  demoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  demoCard: {
    width: "47%",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 14,
  },
  demoImage: {
    width: "100%",
    height: 110,
    marginBottom: 8,
  },
  demoProductTitle: {
    fontSize: 12,
    fontWeight: "600",
  },
  demoPrice: {
    marginTop: 6,
    fontSize: 12,
    color: "#777",
  },
  demoStatus: {
    paddingVertical: 24,
  },
  demoRetry: {
    color: "#555",
    textAlign: "center",
  },
});
