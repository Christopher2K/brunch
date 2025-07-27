import { useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Index() {
  const router = useRouter();
  const goToDefaultMesssageImpementation = () => router.push("/default");

  const goToCustomMesssageImpementation = () => router.push("/custom");

  const goToiOSModal = () => router.push("/modal");
  return (
    <ScrollView style={styles.container}>
      <Button
        title="Default message implementation"
        onPress={goToDefaultMesssageImpementation}
      />
      <Button
        title="Custom message implementation"
        onPress={goToCustomMesssageImpementation}
      />
      <Button title="With iOS modal" onPress={goToiOSModal} />
    </ScrollView>
  );
}
