import React, { Component } from 'react'
import { View, Text, Button } from "react-native";
import { connect } from 'react-redux'
import { backgroundChanged } from '../Actions/actions'
import Screen1Styling from './Screen1Styling'

class Screen1View extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={Screen1Styling.theStyle}>
        <Text style={Screen1Styling.title}>
          This is Screen 1
        </Text>
        <Button
          title={"Press Me"}
          onPress= {() => {console.log("pushed")}}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    backgroundState: state.backgroundState
  }
}
const mapDispatchToProps = dispatch => {
  return {
    backgroundChanged: backgroundState =>
      dispatch(backgroundChanged(backgroundState))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen1View)
