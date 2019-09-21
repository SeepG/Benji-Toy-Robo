//imports for test
import "@babel/polyfill";
import PlaceCommand from "../../services/placeCommand";

describe("PlaceCommand Tests", () => {
  it("Test place command for valid inputs", () => {
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
        y: 0
      },
      direction: "NORTH",
      message: "Success!"
    };
    const serviceCommand = new PlaceCommand();
    const response = serviceCommand.Invoke(request);
    expect(response).not.toBeNull();
    expect(response).toEqual(expectedResponse);
  });
  it("Test place command for invalid value of x < 0", () => {
    const request = {
      position: {
        x: -1,
        y: 0
      },
      direction: "NORTH"
    };
    const serviceCommand = new PlaceCommand();
    expect(() => serviceCommand.Invoke(request)).toThrow(
      new Error(
        JSON.stringify({
          isValidationError: true,
          messages: ["x must be larger than or equal to 0"]
        })
      )
    );
  });
  it("Test place command for invalid value of x > 5", () => {
    const request = {
      position: {
        x: 6,
        y: 0
      },
      direction: "NORTH"
    };
    const serviceCommand = new PlaceCommand();
    expect(() => serviceCommand.Invoke(request)).toThrow(
      new Error(
        JSON.stringify({
          isValidationError: true,
          messages: ["x must be less than or equal to 5"]
        })
      )
    );
  });
});
