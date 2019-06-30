import ValidationHelper from '../validation/validationHelper'
// Robo RIGHT command. Rotates Benji 90 degrees in specified direction
class RightCommand{
	Invoke(_req) {
		ValidationHelper.validate(_req);
		switch(_req.direction){
			case 'NORTH':
				_req.direction = 'EAST';
				break;
			case 'WEST':
				_req.direction = 'NORTH';
				break;
			case 'SOUTH':
				_req.direction = 'WEST';	
				break;
			case 'EAST':
				_req.direction = 'SOUTH';
				break;
		}

		ValidationHelper.validate(_req);
		_req.message = "Success!";
		return _req;
	}
}

export default RightCommand;