import HomeScreen from "../screens/Home.screen";
import { render, cleanup, screen, getByLabelText } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import VideoItem from "../components/VideoItem/VideoItem.component";
import VideoList from "../components/VideoList/VideoList.component";

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
   
   test("After Form Submit", () => {
      const video = {
         id: {
            videoId: ""
         },
         snippet: {
            title: "",
            description: "",
            thumbnails: {
               medium: {url: ""}
            }
         }
      }
      render(
        <BrowserRouter>
           <VideoList videos={videos}/>
        </BrowserRouter>
      )
      expect(screen.getByTestId("card")).toBeInTheDocument();
      
      render(
        <BrowserRouter>
           <VideoItem video={video}/>
        </BrowserRouter>
      );
      expect(screen.getByTestId("card")).toBeInTheDocument();
   
   })
})