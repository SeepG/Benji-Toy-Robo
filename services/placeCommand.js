import ValidationHelper from '../validation/validationHelper'
// Robo PLACE command. Places Benji on 5*5 table-top

class PlaceCommand{
	Invoke(_req) {
			ValidationHelper.validate(_req);
			_req.message = "Success!";
			return _req;
		}
	}

export default PlaceCommand;