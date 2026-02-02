import { Text, View } from "react-native";
import { useRouter } from "expo-router"
import { Image } from "expo-image";
import Button from "@/components/Button"
import { styles } from "@/styles/splash";

const SplashImage = require("@/assets/images/splash-image.png")

export default function Splash() {
    const router = useRouter()
    return (
        <View style={styles.container} >
            <Image source={SplashImage} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button label="Sign Up" onPress={ () => router.navigate("/signup")}/>
            <Button theme="secondary" label="Sign In" onPress={ () => alert("Sign in will come soon!")}/>

        </View>
    );
}