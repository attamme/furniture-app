import { Text, View } from "react-native";
import { Image } from "expo-image";
import Button from "@/components/Button"
import { styles  } from "@/styles/splash.styles";

const SplashImage = require("@/assets/images/splash-image.png")

export default function Splash() {
    return (
        <View style={styles.container} >
            <Image source={SplashImage} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button label="Sign Up" />
            <Button theme="secondary" label="Sign In" />

        </View>
    );
}