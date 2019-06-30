import ValidationHelper from '../validation/validationHelper'
// Robo LEFT command. Rotates Benji 90 degrees in specified direction
class LeftCommand{
	Invoke(_req) {
		ValidationHelper.validate(_req);
		switch(_req.direction){
			case 'NORTH':
				_req.direction = 'WEST';
				break;
			case 'WEST':
				_req.direction = 'SOUTH';
				break;
			case 'SOUTH':
				_req.direction = 'EAST';	
				break;
			case 'EAST':
				_req.direction = 'NORTH';
				break;
		}

		ValidationHelper.validate(_req);
		_req.message = "Success!";
		return _req;
	}
}

export default LeftCommand;