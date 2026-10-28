
import { ActivityIndicator, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const AUTH_REQUIRED = false;

export function AuthGate() {
  const { token, isRestoring } = useAuth();

  if (!AUTH_REQUIRED) {
    return <Redirect href="/(auth)/splash" />;
  }

  if (isRestoring) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return token ? (
    <Redirect href="/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/signin" />
  );
}
