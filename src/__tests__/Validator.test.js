import { test } from '@jest/globals';
import { expect } from '@jest/globals';

import Validator from '../js/Validator';

test('check validator', () => {
  const name = 'admin12qw';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBe(true);
})

test('check validator with 3 numbers in row', () => {
  const name = 'admin1234qw';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBe(false);
})

test('check validator with dash', () => {
  const name = '_admin12_';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBe(false);
})

test('check validator with not latin letters', () => {
  const name = 'админ12';
  const validator = new Validator();
  const result = validator.validateUsername(name);
  expect(result).toBe(false);
})