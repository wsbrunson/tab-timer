import React from 'react';
import { mount } from 'enzyme';

import Countdown from './Countdown';

let Component;

describe('Countdown Component', () => {
	beforeEach(() => {
		Component = mount(<Countdown startingTime={60000} />);
	});

	it('should start countdown when created', () => {
		expect(Component.state('currentTime')).toEqual(60000);
	});

	it('should correctly countdown', (done) => {
		window.setTimeout(() => {
			expect(Component.state('currentTime')).toEqual(58000);
			done();
		}, 3000);
	});
});
