import { useState } from "react"
import { View, Text } from "react-native"
import AuthHeader from "@/components/AuthHeader"
import { styles } from "@/styles/signup"
import { useRouter } from "expo-router"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Separator from "@/components/Separator"

export default function Signin() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <AuthHeader label="Sign in" onBackPress={ () => router.navigate("/(auth)/splash")} />
            <Input label="E-mail" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="**********" secure />
            <Button label="Sign in" style={styles.submitButton} onPress={ () => alert("Congratulations on signing in!")} />
            <Separator />
            <Text style={styles.footerText}>Don&apos;t have an account?
                <Text style={styles.footerLink} onPress={ () => router.navigate("/signup")}> Sign up</Text>
            </Text>
        </View>
    )
}