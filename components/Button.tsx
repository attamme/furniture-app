import { styles } from "@/styles/button";
import { View, Text, Pressable } from "react-native";

type Props = {
    label: string;
    theme?: "secondary";
    onPress?: () => void;
}

export default function Button ({ label, theme, onPress }: Props) {
    if (theme === "secondary") {
        return (
            <View style={styles.container}>
                <Pressable style={[styles.button, { backgroundColor: 'transparent' }]} onPress={onPress}>
                    <Text style={[styles.label, { color: '#4F63AC' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </View>
    )
}