
import { View, Text, Pressable, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  style?: ViewStyle;
};

export function ListItem({
  title,
  subtitle,
  icon,
  rightIcon = "chevron-forward",
  onPress,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={[styles.container, style]}
    >
      <View style={styles.left}>
        {icon && (
          <Ionicons name={icon} size={18} color={colors.grey} />
        )}
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>

      <View style={styles.right}>
        {rightIcon && (
          <Ionicons name={rightIcon} size={18} color={colors.grey} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
  },
  left: {
    width: 28,
    alignItems: "flex-start",
  },
  center: {
    flex: 1,
  },
  right: {
    width: 28,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.black,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
    color: colors.grey,
  },
});
