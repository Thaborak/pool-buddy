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
import { setGallons, setPh, setChlorine } from "../../../container/HomeContainer/actions";



export interface Props {
  navigation: any;
  list: any;
}
export interface State { }
class Home extends React.Component<Props, State> {
// 		this.props.setChlorine();
// this.props.setGallons();
// this.props.setPh();
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
                  value={{value: item.ideal}}
                  maximumValue={item.max}
                  // onChange={setChlorine(this.value)}
                />
                <Text>{item.name}</Text>
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
