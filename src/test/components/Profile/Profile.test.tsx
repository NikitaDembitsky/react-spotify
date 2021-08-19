import Enzyme, { mount } from "enzyme";
import Profile from "../../../components/Profile/Profile";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { useSelector } from "react-redux";

Enzyme.configure({
  adapter: new Adapter(),
});

const user = [{id: 1, email: "email", country: "country"}]

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => user),
}));

describe("Profile", () => {
  it("defines the component", () => {
    const wrapper = mount(<Profile />);
    expect(wrapper).toBeDefined();
    expect(useSelector).toBeCalledWith(expect.any(Function));
  });
});
