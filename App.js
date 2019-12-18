import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'
import Flag from './src/components/Flag'

export default class App extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Field />
				<Field opened />
				<Field opened nearMines={6} />
				<Field mined />
				<Field mined opened />
				<Field mined opened exploded />
				<Field flagged />
				<Field flagged opened />
				<Flag bigger />
			</View>
		)
	}
}

const styles = StyleSheet.create({

})