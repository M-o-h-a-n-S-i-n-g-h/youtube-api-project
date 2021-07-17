import SearchBar from "../components/SearchBar/SearchBar.component";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VideoList from "../components/VideoList/VideoList.component";

import { BrowserRouter } from "react-router-dom";


describe("SearchBar Component", () => {
   
   test("form tag", () => {
      render(<SearchBar/>);
      expect(screen.getByRole('form')).toBeInTheDocument();
      expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
      expect(screen.getByTestId("input")).toBeInTheDocument();
   })
   
   test("On Empty Form Submit", () => {
      const mockSubmit = jest.fn();
      render(<SearchBar handleSubmit={mockSubmit}/>);
      const input = screen.getByTestId("input");
      userEvent.type(input, " {enter}");
      expect(mockSubmit).not.toHaveBeenCalled();
   })
   
   test("On Valid Form Submit", async () => {
      const mockSubmit = jest.fn();
      render(<SearchBar handleSubmit={mockSubmit}/>);
      const input = screen.getByTestId("input");
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
      render(
        <BrowserRouter>
           <VideoList videos={videos}/>
        </BrowserRouter>
      );
      expect(await screen.findByTestId("videoListMasonry")).toBeInTheDocument();
   })
   //
   // jest.mock("./__mocks__/searchActionMock.js");
   // test("fetches the search results from api", () => {
   //    const wrapper = render(<VideoList videos={} />);
   //    expect(wrapper.getByTestId("card")).toBeInTheDocument();
   //    expect(wrapper.getByText("")).toBeInTheDocument();
   // })
   //
})