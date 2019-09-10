import ValidationHelper from "../validation/validationHelper";
// Robo PLACE command. Places Benji on a table-top

class PlaceCommand {
  Invoke(_req) {
    ValidationHelper.validate(_req);
    _req.message = "Success!";
    return _req;
  }
}

export default PlaceCommand;
