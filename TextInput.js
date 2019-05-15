import React, { Component } from "react";
import { TextInput as ComponentTextInput } from "react-native";

export default class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}
	onFocus = () => {
		const { onFocus } = this.props;
		onFocus && onFocus();
	};
	onBlur = () => {
		const { onBlur } = this.props;
		onBlur && onBlur();
	};
	render() {
		const { props } = this;

		return (
			<ComponentTextInput
				underlineColorAndroid={"transparent"}
				autoCorrect={false}
				editable={this.props.isActive}
				onFocus={this.onFocus.bind(this)}
				onBlur={this.onBlur.bind(this)}
				{...props}
				ref={(input) => props.inputRef && props.inputRef(input)}
                blurOnSubmit={props.isLast ? true : false}
                
			/>
		);
	}
}
