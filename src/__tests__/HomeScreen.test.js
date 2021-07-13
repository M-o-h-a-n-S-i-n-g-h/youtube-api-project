import HomeScreen from "../screens/Home.screen";
import { render, screen } from "@testing-library/react";


test("renders the first paint", () => {
   render(<HomeScreen/>);
   expect(screen.getByLabelText(/search/)).toBeInTheDocument();
})