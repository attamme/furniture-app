import { styles } from "@/styles/button";
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";

type Props = {
    label: string;
    theme?: "secondary";
    onPress?: () => void;
    style?: StyleProp<ViewStyle>
}

export default function Button ({ label, theme, onPress, style }: Props) {
    if (theme === "secondary") {
        return (
            <View style={styles.container}>
                <Pressable style={ [styles.button, { backgroundColor: 'transparent' }]} onPress={onPress}>
                    <Text style={[styles.label, { color: '#4F63AC' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.button, style]} onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </View>
    )
}