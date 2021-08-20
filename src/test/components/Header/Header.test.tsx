import Enzyme, { mount, shallow } from "enzyme";
import Header from "../../../components/Header/Header";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { user } from "../../../store/auth/selectors";
Enzyme.configure({
  adapter: new Adapter(),
});

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock("../../../store/auth/selectors");

describe("Header", () => {
  
  it("check selector", () => {
    user.mockReturnValue(null);
  });

  it("should render 2 <Link>s", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Link)).toHaveLength(2);
  });

  it("Link redirect to / and /profile", () => {
    const wrapper = shallow(<Header />);
    wrapper.find(Link).first().simulate("click");
    expect(wrapper.find(Link).first().props().to).toEqual("/");
    wrapper.find(Link).last().simulate("click");
    expect(wrapper.find(Link).last().props().to).toEqual("/profile");
  });
});
