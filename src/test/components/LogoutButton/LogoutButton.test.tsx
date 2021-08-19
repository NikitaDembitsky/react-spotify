import Enzyme, { shallow } from "enzyme";
import LogoutButton from "../../../components/LogoutButton/LogoutButton";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Button } from "@material-ui/core";
import { logOut } from "../../../utils";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("LogoutButton", () => {
  const wrapper = shallow(<LogoutButton />);
  it('renders a button with "LogoutButton" as children', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it("text inside p tag", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual("Log Out");
  });

  it("calls onClick", () => {
    const button = wrapper.find(Button);
    expect(button.props().onClick).toEqual(logOut);
  });
});
