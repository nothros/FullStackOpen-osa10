import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    //MAIN
    separator: {
      backgroundColor: '#f1f1f1',
      height: 10,
    },
    //APPBAR
    appbar: {
      paddingLeft: 12,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
    },

    // SIGNINFORM //
    formView: {
      flex: 0,
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 32,
      width: "80%",
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#0366d6',
    },
    // Repositorylist //
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 5
    },

    flexContainer: { //MAIN CONTAINER
      display: 'flex',
      padding: 12,
      paddingBottom: 20,
      flexDirection: 'column',
  
    },

    flexItemTop: { //UPPERROW
      flexDirection: 'row',
      flexGrow: 1,
    },
    flexItemTopDescriptions: {
      flexDirection: 'column',
      flexGrow: 1,
      paddingLeft: 12,
      width: '80%',
      textAlign: 'left',
      paddingBottom: 12,
      setText: {
        flexWrap: 'wrap',
        paddingBottom: 12,
      }
    },
    flexItemRateCont: {
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center"
    },
    flexItemDown: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    Headertext: {
      marginBottom: 5,
      fontWeight: 'bold',
      flexWrap: 'wrap',
      fontSize: 16,
      color: '#000',
    },
    descText: {
      fontSize: 14,
      color: '#616161',
    },
    rateText: {
      fontSize: 14,
      marginBottom: 5,
      fontWeight: 'bold',
      color: '#000',
    },
  
    tag: {
      backgroundColor: '#0366d6',
      padding: 4,
      alignSelf: 'flex-start',
      borderRadius: 4,
        color: "#fff",
        fontSize: 14,
      
  
    }
  });
  
export default styles;