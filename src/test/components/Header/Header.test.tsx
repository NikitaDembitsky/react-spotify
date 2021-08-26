import Enzyme, { mount, shallow } from "enzyme";
import Header from "../../../components/Header/Header";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { user } from "../../../store/auth/selectors";
Enzyme.configure({
  adapter: new Adapter(),
});

const wrapper = shallow(<Header />);
describe("Header", () => {
  it("should render 2 <Link>s", () => {
    expect(wrapper.find(Link)).toHaveLength(2);
  });

  it("Link redirect to / and /profile", () => {
    wrapper.find(Link).first().simulate("click");
    expect(wrapper.find(Link).first().props().to).toEqual("/search");
    wrapper.find(Link).last().simulate("click");
    expect(wrapper.find(Link).last().props().to).toEqual("/profile");
  });
});

