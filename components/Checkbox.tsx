import { useState } from "react"
import { Text, View, Pressable } from "react-native"
import { Image } from "expo-image"
import { styles } from "@/styles/checkbox"

const CheckedImage = require("@/assets/images/check.png")

type Props = {
    checked: boolean
    onChange: (next: boolean) => void
}

export default function Checkbox({ checked, onChange } : Props) {

    return (
        <Pressable onPress={() => onChange(!checked)} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
            <View style={[styles.checkbox, checked && styles.checked]}>
                { checked ? (
                    <Image source={CheckedImage} style={styles.icon} />
                ) : null}
            </View>
        </Pressable>
    )
}