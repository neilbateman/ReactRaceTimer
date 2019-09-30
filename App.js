import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            min_Counter: '00',
            sec_Counter: '00',
            startDisable: false
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }



    render(){  
        return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    }
