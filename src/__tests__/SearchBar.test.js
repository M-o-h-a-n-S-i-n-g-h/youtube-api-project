import SearchBar from "../components/SearchBar/SearchBar.component";
import { fireEvent, render, screen } from "@testing-library/react";
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
   
   test("On Form Submit", async () => {
      const mockSubmit = jest.fn();
      render(<SearchBar handleSubmit={mockSubmit}/>);
      const input = screen.getByTestId("input");
      userEvent.type(input, "reactJS{enter}");
      expect(mockSubmit).toBeCalled();
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
})