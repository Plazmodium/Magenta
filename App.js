/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Screen1View from './Screen1/View/Screen1View'
import Screen2View from './Screen2/View/Screen2View'
import { connect } from 'react-redux'
import { navigate } from './Navigation/Actions/actions'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {}
class App extends Component<Props> {
  navigationControl () {
    let screen = <View />

    switch (this.props.navigationReducer.toScreen) {
      case 'Screen1':
        screen = <Screen1View />
        break
      case 'Screen2':
        screen = <Screen2View />
        break
      default:
        break
    }
    return screen
  }

  render () {
    return <View style={styles.container}>{this.navigationControl()}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'white'
  }
})

const mapStateToProps = state => {
  return {
    navigationReducer: state.navigationReducer
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     navigate: toScreen => dispatch(navigate(toScreen))
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)
