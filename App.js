import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Field />
				<Field opened />
				<Field opened nearMines={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({

})