import react from 'react';
import {Text, View, Button} from "react-native";
import {useSelector, useDispatch} from 'react-redux'

import {incrementCounterAction,decrementCounterAction} from "../redux/counter/counterAction"

const CounterApp = () => {
    const countState = useSelector(state => state)

    const dispatch = useDispatch();
    const incrementCount = count =>  dispatch(incrementCounterAction(count));
    const decrementCount = () =>  dispatch(decrementCounterAction());


    return <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginVertical: 100, fontSize: 40}}>
            COUNT: {countState.count}
        </Text>
        <View style={{marginVertical: 5}}>
            <Button title="Increment +1" style={{marginVertical: 50}} onPress={() => {
                incrementCount(1)
            }}/>
        </View>
        <View style={{marginVertical: 5}}>
            <Button title="Increment +5" style={{marginVertical: 50}} onPress={() => {
                incrementCount(5)
            }}/>
        </View>
        <View style={{marginVertical: 50}}>
            <Button title="Decrement -1" onPress={() => {
                decrementCount()
            }}/>
        </View>
    </View>
}

export default CounterApp;
