import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App Component", () => {
   test("renders after async call in useEffect", async () => {
      render(<App/>);
      // expect(screen.queryByText(/Signed in as/)).toBeNull();
      // screen.debug();
      await screen.findByText(/Signed in as/);
      screen.debug();
   })
})