import { StatusBar } from "expo-status-bar";
import { Button, Modal, StyleSheet, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import * as ImageManipulator from "expo-image-manipulator";
import ModalComponent from '../components/Modal';
import { styles } from "../styles";

export default function CameraComponent() {
  const [capturing, setCapturing] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>(null);
  const captureIntervalRef = useRef<NodeJS.Timer | null>(null);
  const [timeLapseDurationInSeconds, setTimeLapseDurationInSeconds] = useState(5);
  const [timeStepInSeconds, setTimeStepInSeconds ] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);

  if (!permission || !permission.granted) {
    requestPermission();
    return <View />;
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
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      console.log(result);
    }
  };

  const startCapture = () => {
    setCapturing(true);
    let counter = 0;
    captureIntervalRef.current = setInterval(() => {
      handleCapture();
      counter = counter + timeStepInSeconds;
      if (counter >= timeLapseDurationInSeconds) {
        stopCapture();
      }
    }, timeStepInSeconds * 1000);  
  };

  const stopCapture = () => {
    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      setCapturing(false);
    }
  };

  return (
    <View style={styles.container}>
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
        <Button
          title={"Open Settings"}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal 
        animationType="slide" transparent={true} visible={modalVisible} 
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <ModalComponent 
          setVisible={setModalVisible} visible={modalVisible}
          setTimeLapseDurationInSeconds={setTimeLapseDurationInSeconds}
          setTimeStepInSeconds={setTimeStepInSeconds}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}
