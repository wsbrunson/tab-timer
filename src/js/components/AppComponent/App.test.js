import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
	it('should render', () => {
		const Component = shallow(<App />);

		expect(Component.length).toBeTruthy();
	});
});
