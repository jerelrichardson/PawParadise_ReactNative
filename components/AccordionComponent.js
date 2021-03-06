import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Icon } from 'react-native-elements';


export default class Accordion extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          name: props.name,
          email: props.email,
          location: props.location,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordion} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon
                    name={this.state.expanded ? 'arrow-up' : 'arrow-down'}
                    type='simple-line-icon'
                    color='#f50'
                    size={15}
                    // raised
                    // reverse
                    // onPress={() => props.favorite ? console.log('Already set as a favorite') : props.markFavorite()}
                />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                    <Text>{this.props.name}</Text> 
                    <Text>{this.props.email}</Text>
                    <Text>{this.props.phone}</Text>     
                    <Text>{this.props.location}</Text> 
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#5637DD',
        // color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor:'#C1DBE3', 
        color: 'white',
        // backgroundColor:'#808080', // DarkGrey
        // backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:1,
        // color: Colors.WHITE,
        color: '#fff',
        width:'100%'
    },
    child:{
        // backgroundColor: Colors.LIGHTGRAY,
        backgroundColor: '#eeecfb', 
        padding:16,
    }
    
});
