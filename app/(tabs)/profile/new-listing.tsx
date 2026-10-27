
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { Header } from "@/components/Header";
import Button from "@/components/Button";
import { categories } from "@/data/categories";
import { colors } from "@/styles/colors";

type PickedImage = {
  uri: string;
  name: string;
};

export default function NewListing() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<PickedImage[]>([]);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    categoryTitle: "Select category",
  });

  const categoryOptions = categories.filter((category) => category.id != null);

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission required", "Please allow access to your photos.");
      return;
    }

    if (images.length >= 6) {
      Alert.alert("Photo limit", "You can select up to 6 photos.");
      return;
    }

    setLoading(true);

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 0.8,
        allowsMultipleSelection: true,
        selectionLimit: 6 - images.length,
      });

      if (result.canceled) return;

      const picked = result.assets.map((asset) => ({
        uri: asset.uri,
        name: asset.fileName ?? `image-${Date.now()}-${Math.random()}`,
      }));

      setImages((previous) => [...previous, ...picked].slice(0, 6));
    } catch {
      Alert.alert("Error", "Could not select photos.");
    } finally {
      setLoading(false);
    }
  }

  function handleCreateListing() {
    console.log("create listing", { form, images });
    router.back();
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header
        title="New Listing"
        leftAction="back"
        onLeftPress={() => router.back()}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Photos</Text>

          <View style={styles.photoRow}>
            {images.length < 6 && (
              <Pressable
                onPress={pickImage}
                style={styles.addBox}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color={colors.blue} />
                ) : (
                  <Ionicons name="add" size={26} color={colors.grey} />
                )}
              </Pressable>
            )}

            {images.map((image) => (
              <View key={image.uri} style={styles.photoWrap}>
                <Image
                  source={{ uri: image.uri }}
                  style={styles.photo}
                  contentFit="cover"
                />

                <Pressable
                  onPress={() =>
                    setImages((previous) =>
                      previous.filter((item) => item.uri !== image.uri)
                    )
                  }
                  style={styles.remove}
                  hitSlop={10}
                >
                  <Ionicons name="close" size={16} color={colors.black} />
                </Pressable>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionTitle, styles.detailsTitle]}>
            Details
          </Text>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter product title"
                placeholderTextColor={colors.grey}
                value={form.title}
                onChangeText={(value) =>
                  setForm((previous) => ({ ...previous, title: value }))
                }
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter price"
                placeholderTextColor={colors.grey}
                keyboardType="decimal-pad"
                value={form.price}
                onChangeText={(value) =>
                  setForm((previous) => ({ ...previous, price: value }))
                }
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Category</Text>
              <Pressable
                style={styles.select}
                onPress={() => setCategoryOpen(true)}
              >
                <Text
                  style={[
                    styles.selectText,
                    form.categoryTitle === "Select category" &&
                      styles.placeholder,
                  ]}
                >
                  {form.categoryTitle}
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={20}
                  color={colors.grey}
                />
              </Pressable>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, styles.description]}
                placeholder="Describe your product"
                placeholderTextColor={colors.grey}
                multiline
                textAlignVertical="top"
                value={form.description}
                onChangeText={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    description: value,
                  }))
                }
              />
            </View>
          </View>

          <View style={styles.submit}>
            <Button
              label="Create listing"
              onPress={handleCreateListing}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={categoryOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setCategoryOpen(false)}
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setCategoryOpen(false)}
        >
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Select category</Text>

            {categoryOptions.map((category) => (
              <Pressable
                key={category.title}
                style={styles.categoryOption}
                onPress={() => {
                  setForm((previous) => ({
                    ...previous,
                    categoryTitle: category.title,
                  }));
                  setCategoryOpen(false);
                }}
              >
                <Text style={styles.categoryText}>{category.title}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  flex: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: colors.black,
  },
  photoRow: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "flex-start",
  },
  addBox: {
    width: 74,
    height: 74,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  photoWrap: {
    width: 74,
    height: 74,
  },
  photo: {
    width: 74,
    height: 74,
    borderRadius: 18,
    backgroundColor: colors.line,
  },
  remove: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsTitle: {
    marginTop: 18,
  },
  form: {
    marginTop: 12,
    gap: 12,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.black,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.black,
  },
  description: {
    height: 110,
  },
  select: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectText: {
    fontSize: 14,
    color: colors.black,
  },
  placeholder: {
    color: colors.grey,
  },
  submit: {
    marginTop: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 24,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.black,
    marginBottom: 12,
  },
  categoryOption: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  categoryText: {
    fontSize: 14,
    color: colors.black,
  },
});
