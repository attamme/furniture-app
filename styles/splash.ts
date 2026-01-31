import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: "100%",
        padding: 24,
        flexDirection: "column",
        borderWidth: 1
    },
    image: {
        width: "100%",
        height: 200,
        marginTop: 144
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: 700,
        textAlign: "center",
        lineHeight: 49.48
    },
    innerTitle: {
        color: "#FCA34D",
        textDecorationLine: "underline"
    }
})