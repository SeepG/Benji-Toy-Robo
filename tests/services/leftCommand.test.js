//imports for test
import "@babel/polyfill";
import LeftCommand from '../../services/leftCommand';

describe('LeftCommand Test', () => {
	it('Test left command for valid inputs', () => {
		const request = {
			"position" :{
				"x": 0,
				"y": 0
			},
			"direction" : "NORTH"
		};

		const expectedResponse = {
			"position": {
					"x": 0,
					"y": 0
			},
			"direction": "WEST",
			"message": "Success!"
		};
		const serviceCommand = new LeftCommand();
		const response = serviceCommand.Invoke(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(expectedResponse);
	})
});