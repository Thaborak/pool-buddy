// import { AsyncStorage } from "react-native";
import {composeWithDevTools} from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";

export default function configureStore(onCompletion: () => void): any {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));
  persistStore(store, onCompletion);

  return store;
}
