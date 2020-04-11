### react-native-floatting-button
Floating  button for React Native

### Installation

``` yarn add react-native-floatting-button ```

Or

``` npm install react-native-floatting-button ```

### How to use it

**first step**: import the component:
``` import {FloatingButton} from "react-native-floatting-button"  ```
**Second step**: define the buttons
```
const actions = [
  {
    text: "Reload",
    icon: "reload",
    link: 'callback',
    size:20,
    color:'#555',
    position: 1,
  },
  {
    text: "Order",
    icon: "food-fork-drink",
    link: "foofScreen",
    size:20,
    color:'#555',
    position: 2
  },
]
```
**Third step**: use it
```
<FloatingButton
          actions={actions}
          text="$17.00"
          title="pay"
          navigation={navigation}
/>

```
### Example of how Expo looks

[![Example of how Expo looks](https://i.ibb.co/HBnn6My/result.gif "Example of how Expo looks")](https://i.ibb.co/HBnn6My/result.gif "Example of how Expo looks")

### EXemple
```
import {FloatingButton} from "react-native-floatting-button" ;
const actions = [
  {
    text: "Reload",
    icon: "reload",
    link: 'callback',
    size:20,
    color:'#555',
    position: 1,
  },
  {
    text: "Order",
    icon: "food-fork-drink",
    link: "foofScreen",
    size:20,
    color:'#555',
    position: 2
  },
]


export default class  App extends Component {
	constructor(props){
		super(props)
	}
  render(){
  const {navigation} = this.props ;
    return (
      <View style={styles.container}>

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>Ici button exemple</Text>
        </View>

        <FloatingButton
          actions={actions}
          text="$17.00"
          title="pay"
          navigation={navigation}
        />
      </View>
    ) ;
	}
	```
	
### Configuration
**FloatingButton**

|  Property | Type  | Default  |  Description |
| ------------ | ------------ | ------------ | ------------ |
|  actions | array  |  [] | Actions to be show once user press the main button  |
|color   |  string |  #FFF |Color of the main button|
| backgroundColor  |  string  | #00B15E  | background color  of the main button |
|  AnimatedbackgroundColor | string  | transparent  | background color of view animated  |
| text  |  string |   |  Title of main button is **Required** |
|  title |   string |   |   label of main button when is clicked is **Required**|
| navigation|object | | navigation props  is **Required** when you are linked button to another screen  |

**Actions**

|  Property | Type  | Default  |  Description |
| ------------ | ------------ | ------------ | ------------ |
| text  | string  |   |  Text to show near to the button.  |
|  icon |string   |   |  Icon to be rendered inside the action, we accept the name of icon refer to **'react-native-vector-icons/MaterialCommunityIcons' ** |
|  link |   string|   |  the screen name where you want to go once the button click (route name)  |
|  size | number  |   |  size of Icon  |
|  color |  string |   | Color of the Icon button|
| position | string |  | element positioning, at which position to display each button first, second or ..  |