import Enzyme, { shallow } from "enzyme";
import HomePage from "../../../components/HomePage/HomePage";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Button } from "@material-ui/core";
import { getCodeValue } from "../../../utils";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("HomePage", () => {
  const wrapper = shallow(<HomePage />);
  it('renders a button with "HomePage" as children', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it("text inside p tag", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual("LOGIN WITH SPOTIFY");
  });

  it("calls getCodeValue on click", () => {
    const button = wrapper.find(Button);
    expect(button.props().onClick).toEqual(getCodeValue);
  });
});
