const { describe, it } = intern.getInterface("bdd");
import harness from "@dojo/framework/testing/harness";
import assertionTemplate from "@dojo/framework/testing/assertionTemplate";
import { w, v } from "@dojo/framework/widget-core/d";

import Profile from "../../../src/widgets/Profile";
import * as css from "../../../src/widgets/styles/Profile.m.css";

const profileAssertion = assertionTemplate(() =>
  v("h1", { classes: [css.root], "~key": "welcome" }, ["Welcome Stranger!"])
);

describe("Profile", () => {
  it("default renders correctly", () => {
    const h = harness(() => w(Profile, {}));
    h.expect(profileAssertion);
  });

  it("renders given username correctly", () => {
    // update the expected result with a given username
    const namedAssertion = profileAssertion.setChildren("~welcome", [
      "Welcome Kel Varnsen!"
    ]);
    const h = harness(() => w(Profile, { username: "Kel Varnsen" }));
    h.expect(namedAssertion);
  });
});
