import googleSearchPage from "../support/pages/googleSearchPage";
import { GOOGLE_SEARCH_QUERY } from "../support/constants";

describe("empty spec", () => {
  it("passes", () => {
    googleSearchPage.visitGoogle();
    googleSearchPage.dismissCookie();
    googleSearchPage.searchFor(GOOGLE_SEARCH_QUERY);
    googleSearchPage.clickSearch();
  });
});
