import { View, Text, Pressable } from "react-native"
import { Image } from "expo-image"
import { styles } from "@/styles/auth_header";

const AuthBackImage = require("@/assets/images/auth_back.png")

type Props = {
    label: string;
    onBackPress?: () => void;
}

export default function AuthHeader ({ label, onBackPress }: Props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress}>
                <Image style={styles.image} source={AuthBackImage} />
            </Pressable>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

