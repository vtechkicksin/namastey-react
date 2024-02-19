import { fireEvent, render, screen } from "@testing-library/react";
import Headers from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

test("should render cart button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/); //regex
  expect(cartItem).toBeInTheDocument();
});

test("should change login button to logout button onClick ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
