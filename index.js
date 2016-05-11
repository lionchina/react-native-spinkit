import React, {PropTypes} from 'react'
import ReactNative from 'react-native'

var {
	requireNativeComponent,
	View
} = ReactNative;

var RNSpinkit = null;

class Spinkit extends React.Component {

	static propTypes = {
		type: React.PropTypes.string,
		color: React.PropTypes.string,
		size: React.PropTypes.number,
		isVisible: React.PropTypes.bool,
		testID:React.PropTypes.string,
		accessibilityComponentType:PropTypes.string,
		accessibilityLabel:PropTypes.string,
		accessibilityLiveRegion:PropTypes.string,
		renderToHardwareTextureAndroid:PropTypes.bool,
		importantForAccessibility:PropTypes.string,
		onLayout:PropTypes.bool,
	};

	static defaultProps = {
		size: 37,
		color: "#000000",
		isVisible: true
	};

	render() {
		var size = {height: this.props.size, width: this.props.size};

		if (!this.props.isVisible) return <View/>;
		return (
			<RNSpinkit
				type={this.props.type}
				size={this.props.size}
				color={this.props.color}
				style={[size, this.props.style]}/>
		);
	}

}

// Native component
RNSpinkit = requireNativeComponent('RNSpinkit', Spinkit);

module.exports = Spinkit;
