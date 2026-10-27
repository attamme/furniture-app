
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { ListItem } from "@/components/ListItem";
import Button from "@/components/Button";
import { colors } from "@/styles/colors";

export default function Profile() {
  const router = useRouter();

  const user = {
    name: "Lily Pot",
    email: "lilypot@gmail.com",
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="Profile"
        rightAction="logout"
        onRightPress={() => console.log("logout")}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.card}>
          <ListItem
            title="My listings"
            subtitle="Create & manage your listings"
            icon="list-outline"
            onPress={() => router.push("/(tabs)/profile/new-listing")}
          />

          <ListItem
            title="Settings"
            subtitle="Personal information & help center"
            icon="settings-outline"
            onPress={() => router.push("/(tabs)/profile/settings")}
          />
        </View>

        <View style={styles.bottom}>
          <Button
            label="Logout"
            onPress={() => console.log("logout")}
          />
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.black,
  },
  email: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: colors.grey,
  },
  card: {
    marginTop: 16,
    gap: 12,
  },
  bottom: {
    marginTop: "auto",
    paddingBottom: 16,
  },
});
