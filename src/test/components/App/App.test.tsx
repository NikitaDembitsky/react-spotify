import Enzyme, { mount, shallow } from "enzyme";
import App from "../../../components/App/App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const user = [{ id: 1, email: "email", country: "country" }];
const token = "token"
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => [{user, token}]),
  useDispatch: () => mockDispatch,
}));

describe("App", () => {
  it("defines the component", () => {
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );
    expect(wrapper).toBeDefined();
    expect(useSelector).toBeCalledWith(expect.any(Function));
  });
});
