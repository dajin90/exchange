import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCurrencyCharater, fixDecimal } from './ExchangeView';
test('get currency charater', () => {
  expect(getCurrencyCharater('USD')).toEqual('$');
});

const decimal_value1 = undefined;
const decimal_value2 = null;
const decimal_value3 = 0;
const decimal_value4 = 30;
const decimal_value5 = 50.0000;
const decimal_value6 = 60.123;

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value1)).toEqual('');
});

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value2)).toEqual('');
});

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value3)).toEqual('');
});

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value4)).toEqual('30');
});

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value5)).toEqual('50');
});

test('Fix Decimal', () => {
  expect(fixDecimal(decimal_value6)).toEqual('60.1230');
});

