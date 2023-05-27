import { StyleSheet } from 'react-native';

const cgiRed = '#E31937';
const cgiHeader = '#200A58';
const cgiSubmit = '#5236AB';
const transparency = 'rgba(255, 255, 255, 0.8)';

const styles = StyleSheet.create({
  twoColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twoColumnsHeight: {
    height: 250,
  },
  twoColumnItem: {
    flexDirection: 'column',
    width: '48%',
    justifyContent: 'flex-start',
  },
  threeColumns: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  widthTwoThirds: {
    width: '66%',
  },
  widthThird: {
    width: '33%',
  },
  inputWrapper: {
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    margin: 5,
  },
  placeInputWrapper: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    margin: 10,
  },
  noInputWrapper: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    margin: 10,
  },
  textSize: {
    fontSize: 16
  },
  oneColumnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    margin: 10,
  },
  specifyWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 5,
  },
  placeInput: {
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  signInput: {
    padding: 30,
    paddingHorizontal: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  passwordInput: {
    width: '30%',
    fontSize: 22,
    padding: 15,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  inputRow: {
    width: '98%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingTop: 5,
  },
  header: {
    marginTop: 25,
    color: cgiHeader,
    fontWeight: 'bold',
    fontSize: 24,
  },
  subHeader: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 15,
    fontSize: 20,
  },
  scrollHeader: {
    color: cgiHeader,
    fontWeight: 'bold',
    fontSize: 24,
  },
  scrollHeight: {
    flexGrow: 1,
    flexBasis: 112,
    paddingTop: 25,
    marginBottom: 20,
  },
  scrollInner: {
  },
  row: { //overwitte SelectMultiple rowStyle
    backgroundColor: 'transparent',
    padding: 8,
  },
  selectMultiple: { //overwitte SelectMultiple style
    flexGrow: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
  justify: {
    textAlign: 'justify',
  },
  signButton: {
    borderColor: cgiSubmit,
    borderWidth: 5,
    padding: 15,
  },
  signButtonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: cgiSubmit,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  signModal: {
    border:"1px solid red",
    height: 100,
    width: 50,
    overflow: "hidden",
    position: 'absolute',
    top: 20,
    left: 100
  },
  modalContainer: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    width: '80%',
    height: '50%',
    backgroundColor: transparency,
    borderRadius: 25,
    zIndex: 10,
  },
  modalWiteWithMargin: {
    backgroundColor: 'white',
    padding: 20,
    textAlign: 'center',
    color: 'red'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  modalTextTransparent: {
    color: 'transparent',
    fontSize: 24,
    marginBottom: 20,
  },
  closeModalX: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
  closeModalXText: {
    color: cgiRed,
    fontSize: 24,
    fontWeight: '800',
  },
  closeModalButton: {
    backgroundColor: cgiSubmit,
    marginTop: 100,
    borderRadius: 25,
  },
  closeModalButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  warningText: {
    position: 'absolute',
    top: 0,
    right: 8,
    color: cgiRed,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    margin: 50,
    backgroundColor: 'red',
  }
});

export default styles;