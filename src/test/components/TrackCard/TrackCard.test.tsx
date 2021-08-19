import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import TrackCard from "../../../components/TrackCard/TrackCard";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("TrackCard", () => {
  const wrapper = shallow(
    <TrackCard name="name" image="image" artist="artist" />
  );
  it("renders and check paragraph value", () => {
    const paragraph = wrapper.find("p");
    const image = wrapper.find("img");
    expect(image).toHaveLength(1);
    expect(paragraph).toHaveLength(2);
    expect(wrapper.find(".name").text()).toEqual("name");
    expect(wrapper.find(".artist").text()).toEqual("artist");
    expect(wrapper.find("img").prop("src")).toEqual("image");
  });
});
