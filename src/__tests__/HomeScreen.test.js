import HomeScreen from "../screens/Home.screen";
import { cleanup, fireEvent, getByLabelText, render } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import VideoItem, { checkRouteToRedirect } from "../components/VideoItem/VideoItem.component";

afterEach(cleanup)

const videos = [{
   snippet: {
      thumbnails: {
         medium: {
            url: ""
         }
      }
   }
}]

export default function renderWithRedux(component) {
   return {
      ...render(
        <Provider store={store}>
           {component}
        </Provider>
      )
   }
}

describe("HomeScreen Component", () => {
   test("renders the first paint", () => {
      const {getByLabelText} = renderWithRedux(<HomeScreen/>);
      expect(getByLabelText("Search")).toBeInTheDocument();
   });
   
   test("After Clicking an element", () => {
      const video = {
         id: {
            videoId: ''
         },
         snippet: {
            thumbnails: {
               medium: {
                  url: ""
               }
            }
         }
      }
      const {getByTestId} = render(
        <BrowserRouter>
           <VideoItem video={video}/>
        </BrowserRouter>
      )
      const card = getByTestId("card");
      fireEvent.click(card)
      expect(checkRouteToRedirect("/p")).toBeTruthy();
   })
})