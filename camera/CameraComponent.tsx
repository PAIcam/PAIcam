import { StatusBar } from "expo-status-bar";
import { Text , Button, Modal, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import * as ImageManipulator from "expo-image-manipulator";
import ModalComponent from '../components/Modal';
import { styles } from "../styles";
import { saveImage } from "../utils/saveImage";
import { Countdown } from "../components/Countdown";

export default function CameraComponent() {
  const [capturing, setCapturing] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>(null);
  const captureIntervalRef = useRef<NodeJS.Timer | null>(null);
  const [timeLapseDurationInSeconds, setTimeLapseDurationInSeconds] = useState(5);
  const [timeStepInSeconds, setTimeStepInSeconds ] = useState(1);
  const [remainingTime, setRemainingTime] = useState(0)
  
  const [modalVisible, setModalVisible] = useState(false);

  if (!permission || !permission.granted) {
    requestPermission();
    return <View />;
  }
  
  const poi = { x: 500, y: 500, width: 250, height: 250 };

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
     
      saveImage(result.uri);
      
    }
  };

  const startCapture = () => {
    setCapturing(true);
    let counter = 0;
    captureIntervalRef.current = setInterval(() => {
      handleCapture();
      // handleRemainingTime(remainingTime);
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
    // if(countdownIntervalRef.current){
    //   clearInterval(countdownIntervalRef.current);
    // }
  };

  // const handleRemainingTime = (time: number)=>{
  //   let countdown = time
  //   countdownIntervalRef.current = setInterval(()=>{
  //     setRemainingTime(countdown)
  //     countdown = countdown-1
  //   }, 1000)
    
  // }

  return (
    <View style={styles.container}>
      <Text >Duration: {timeLapseDurationInSeconds}s Timestep: {timeStepInSeconds}s</Text>
     {capturing && <Countdown time={remainingTime} capturing={capturing}/>}
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
          setRemainingTime={setRemainingTime}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}
