import { Text, View } from "react-native";
import { SnackbarContainer } from "../src/snackbar-container";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <SnackbarContainer />
    </View>
  );
}
