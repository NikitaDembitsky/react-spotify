import Enzyme, { mount, shallow } from "enzyme";
import SearchForm from "../../../components/SearchForm/SearchForm";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "@material-ui/core";
import TrackCard from "../../../components/TrackCard/TrackCard";

Enzyme.configure({
  adapter: new Adapter(),
});

const tracks = [{ id: 1, email: "email", country: "country" }];
const searchValue = "token"
const offset = 1;
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => [{tracks, offset, searchValue}]),
  useDispatch: () => mockDispatch,
}));

describe("SearchForm", () => {
  it("defines the component", () => {
    const wrapper = mount(
      <Router>
        <SearchForm />
      </Router>
    );
    expect(wrapper).toBeDefined();
    expect(useSelector).toBeCalledWith(expect.any(Function));
  });
  
  it("Render Button", () =>{
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find(Button)).toHaveLength(1)
   })

});
