import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6
    },
    pressed: {
        opacity: 0.75
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.grey,
        alignItems: "center",
        justifyContent: "center"
    },
    checked: {
        borderColor: colors.blue
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    label: {
        marginLeft: 10,
        fontSize: 13,
        color: colors.black,
        fontWeight: 600
    }
})