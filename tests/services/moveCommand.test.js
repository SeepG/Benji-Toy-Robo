//imports for test
import "@babel/polyfill";
import MoveCommand from "../../services/moveCommand";

describe("MoveCommand Test", () => {
  it("Test move command for valid inputs", () => {
    const request = {
      position: {
        x: 0,
        y: 0
      },
      direction: "NORTH"
    };

    const expectedResponse = {
      position: {
        x: 0,
        y: 1
      },
      direction: "NORTH",
      message: "Success!"
    };
    const serviceCommand = new MoveCommand();
    const response = serviceCommand.Invoke(request);
    expect(response).not.toBeNull();
    expect(response).toEqual(expectedResponse);
  });
});
