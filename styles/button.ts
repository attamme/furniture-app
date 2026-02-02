import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 60,
    marginHorizontal: 36,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    
  },
  button: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blue
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 700
  }
})