import { View } from "react-native"
import AuthHeader from "@/components/AuthHeader" 
import { styles } from "@/styles/signup"
import { useRouter } from "expo-router"
import Input from "@/components/Input"

export default function Signup() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <AuthHeader label="Sign up" onBackPress={ () => router.back()}/>
            <Input label="Name" placeholder="John Doe"/>
            <Input label="E-mail" placeholder="example@gmail.com"/>
            <Input label="Password" placeholder="**********" secure/>
        </View>
    )
}