//imports for test
import "@babel/polyfill";
import RightCommand from '../../services/rightCommand';

describe('RightCommand Test', () => {
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
			"direction": "EAST",
			"message": "Success!"
		};
		const serviceCommand = new RightCommand();
		const response = serviceCommand.Invoke(request);
		expect(response).not.toBeNull();
		expect(response).toEqual(expectedResponse);
	})
});