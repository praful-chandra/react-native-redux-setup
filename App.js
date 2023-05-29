import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux'


import CounterApp from "./src/CounterApp";
import store from "./redux/store";

export default function App() {
  return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
  );
}

