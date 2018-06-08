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
  render() {
    // if ({props.item.name} === "Chlorine") {
    //   this.props.setChlorine();
    // }

    // this.props.setGallons();
    // this.props.setPh();
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
                  name={item.name}
                  value={{ value: item.ideal }}
                  maximumValue={item.max}
                  minimumValue={item.min}
                  onValueChange={item.function}
                  step={item.step}
                />
                {/* <Text>{item.name}</Text> */}
              </ListItem>
            ))}
          </List>
        </Content>
        <Button><Text>Save Log</Text></Button>

      </Container>

    );
  }




}



export default Home;
