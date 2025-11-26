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

  const goToCustomDefaultImplementation = () =>
    router.push("/custom-default-implementation");

  return (
    <ScrollView style={styles.container}>
      <Button
        title="Default message implementation"
        onPress={goToDefaultMesssageImpementation}
      />
      <Button
        title="Customize the default implementation"
        onPress={goToCustomDefaultImplementation}
      />
      <Button
        title="Custom message implementation"
        onPress={goToCustomMesssageImpementation}
      />
    </ScrollView>
  );
}
