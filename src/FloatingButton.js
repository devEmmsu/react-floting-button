import React ,{Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class FloatingButton extends Component{

    constructor(props){
        super(props) ;
        this.state ={
            animation: new Animated.Value(0),
            actions:[],
            isLinked:false
        }
       
    }
    componentDidMount(){
        this.setState({actions:this.props.actions}) 
        if(this.props.navigation !==undefined){
            this.setState({isLinked:true}) 
        }
    }

    navigate(link){
        if(link !==undefined && this.state.isLinked){
            return this.props.navigation.navigate(link) ;
            
        }
    }
    
    toggleOpen = () =>{
        const toValue = this._open ? 0 : 1 ;
        Animated.timing(this.state.animation,{
          toValue,
          duration:200
        }).start() ;
    
        this._open = !this._open ;
    }

    animatedStyle(position){
        return {
            transform: [{
                scale:this.state.animation
              },{
                translateY:this.state.animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-90*position],
                  extrapolate:"clamp"
                })
            }]
        }
    }

    render(){
        const {actions} = this.state ;
        const {text,title,AnimatedbackgroundColor,backgroundColor} =this.props ;

        // over background animated color
        const bgAnimatedColor = {
            backgroundColor: AnimatedbackgroundColor,
        }

        const bgStyle = {
            transform:[{
              scale:this.state.animation.interpolate({
                inputRange:[0,1],
                outputRange:[0,30]
              })
            }]
        }
        
        const labelPositionInterpolate = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:[-30,-90]
        })
        const opacityInterpolate = this.state.animation.interpolate({
            inputRange:[0,.8,1],
            outputRange:[0,0,1]
        })
        const labelStyle = {
            opacity:opacityInterpolate,
            transform:[{
              translateX:labelPositionInterpolate
            }]
        }

        // button fixed background 
        const pay ={
            backgroundColor:backgroundColor,
        
        }

        return (
            <View>
                <Animated.View style={[styles.background,bgStyle,bgAnimatedColor]}  />
                {actions.map((action,i)=>{ 
                    return (<TouchableWithoutFeedback key={i} onPress={()=>this.navigate(action.link)}>
                        <Animated.View style={[styles.button,styles.other,this.animatedStyle(action.position)]}>
                            <Animated.Text 
                                style={[styles.label,labelStyle]}
                            >
                                    {action.text}
                            </Animated.Text>
                            <Icon 
                                name={action.icon} 
                                size={action.size ? action.size:20} 
                                color={action.color?action.color:'#555'} 
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>)
                })}
                
                <TouchableWithoutFeedback 
                onPress={this.toggleOpen}
                >
                <View style={[styles.button,pay]}>
                    <Animated.Text style={[styles.label,labelStyle]}>{title}</Animated.Text>
                    <Text style={styles.payText}>{text}</Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
    background:{
      position:"absolute",
      height:80,
      width:80,
      bottom:20,
      right:20,
      borderRadius:45
    },
    button:{
      width:80,
      height:80,
      alignItems:"center",
      justifyContent:"center",
      shadowColor:'#333',
      shadowOpacity:.1,
      shadowOffset:{x:2,y:0},
      shadowRadius:2,
      borderRadius:45,
      position:'absolute',
      bottom:20,
      right:20
    },
    other:{
      backgroundColor:'#FFF',
    },
    payText:{
      color:'#FFF'
    },
    label:{
      color:'#FFF',
      position:'absolute',
      fontSize:18,
      backgroundColor:"transparent"
    }
});

FloatingButton.propTypes ={
    actions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.any.isRequired,
          link:PropTypes.string,
          size:PropTypes.number,
          color: PropTypes.string,
          position:PropTypes.number.isRequired,
        })
    ),
    text:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    navigation:PropTypes.object
}

FloatingButton.defaultProps ={
    backgroundColor:'#00B15E', // background button 
    color:'#FFF', // text color button 
    AnimatedbackgroundColor :"transparent", // over animated  background
    actions:[] 
}

  
export default FloatingButton ;