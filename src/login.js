import React, { useState, useEffect, useRef, forwardRef } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView, Platform } from 'react-native'

import { COMMON_STYLE, APP_COLOR, HEIGHT, WIDTH } from "./commonStyle";

const IMGS={"logo":""}
const SignInScreen = ({navigation}) => {
   // const { signIn } = React.useContext(AuthContext);
   // const netInfo = useNetInfo();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const usrRef = useRef(null);
    const pwdRef = useRef();

useEffect(()=>{},[])

    const Authentication = () => {

        if (username && password) {
            if(username && password){
                //signIn({ username, password });
            setPassword('');
            setUsername('');
            //usrRef.current.focus(); 
            }
            else{
                alert('No internet connection or weak network connection!')
            }
                  

        }
        else {

            alert('Username and Password required to check authentication of user');
            usrRef.current.focus();
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={COMMON_STYLE.container}>
                <TouchableOpacity style={{alignItems:'center',alignSelf:'center', height:50,width:100,backgroundColor:'teal'}} onPress={()=>{navigation.navigate('Home')}}>
                    <Text style={{color:'#eeeeee',alignSelf:'center',textAlign:'center'}}>HOME</Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 30, height: HEIGHT * 25 / 100, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backfaceVisibility: 'hidden' }}>
                    <Image source={IMGS.logo1} style={{ borderRadius: 5 }}></Image>
                    <View>
                        <Text style={{ fontSize: 24, color: APP_COLOR.red, fontWeight: '800', textAlignVertical: 'center', textShadowColor: APP_COLOR.yellow, letterSpacing: 3, shadowColor: APP_COLOR.yellow, shadowOpacity: 1 }}>{'MPRDC- RAMS'}</Text>
                        <Text style={{ fontSize: 24, color: APP_COLOR.teal, fontWeight: '500', alignSelf: 'center', textAlignVertical: 'center', textShadowColor: APP_COLOR.yellow }}>{'Login'}</Text>
                    </View>

                </View>
                <View style={{ borderTopLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: APP_COLOR.bluelight, paddingTop: 20, paddingBottom: 20, marginLeft: 5, marginRight: 5, justifyContent: 'center' ,width:Platform.OS=="web"?575: WIDTH * 80 / 100,alignSelf:'center'}}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: -60, flexDirection: 'row', marginLeft: 30, marginRight: 30, borderRadius: 60, backgroundColor: APP_COLOR.bgcolor, width:Platform.OS=="web"?80: WIDTH * 20 / 100, height: 70 }}>
                        <Text>User Login</Text>
                       
                    </View>


                    <Text label={'Username'} style={{ color: APP_COLOR.contrastText, fontWeight: 'bold' }} />
                    <TextInput style={username ? [COMMON_STYLE.txtInput, { marginBottom: 10, marginTop: 2, borderRadius: 20, paddingLeft: 10 }] : [COMMON_STYLE.txtInput, COMMON_STYLE.inputRequired, { marginBottom: 10, marginTop: 2, borderRadius: 20, paddingLeft: 10 }]}
                        value={username}
                        placeholder="Username" ref={usrRef}
                        returnKeyType="next"
                        onSubmitEditing={() => { pwdRef.current.focus(); }}
                        blurOnSubmit={true}
                        onChangeText={(txt) => setUsername(txt)}

                    />
                    <Text label={'Password'} style={{ color: APP_COLOR.contrastText, fontWeight: 'bold' }} />
                    <TextInput style={password ? [COMMON_STYLE.txtInput, { marginBottom: 10, marginTop: 2, borderRadius: 20, paddingLeft: 10 }] : [COMMON_STYLE.txtInput, COMMON_STYLE.inputRequired, { marginBottom: 10, marginTop: 2, borderRadius: 20, paddingLeft: 10 }]}
                        value={password}
                        placeholder="Password" ref={pwdRef}
                        onSubmitEditing={() => { Authentication() }}
                        blurOnSubmit={true}
                        onChangeText={(txt) => setPassword(txt)}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={[COMMON_STYLE.btn2, { marginTop: 30 }]} onPress={() => Authentication()}>
                        <Text style={[COMMON_STYLE.txtnew, { color: APP_COLOR.white, fontSize: 16, fontWeight: 'bold' }]} label={'Sign In'}/>
                    </TouchableOpacity>
                </View>
                <View style={COMMON_STYLE.bottomcontainer}>

                </View>

            </View>
        </KeyboardAvoidingView>
    )

}

export default SignInScreen;