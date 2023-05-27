import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraComponent from './camera/CameraComponent';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraComponent />
      <StatusBar style="auto" />
    </View>
  );
}