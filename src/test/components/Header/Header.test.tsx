import Enzyme, { mount, shallow } from "enzyme";
import Header from "../../../components/Header/Header";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const user = [{ display_name: "name" }];

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => user),
}));

describe("Header", () => {
  it("defines the store", () => {
    const wrapper = mount(
      <Router>
        <Header />
      </Router>
    );
    expect(wrapper).toBeDefined();
    expect(useSelector).toBeCalledWith(expect.any(Function));
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
