import { useState } from "react";
import { View, Text, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import AuthHeader from "@/components/AuthHeader";
import { styles } from "@/styles/signup";
import { useRouter } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Separator from "@/components/Separator";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email.trim() || !password) {
      Alert.alert("Please fill in all fields");
      return;
    }
    Keyboard.dismiss();
    router.navigate("/(tabs)/home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <AuthHeader label="Sign in" onBackPress={() => router.back()} />
        <Input label="E-mail" placeholder="example@gmail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" placeholder="**********" value={password} onChangeText={setPassword} secure />
        <Button label="Sign in" style={styles.submitButton} onPress={handleSignIn} />
        <Separator />
        <Text style={styles.footerText}>
          Don&apos;t have an account?
          <Text style={styles.footerLink} onPress={() => router.navigate("/signup")}> Sign up</Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
