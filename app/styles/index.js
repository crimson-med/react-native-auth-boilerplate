import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    splash: {
      flex: 1,
      backgroundColor: "#ff6659",
    },
    column:{
        display: "flex",
        flexDirection: "column",
    },
    colcenter:{
        alignItems: "center",
        justifyContent: "center",
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  loginScreenButton:{
       paddingTop:10,
       paddingBottom:10,
       backgroundColor:'#fff',
       borderRadius:10,
       borderWidth: 1,
       borderColor: '#fff'
  },
  loginText:{
     color:'#ff6659',
     fontSize:18,
     fontWeight: "bold",
     textAlign:'center',
     paddingLeft : 10,
     paddingRight : 10
  }
})
