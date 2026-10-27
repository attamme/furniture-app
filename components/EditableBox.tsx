
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

type Props = {
  label: string;
  value: string;
  editing: boolean;
  onChangeText?: (value: string) => void;
};

export function EditableBox({
  label,
  value,
  editing,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {editing ? (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholderTextColor={colors.grey}
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 16,
    padding: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.grey,
  },
  value: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "800",
    color: colors.black,
  },
  input: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "800",
    color: colors.black,
    padding: 0,
  },
});
