import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import Screen2Styling from './Screen2Styling'
import { navigate } from '../../Navigation/Actions/actions'

class Screen2View extends Component {
  constructor (props) {
    super(props)
  }

  goToScreen1 () {
    this.props.navigate('Screen1')
  }

  render () {
    return (
      <View>
        <View style={Screen2Styling.theStyle}>
          <Text style={Screen2Styling.title}>This is Screen 2</Text>
          <Button
            title={'Go Back'}
            onPress={() => {
              this.goToScreen1()
            }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: toScreen => dispatch(navigate(toScreen))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2View)
