import { cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import VideoDetail from "../screens/VideoDetail.screen";
import renderWithRedux from "./HomeScreen.test";
import { useSelector, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
// const mockStore = configureStore(middlewares)

describe("On VideoDetail Screen", () => {
   
   test("On Video Load", async () => {
      const match = {
         params: {
            id: ""
         }
      }
      const {findByTestId} = renderWithRedux(
        <BrowserRouter>
           <VideoDetail match={match}/>
        </BrowserRouter>
      );
      expect(await findByTestId("videoInfo")).toBeInTheDocument();
   })
   
})