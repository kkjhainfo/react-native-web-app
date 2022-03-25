import {StyleSheet,Dimensions} from'react-native';

export const HEIGHT=Dimensions.get('screen').height
export const WIDTH=Dimensions.get('screen').width
const H=Dimensions.get('screen').height
const W=Dimensions.get('screen').width


export const APP_COLOR={
    "trans":"transparent",
    "bgcolor":"#ccddff",
    "bgcolor1":"#dddfff",
    "bgcolorgrey":"grey",
    "color":"#ffffff",
    "color1":"#dddfff",
    "colorgrey":"grey",
    "blue":"#2196f3",
    "navyblue":"#3f50b5",
    "bluelight":"#757ce8",
    "bluedark":"#002884",
    "bluegrey":"#607d8b",
    "grey":"#cfd8dc",
    "lightgrey":"#78909c",
    "darkgrey":"#455a64",
    "replyblue":"#344955",
    "replyblue1":"#232F34",
    "replyblue2":"#4A6572",
    "bluecontrastText": '#fff',
    "contrastText":"#ffffff",
    "white":"white",
    "red":"red",
    "green":"green",
    "purple":"purple",
    "canpurple":"#5D1049",
    "yellow":"yellow",
    "teal":'teal',
    "orange":"#E54304",
    "orange2":"#EE6002",
    "orange3":"#F47100"
}
export const COMMON_STYLE=StyleSheet.create({
    //View Containers
    container:{backgroundColor:APP_COLOR.bgcolor,height:H-72},

    container2:{backgroundColor:APP_COLOR.bgcolor,height:H-124},

    bottomcontainer:{backgroundColor:APP_COLOR.lightgrey,
        color:APP_COLOR.contrastText, position:'absolute',
        bottom:1,height:50,justifyContent:'center',width:W},
        bottomcontainer2:{backgroundColor:APP_COLOR.lightgrey,
            color:APP_COLOR.contrastText, position:'absolute',
            bottom:0,height:50,justifyContent:'center',width:W},
            //Text
    txtnew:{fontSize:16,color:APP_COLOR.replyblue,backgroundColor:APP_COLOR.trans,
        paddingLeft:15,letterSpacing:1},
        //Buttons
    btn1:{justifyContent:'center',alignContent:'center',
    alignItems:'center', height:40,margin:10, fontSize:14,
    fontStyle:'Roboto-Regular',color:APP_COLOR.bluecontrastText,
    backgroundColor:APP_COLOR.blue,borderRadius:15},

    btn2:{justifyContent:'center',alignContent:'center',
    alignItems:'center', height:45,margin:10, fontSize:14,
    fontStyle:'Roboto-Regular',color:APP_COLOR.bluecontrastText,
    backgroundColor:APP_COLOR.orange2,borderRadius:20},
    
    btnblue:{justifyContent:'center',alignContent:'center',
    alignItems:'center', height:45,margin:10, fontSize:14,
    fontStyle:'Roboto-Regular',color:APP_COLOR.bluecontrastText,
    backgroundColor:APP_COLOR.blue,borderRadius:20},
    //Text Input
    txtInput:{height:40,borderRadius:5,backgroundColor:APP_COLOR.bluecontrastText,
        marginLeft:10,marginRight:10},
        inputRequired:{borderColor:APP_COLOR.red,borderWidth:1},
   
    txt:{fontSize:16,color:APP_COLOR.replyblue,backgroundColor:APP_COLOR.trans,
        paddingLeft:15,letterSpacing:1},
    //Picker
   
    pickerView:{height:50,borderRadius:5, alignContent:'center', 
    backgroundColor:APP_COLOR.white,margin:10},

    picker:{height:40,paddingTop:0,justifyContent:'center',
    backgroundColor:APP_COLOR.trans},
    
    //Float TextInput Styles
    floatInputContainer:{width:'100%',borderRadius:3,borderWidth:0,height:60,marginVertical:4},

    titleStyle:{position:'absolute',fontFamily:'Roboto-Regular',paddingLeft:10},

    txtFloatInput:{borderRadius:5,backgroundColor:APP_COLOR.bluecontrastText,marginTop:15,
         marginLeft:10,marginRight:10},

    //Spiner Modal
    activitymodalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 80,
        width: 80,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }
})
