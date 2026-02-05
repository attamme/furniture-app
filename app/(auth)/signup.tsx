import { useState } from "react"
import { View, Text } from "react-native"
import AuthHeader from "@/components/AuthHeader" 
import { styles } from "@/styles/signup"
import { useRouter } from "expo-router"
import Input from "@/components/Input"
import Checkbox from "@/components/Checkbox"
import Button from "@/components/Button"
import Separator from "@/components/Separator"

export default function Signup() {
    const router = useRouter()
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader label="Sign up" onBackPress={ () => router.back()}/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="E-mail" placeholder="example@gmail.com"/>
            <Input label="Password" placeholder="**********" secure/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onChange={setChecked}/>
                <Text style={styles.agreeText}>
                    I agree with 
                    <Text style={[styles.agreeText, styles.agreeTextBold]}>Terms </Text>
                    & 
                    <Text style={[styles.agreeText, styles.agreeTextBold]}>Privacy</Text>
                </Text>
            </View>
            <Button label="Sign Up" style={styles.submitButton} onPress={ () => alert("Congratulations on signing up!")}/>
            <Separator text="Or sign up with"/>
            
        </View>
    )
}