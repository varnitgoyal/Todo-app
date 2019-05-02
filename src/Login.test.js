import renderer from "react-test-renderer";
import Login from "./Components/Login/Login";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow,mount } from "enzyme";
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe("testing login component", () => {
  test("Is snapshot Same", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("is login component rendered", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(".login_form").length).toBe(1);
  });

  test("does both text fields rendered",()=>{
      const wrapper=mount(<Login/>);
     
      expect(wrapper.containsMatchingElement(<input name="password"/>)).toEqual(true);
      expect(wrapper.containsMatchingElement(<input name="username"/>)).toEqual(true);

    
  })
  describe('Username input', () => {
  
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#username').simulate('change', {target: {name: 'username', value: 'blah@gmail.com'}});
     
    expect(wrapper.state('username')).toEqual('blah@gmail.com');
    })
   })
});
