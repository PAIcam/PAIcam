import { StatusBar } from "expo-status-bar";
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import { styles } from '../styles';

export default function CameraComponent() {
  const [capturing, setCapturing] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>(null);
  const captureIntervalRef = useRef<NodeJS.Timer | null>(null);

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

  const poi = { x: 100, y: 100, width: 100, height: 100 };

  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      const result = await ImageManipulator.manipulateAsync(
        data.uri,
        [
          {
            crop: {
              originX: poi.x,
              originY: poi.y,
              width: poi.width,
              height: poi.height,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );

      console.log(result);
    }
  };

  const startCapture = () => {
    setCapturing(true);
    captureIntervalRef.current = setInterval(handleCapture, 1000);
  };

  const stopCapture = () => {
    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      setCapturing(false);
    }
  };

  return (
    <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        type={CameraType.back}
        ref={cameraRef}
      ></Camera>
      <View style={styles.button}>
        <Button
          title={capturing ? "Stop Capture" : "Start Capture"}
          onPress={capturing ? stopCapture : startCapture}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
