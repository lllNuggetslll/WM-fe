import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn(cb =>
    cb({
      coords: {
        latitude: "lat",
        longitude: "lng"
      }
    })
  )
};

global.navigator.geolocation = mockGeolocation;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
