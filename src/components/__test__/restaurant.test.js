import RestaurantCard from "../Restaurant";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mock/restaurantCardMock.json";
import "@testing-library/jest-dom"

test("should render restaurantCard component with prop data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Istah - The Mediterranean Way");
  expect(name).toBeInTheDocument();
});
