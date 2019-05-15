/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	ScrollView
	// TextInput
} from "react-native";

import TextInput from "./TextInput";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleTitleInputSubmit = () => {
		this.setState({ focusDescriptionInput1: true });
	};

	onInputFocus = (up) => {
		setTimeout(() => {
			this.scrollView.scrollTo({ x: 0, y: up, animated: true });
		}, 200);
	};
	onInputBlur = () => {
		this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
	};
	render() {
		return (
			<ScrollView
				ref={(ref) => (this.scrollView = ref)}
				keyboardShouldPersistTaps={"handled"}
				style={styles.container}>
				{/* <TextInput
					autoFocus={true}
					underlineColorAndroid={"transparent"}
					style={styles.textInput}
					placeholder={"1"}
					returnKeyType={"next"}
					returnKeyLabel={"boro"}
          onSubmitEditing={() => {}}
          // ref={(input) => { this.firstTextInput = input; }}
          // onSubmitEditing={() => { this.secondTextInput.focus(); }}
    blurOnSubmit={false}
				/>
				<TextInput
					autoFocus={true}
					underlineColorAndroid={"transparent"}
					style={styles.textInput}
					placeholder={"2"}
					returnKeyType={"next"}
					returnKeyLabel={"boro"}
          onSubmitEditing={() => {}}
          // ref={(input) => { this.secondTextInput = input; }}
          // onSubmitEditing={() => { this.thirdTextInput.focus(); }}
    blurOnSubmit={false}
				/>
				<TextInput
					autoFocus={true}
					underlineColorAndroid={"transparent"}
					style={styles.textInput}
					placeholder={"3"}
					// returnKeyType={"next"}
					// returnKeyLabel={"boro"}
          // onSubmitEditing={() => {}}
          // ref={(input) => { this.thirdTextInput = input; }}
          // onSubmitEditing={() => { this.forthTextInput.focus(); }}
    blurOnSubmit={false}
				/>
				<TextInput
					autoFocus={true}
					underlineColorAndroid={"transparent"}
					style={styles.textInput}
					placeholder={"4"}
					returnKeyType={"next"}
					returnKeyLabel={"boro"}
          onSubmitEditing={() => {}}
          // ref={(input) => { this.forthTextInput = input; }}
          // onSubmitEditing={() => { this.firstTextInput.focus(); }}
          blurOnSubmit={false}
				/> */}
				<View style={styles.textInputWrapper}>
					<TextInput
						style={styles.textInput}
						placeholder="Username"
						inputRef={(input) => {
							this.userPassInput = input;
						}}
						onSubmitEditing={(event) => {
							this.passTextInput.focus();
						}}
						onFocus={this.onInputFocus.bind(this , 250)}
						
					/>

					<TextInput
						style={styles.textInput}
						placeholder="Password"
						inputRef={(input) => {
							this.passTextInput = input;
						}}
						onSubmitEditing={(event) => {
							this.verifyTextInput.focus();
						}}
						onFocus={this.onInputFocus.bind(this , 350)}
					/>

					<TextInput
						style={styles.textInput}
						placeholder="Verification"
						inputRef={(input) => {
							this.verifyTextInput = input;
						}}
						// onSubmitEditing={this.pressSubmitt.bind(this)}
						isLast={true}
						onFocus={this.onInputFocus.bind(this , 500)}
						onBlur={this.onInputBlur.bind(this)}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F5FCFF"
	},
	textInputWrapper: {
		marginVertical: 400,
		borderWidth: 1,
		alignItems: "center"
	},
	textInput: {
		width: 200,
		height: 50,
		borderWidth: 2,
		marginVertical: 50
	}
});
