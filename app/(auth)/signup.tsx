
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import AuthHeader from "@/components/AuthHeader";
import { styles } from "@/styles/signup";
import { useRouter } from "expo-router";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Separator from "@/components/Separator";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  function handleSignUp() {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert("Please fill in all fields");
      return;
    }

    if (!checked) {
      Alert.alert("Please accept the terms and privacy policy");
      return;
    }

    router.navigate("/(tabs)/home");
  }

  return (
    <View style={styles.container}>
      <AuthHeader
        label="Sign up"
        onBackPress={() => router.navigate("/(auth)/splash")}
      />

      <Input
        label="Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />

      <Input
        label="E-mail"
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        label="Password"
        placeholder="**********"
        value={password}
        onChangeText={setPassword}
        secure
      />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onChange={setChecked} />

        <Text style={styles.agreeText}>
          I agree with{" "}
          <Text style={[styles.agreeText, styles.agreeTextBold]}>
            Terms
          </Text>
          {" & "}
          <Text style={[styles.agreeText, styles.agreeTextBold]}>
            Privacy
          </Text>
        </Text>
      </View>

      <Button
        label="Sign Up"
        style={styles.submitButton}
        onPress={handleSignUp}
      />

      <Separator />

      <Text style={styles.footerText}>
        Already have an account?
        <Text
          style={styles.footerLink}
          onPress={() => router.navigate("/signin")}
        >
          {" "}Sign in
        </Text>
      </Text>
    </View>
  );
}
