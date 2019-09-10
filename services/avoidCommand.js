import ValidationHelper from "../validation/validationHelper";
// Robo AVOID command.Informs robo about an obstruction on the table in position X,Y.

class AvoidCommand {
  Invoke(_req) {
    ValidationHelper.validate(_req);
    switch (_req.direction) {
      case 0:
        _req.direction = "NORTH";
        break;
      case 1:
        _req.direction = "WEST";
        break;
      case 2:
        _req.direction = "SOUTH";
        break;
      case 3:
        _req.direction = "NORTH";
        break;
    }

    ValidationHelper.validate(_req);
    _req.message = "Success!";
    return _req;
  }
}

export default AvoidCommand;
