import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import App from '../../App';
import ExchangeView from './ExchangeView';
import Adapter from 'enzyme-adapter-react-16';
import { getCurrencyCharater, fixDecimal } from './ExchangeView';

Enzyme.configure({ adapter: new Adapter() });

describe("ExchangeView", () => {
  it("should render exchange view", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('get currency charater', () => {
    expect(getCurrencyCharater('USD')).toEqual('$');
  });

  const decimal_value1 = undefined;
  const decimal_value2 = null;
  const decimal_value3 = 0;
  const decimal_value4 = 30;
  const decimal_value5 = 50.0000;
  const decimal_value6 = 60.123;

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value1)).toEqual('');
  });

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value2)).toEqual('');
  });

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value3)).toEqual('');
  });

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value4)).toEqual('30');
  });

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value5)).toEqual('50');
  });

  it('Fix Decimal', () => {
    expect(fixDecimal(decimal_value6)).toEqual('60.1230');
  });
});


