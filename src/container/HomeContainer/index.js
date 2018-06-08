// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";
import { fetchList, setGallons, setPh, setChlorine } from "./actions";
import { AsyncStorage } from "native-base";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
	setGallons: Function,
	setPh: Function,
	setChlorine: Funtion,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
	return <Home navigation={this.props.navigation} list={this.props.data}/>;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
		setGallons: value => dispatch(setGallons(value)),
		setPh: value => dispatch(setPh(value)),
		setChlorine: value => dispatch(setChlorine(value)),
	};
}

function saveLog() {
	let user = 'Tom';
	AsyncStorage.setItem('user', user)

}





const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
