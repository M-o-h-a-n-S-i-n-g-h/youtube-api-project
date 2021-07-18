import SearchBar from "../components/SearchBar/SearchBar.component";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoList from "../components/VideoList/VideoList.component";
import { BrowserRouter } from "react-router-dom";


describe("SearchBar Component", () => {
   
   test("form tag", () => {
      const {getByRole, getByLabelText, getByTestId} = render(<SearchBar/>);
      expect(getByRole('form')).toBeInTheDocument();
      expect(getByLabelText(/search/i)).toBeInTheDocument();
      expect(getByTestId("input")).toBeInTheDocument();
   });
   
   test("On Empty Form Submit", () => {
      const mockSubmit = jest.fn();
      const {getByTestId} = render(<SearchBar handleSubmit={mockSubmit}/>);
      const input = getByTestId("input");
      userEvent.type(input, "{enter}");
      expect(mockSubmit).toHaveBeenCalled();
   });
   
   test("On Valid Form Submit", async () => {
      const mockSubmit = jest.fn();
      const {getByTestId} = render(<SearchBar handleSubmit={mockSubmit}/>);
      const input = getByTestId("input");
      userEvent.type(input, "reactJS{enter}");
      expect(mockSubmit).toBeCalledTimes(1);
      const videos = [{
         snippet: {
            thumbnails: {
               medium: {
                  url: ""
               }
            }
         }
      }]
      const {findByTestId} = render(
        <BrowserRouter>
           <VideoList videos={videos}/>
        </BrowserRouter>
      );
      expect(await findByTestId("videoListMasonry")).toBeInTheDocument();
   })
})