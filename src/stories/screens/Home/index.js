import * as React from "react";
import {
  View,
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  TouchableOpacity
} from "native-base";

import styles from "./styles";
import SliderExample from "./slider";
import { setGallons, setPh, setChlorine } from "./actions";



export interface Props {
  navigation: any;
  list: any;
  slider: any;
}
export interface State { }
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
              >
                <SliderExample
                  value={{ value: 5 }}
                  maximumValue={40000} 
                />
                <Text>{item}</Text>
              </ListItem>
            ))}
            <Button><Text>Save Log</Text></Button>
          </List>
        </Content>
      </Container>
    );
  }




}

export default Home;
