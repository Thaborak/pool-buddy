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
import { connect } from "react-redux";



// export interface Props {
//   navigation: any;
//   list: any;
// }
// export interface State { }
class Home extends React.Component/*<Props, State>*/ {
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
          <Text>{this.props.gallons}</Text>
        </Content>
        {/* <Button><Text>Save Log{this.props}</Text></Button> */}

      </Container>

    );
  }




}


export default connect()(Home);
