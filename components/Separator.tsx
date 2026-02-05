import { styles } from "@/styles/separator";
import { View, Text } from "react-native"

type Props = {
    text?: string
}

export default function Separator ({ text } : Props) {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
}