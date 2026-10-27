
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Header } from "@/components/Header";

export default function NewListing() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="My Listings"
        leftAction="back"
        onLeftPress={() => router.back()}
      />

      <View style={styles.content}>
        <Text>My Listings</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
