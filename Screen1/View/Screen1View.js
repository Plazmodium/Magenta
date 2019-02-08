import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { increment } from '../Actions/actions'
import {navigate} from "../../Navigation/Actions/actions"
import Screen1Styling from './Screen1Styling'

class Screen1View extends Component {
  constructor (props) {
    super(props)
  }

  incrementz () {
    this.props.increment()
  }

  goToScreen2() {
    this.props.navigate("Screen2")
  }

  render () {
    return (
      <View style={Screen1Styling.theStyle}>
        <Text style={Screen1Styling.title}>This is Screen 1</Text>
       
        <Text style={Screen1Styling.numberStyling}>{this.props.reducer.numb}</Text>

        <View>
          <Button
            title={'Press Me to Increment'}
            onPress={() => {
              this.incrementz()
            }}
          />
          <Button
            color={'red'}
            title={'Press Me to Navigate'}
            onPress={() => {
              this.goToScreen2()
            }}
          />

        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    reducer: state.reducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    navigate: (toScreen) => dispatch(navigate(toScreen))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen1View)
