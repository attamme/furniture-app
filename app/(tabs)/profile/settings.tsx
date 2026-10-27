
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { ListItem } from "@/components/ListItem";
import { EditableBox } from "@/components/EditableBox";
import Button from "@/components/Button";
import { colors } from "@/styles/colors";

export default function Settings() {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Lily Pot");
  const [email, setEmail] = useState("lilypot@gmail.com");

  async function openHelp() {
    const url = "https://www.google.com";

    try {
      const can = await Linking.canOpenURL(url);

      if (!can) {
        Alert.alert("Cannot open link");
        return;
      }

      await Linking.openURL(url);
    } catch {
      Alert.alert("Cannot open link");
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="Settings"
        leftAction="back"
        onLeftPress={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Personal Information
          </Text>

          <Pressable
            onPress={() => setEditing((value) => !value)}
            hitSlop={10}
          >
            <Ionicons
              name="pencil"
              size={20}
              color={colors.grey}
            />
          </Pressable>
        </View>

        <View style={styles.boxes}>
          <EditableBox
            label="Name"
            value={name}
            editing={editing}
            onChangeText={setName}
          />

          <EditableBox
            label="Email"
            value={email}
            editing={editing}
            onChangeText={setEmail}
          />
        </View>

        {editing && (
          <View style={styles.save}>
            <Button
              label="Save changes"
              onPress={() => {
                setEditing(false);
                console.log("saved", { name, email });
              }}
            />
          </View>
        )}

        <Text style={[styles.sectionTitle, styles.helpTitle]}>
          Help Center
        </Text>

        <View style={styles.help}>
          <ListItem
            title="FAQ"
            icon="help-circle-outline"
            onPress={openHelp}
          />

          <ListItem
            title="Contact us"
            icon="mail-outline"
            onPress={openHelp}
          />
        </View>
      </ScrollView>
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
    paddingTop: 14,
    paddingBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.black,
  },
  boxes: {
    marginTop: 12,
    gap: 12,
  },
  save: {
    marginTop: 14,
  },
  helpTitle: {
    marginTop: 22,
  },
  help: {
    marginTop: 12,
    gap: 12,
  },
});
