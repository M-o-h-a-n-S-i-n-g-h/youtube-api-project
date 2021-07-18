import { BrowserRouter } from "react-router-dom";
import VideoDetail from "../screens/VideoDetail.screen";
import renderWithRedux from "./HomeScreen.test";
import thunk from 'redux-thunk'

const middlewares = [thunk]

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