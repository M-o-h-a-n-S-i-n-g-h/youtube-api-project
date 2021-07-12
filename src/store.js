import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/reducers/rootreducer";
import { rootSaga } from "./redux/sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
   key: 'root',
   storage: sessionStorage,
   whitelist: ['auth']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, sagaMiddleware];

export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);