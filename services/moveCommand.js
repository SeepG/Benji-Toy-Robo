import ValidationHelper from '../validation/validationHelper'
// Robo MOVE command. Moves Benji one unit forward on table-top

class MoveCommand{
	Invoke(_req) {
			ValidationHelper.validate(_req);
			switch(_req.direction){
				case 'NORTH':
					_req.position.y++;
					break;
				case 'WEST':
					_req.position.x--;
					break;
				case 'SOUTH':
					_req.position.y--;	
					break;
				case 'EAST':
					_req.position.x++;
					break;
			}

			ValidationHelper.validate(_req);
			_req.message = "Success!";
			return _req;
		}
	}

	export default MoveCommand;