
//RESOURCES: https://abc.danch.me/react-native-dynamic-styling-f8bd9d9629e9

import { StyleSheet } from "react-native"
import React, { Component } from 'react'


const styleView1 = StyleSheet.create({
    theStyle: {
        flex: 1,
        justifyContent:"space-around",
        backgroundColor: "white",
        width:"100%"
    },
    title: {
        // backgroundColor: "red",
        fontSize: 40,
        textAlign: "center"
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
})

module.exports = styleView1