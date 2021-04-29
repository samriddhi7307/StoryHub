import React , {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground,Platform} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends Component {
    render(){
        return(
            <View style={{flex:1}}>
          <DrawerItems {...this.props} />
      
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
          <TouchableOpacity
            style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen');
              firebase.auth().signOut();
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
        </View>
        )
    }
}

var styles = StyleSheet.create({
    drawerItemsContainer: {
        flex: 0.8,
      },
      logOutContainer: {
        flex: 0.2,
        justifyContent: "flex-end",
        paddingBottom: 30,
      },
      logOutButton: {
        height: 30,
        width: "100%",
        justifyContent: "center",
        padding: 10,
      }
})