import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';

export default function CameraComponent() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.cameraContainer}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function takePicture() {
    //Camera.takePictureAsync({});
  }

  return (
    <View style={styles.cameraContainer}>
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>Flip Camera</Text>
          </View>
        </Camera>
      </TouchableOpacity>
    </View>
  );
}
