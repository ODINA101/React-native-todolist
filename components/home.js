import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import { Font, AppLoading } from "expo";
import { StyleSheet,View} from 'react-native';
import { Container, Header,Item,Text ,Input, Icon, Button, Content,List,ListItem} from 'native-base';
import Ripple from 'react-native-material-ripple';


export default class Home extends Component {
  static navigationOptions = {
    // headerStyle: {backgroundColor:"#2c3e50"}
    header: ( /* Your custom header */
    <Header />
    )
  };
constructor() {
  super();
 
this.state = {
  todos: [
    {name:"Aaron Bennet"},
    {name:"Ali Connors"}
     
  ],
  loading: true,
  input:""
}
this.addTodo = this.addTodo.bind(this);


}

async componentWillMount() {
  await Expo.Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
  });


  this.setState({ loading: false });
}

addTodo()  {
console.log(this.state.todos)
var stateChange = this.state.todos;

stateChange.push({name:this.state.input})
this.setState(stateChange.reverse())
this.setState({input: ""})
}

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
      <Content>
        <View style={{flex:1,flexDirection:"row"}}>
      <Input onChangeText={(text) => this.setState({input: text})} placeholder="new todo"   /> 
      
      <Button onPress={this.addTodo} success>
      <Text>Add</Text>
      </Button>
</View>


        <List>
          <ListItem itemDivider>
          </ListItem>      

          {
            this.state.todos.map((data)=> {
             return ( 
              <Ripple rippleColor="red"
              onPress={() =>
                navigate('full', { name: data.name })
              } >
             <ListItem >
              <Text>{data.name}</Text>
            </ListItem>
            </Ripple>
            )
            })
          }              
         
         
          
        </List>
      </Content>
      <ActionButton buttonColor="rgba(231,76,60,1)"  >
 </ActionButton>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});