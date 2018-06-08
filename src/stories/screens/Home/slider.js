import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { setGallons, setPh, setChlorine } from "../../../container/HomeContainer/actions";


class SliderExample extends React.Component {

    // componentDidUpdate(){
    //     {this.function}(this.state.value);

    // }

    state = this.props.value
    max = this.props.maximumValue
    min = this.props.minimumValue
    name = this.props.name
    step = this.props.step
    function = this.props.function



    render() {
        if (this.props.name === "Chlorine") {
            this.props.dispatch(setChlorine(this.state.value));
        }
        if (this.props.name === "Ph") {
            this.props.dispatch(setPh(this.state.value));
        }
        if (this.props.name === "Gallons") {
            this.props.dispatch(setGallons(this.state.value));
        }
        return (
            <View style={styles.container}>
                <Slider
                    name={this.name}
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                    // onValueChange={value => { this.function({ value })}}

                    maximumValue={this.max}
                    step={this.step}
                    // trackStyle={2}
                    // thumbStyle={2}

                />
                <Text>
                   {this.name}: {this.state.value}

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

const mapStateToProps = state => ({
    // value: state.value,
    chlorine: state.value,
    ph: state.value,
    gallons: state.value
});

export default connect(mapStateToProps)(SliderExample);

// AppRegistry.registerComponent("SliderExample", () => SliderExample);
