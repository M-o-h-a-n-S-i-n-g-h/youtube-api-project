import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/reducers/rootreducer";
import { rootSaga } from "./redux/sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"

const sagaMiddleware = createSagaMiddleware();

const initialState = {
   search: {
      results: [
         {id: 1, name: "Youtube"}
      ]
   }
}

const middlewares = [thunk, sagaMiddleware];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga)

export default store;