import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

class SliderExample extends React.Component {
    
   state = this.props.value


    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                    maximumValue = {40000}

    />
                <Text>
                    Value: {this.state.value}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center",

    }
});

export default SliderExample;

AppRegistry.registerComponent("SliderExample", () => SliderExample);