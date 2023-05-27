import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface modalProps {
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    modalVisible: boolean,
}

export default function ModalComponent(props: modalProps) {
    const setModalVisible = props.setModalVisible;
    const modalVisible = props.modalVisible;

  return <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Hello World!</Text>

      <TouchableOpacity
        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textStyle}>Hide Modal</Text>
      </TouchableOpacity>
    </View>
  </View>
};