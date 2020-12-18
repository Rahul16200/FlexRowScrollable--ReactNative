import React from 'react'
import { View } from 'react-native'

function Container() {
    const {viewStyle} = styles
    return (
     <View style={viewStyle}>

     </View>
    )
}

const styles = {
    viewStyle:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"red",
        marginRight:20,
        marginLeft:5,
        width:100,
        height:1000
    }
}

export default Container
