import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

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
    onButtonStart = () => {
        let timer = setInterval(() => {
            var num = (Number(this.state.sec_Counter) +1 ).toString(),
                count = this.state.min_Counter;
            if (Number(this.state.sec_Counter) == 59 )  {
                count = (Number(this.state.min_Counter) + 1).toString();
                num = '00'
            } 
            this.setState({
                min_Counter: count.length == 1 ? '0' + count : count,
                sec_Counter: num.length == 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({ timer });
        this.setState({startDisable : true})
    }


    render(){  
        return (
        <View style={styles.container}>
          <Text>Open up App.js to start alsdfjals;dfjlasdfj on your app!</Text>
        </View>
      );
    }

    }
