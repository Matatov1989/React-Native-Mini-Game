import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.instractionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instractionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
