import React from 'react';
import { shallow } from 'enzyme';
import TableListContainer from './TableListContainer';

it('renders without crashing', () => {
  shallow(<TableListContainer />);
});