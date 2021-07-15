import App from "../App";
import renderWithRedux from "./HomeScreen.test";
import { getByText } from "@testing-library/react";

describe("App Component", () => {
   test("Successfull render of App", () => {
      const {getByText} = renderWithRedux(<App/>);
      expect(getByText("Youtube")).toBeInTheDocument();
   })
})