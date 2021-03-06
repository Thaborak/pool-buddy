import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
	onEnter: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="water" style={{ fontSize: 104 }} />
						<Title>Pool Buddy</Title>
						{/* <View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Build Something Amazing
							</Text>
						</View> */}
					</Body>
				</Header>
				<Content>
					{/* {this.props.loginForm} */}
					<View padder>
						{/* <Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button> */}
						<Button block onPress={() => this.props.onEnter()}>
							<Text>Begin</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Login;
