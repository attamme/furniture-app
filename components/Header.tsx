
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

type Props = {
  title: string;
  leftAction?: "back" | "search" | "none";
  rightAction?: "logout" | "none";
  onLeftPress?: () => void;
  onRightPress?: () => void;
  enableSearch?: boolean;
  keyword?: string;
  onKeywordChange?: (value: string) => void;
};

export function Header({
  title,
  leftAction = "none",
  rightAction = "none",
  onLeftPress,
  onRightPress,
  enableSearch = false,
  keyword = "",
  onKeywordChange,
}: Props) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const leftIconName =
    leftAction === "back"
      ? "chevron-back"
      : leftAction === "search"
        ? "search"
        : null;

  const rightIconName =
    rightAction === "logout" ? "log-out-outline" : null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.side}>
          {leftIconName && (
            <Pressable
              hitSlop={10}
              onPress={() => {
                if (leftAction === "search" && enableSearch) {
                  setShowSearchInput(!showSearchInput);
                } else {
                  onLeftPress?.();
                }
              }}
            >
              <Ionicons name={leftIconName} size={22} color={colors.black} />
            </Pressable>
          )}
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.side}>
          {rightIconName && (
            <Pressable hitSlop={10} onPress={onRightPress}>
              <Ionicons name={rightIconName} size={22} color={colors.black} />
            </Pressable>
          )}
        </View>
      </View>

      {enableSearch && showSearchInput && (
        <View style={styles.searchRow}>
          <Ionicons name="search" size={18} color={colors.grey} />
          <TextInput
            value={keyword}
            onChangeText={onKeywordChange}
            placeholder="Search..."
            placeholderTextColor={colors.grey}
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  side: {
    width: 32,
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
    paddingHorizontal: 12,
  },
  searchRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
  },
});
