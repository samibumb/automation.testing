import youtubeSearchPage from "../support/pages/youtubeSearchPage";
import { SEARCH_QUERY } from "../support/constants";

describe("YouTube Search", () => {
  it("searches a song on youtube and verifies url contains youtube", () => {
    youtubeSearchPage.visitYouTube();
    youtubeSearchPage.dismissCookie();
    youtubeSearchPage.searchFor(SEARCH_QUERY);
    youtubeSearchPage.clickSearch();
    youtubeSearchPage.verifyUrlContainsYouTube();
  });
});
