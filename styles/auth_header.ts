import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        marginBottom: 54

    },
    image: {
        width: 18,
        height: 18,
    },
    label: {
        color: colors.blue,
        fontSize: 26,
        fontWeight: "600",
        paddingHorizontal: 16
    }
})