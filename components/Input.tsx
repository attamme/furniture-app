import { styles } from "@/styles/input";
import { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";

const EyeImage = require("@/assets/images/eye.png");
const EyeClosedImage = require("@/assets/images/eye_closed.png");

type Props = {
    label: string;
    placeholder: string;
    value?: string;
    secure?: boolean;
}

export default function Input ({ label, placeholder, value, secure }: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const showEye= !!secure
    const secureTextEntry = secure ? !isPasswordVisible : false

    const eyeSource = useMemo(() => {
        if(!showEye) return null
        return isPasswordVisible ? EyeImage : EyeClosedImage
    }, [showEye, isPasswordVisible])
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={secureTextEntry} value={value} placeholder={placeholder} placeholderTextColor="#C5C5C5" style={styles.input} />
                { showEye && (
                        <Pressable onPress={() => setIsPasswordVisible((v) => !v)}>
                            <Image source={eyeSource} style={styles.eye}/>
                        </Pressable>
                )}
            </View>
        </View>
    )
}