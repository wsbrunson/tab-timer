import React from 'react';
import { shallow } from 'enzyme';

import TimeDisplay from './TimeDisplay';

describe('TimeDisplay Component', () => {
	it('should render', () => {
		const Component = shallow(<TimeDisplay time={9234} />);

		expect(Component.length).toBeTruthy();
	});
});
