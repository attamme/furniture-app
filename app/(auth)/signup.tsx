import { View } from "react-native"
import AuthHeader from "@/components/AuthHeader" 
import { styles } from "@/styles/signup"
import { useRouter } from "expo-router"

export default function Signup() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <AuthHeader label="Sign up" onBackPress={ () => router.back()}/>
        </View>
    )
}