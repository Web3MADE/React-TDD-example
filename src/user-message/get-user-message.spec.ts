// age must be older than 18
// Cannot be logged in if NOT older than 18

import { getUserMessage } from "./get-user-message";

// Cannot be subscribed if NOT logged in
describe("getUserMessage", () => {
  it("must show log in message if older than 18", () => {
    const result = getUserMessage({
      age: 18,
      isLoggedIn: false,
      isSubscribed: false,
    });

    expect(result).toBe("please log in");
  });

  it("must show a non-elgible message if NOT older than 18", () => {
    const result = getUserMessage({
      age: 17,
      isLoggedIn: false,
      isSubscribed: false,
    });

    expect(result).toBe("you are under 18");
  });

  //   it("must show subscribe message if logged in and eligible");

  //   it("must not show a message if subscribed");
});
