/**
 * @format
 */

import {AppRegistry,View,Text, ScrollView} from 'react-native';
import React from "react"
import Container from './components/Container';




const App= ()=>{
    return(
<ScrollView horizontal={true}>
<Container/>
<Container/>
<Container/>
<Container/>
<Container/>
<Container/>
<Container/>
<Container/>
</ScrollView>
    )
}

AppRegistry.registerComponent("asdf", () => App);
