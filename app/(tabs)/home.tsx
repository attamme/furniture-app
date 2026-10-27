
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from "@/components/Header";

export default function Home() {
  const [keyword, setKeyword] = useState("");

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

      <View style={styles.content}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
