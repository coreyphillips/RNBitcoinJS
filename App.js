/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import "./shim";
import Web3 from "web3";

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android:
	"Double tap R on your keyboard to reload,\n" +
	"Shake or press menu button for dev menu",
});

const bitcoin = require("rn-bitcoinjs-lib");
const keyPair = bitcoin.ECPair.makeRandom();
const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey});
console.log(address);

const provider = Platform.select({
	ios: "ws://localhost:8545",
	android: "ws://10.0.2.2:8545"
});

type Props = {};
export default class App extends Component<Props> {

	componentWillMount() {
		this.web3 = new Web3(provider);
		this.web3.eth.getBlock("latest").then(console.log).catch(console.log);
		this.web3.eth.getAccounts(function (error, res) {
			if (!error) {
				console.log(res);
			} else {
				console.log(error);
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});
