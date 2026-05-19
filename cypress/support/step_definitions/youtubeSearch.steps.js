import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import youtubeSearchPage from "../pages/youtubeSearchPage";
import { SEARCH_QUERY, YOUTUBE_URL_IDENTIFIER } from "../constants";

Given("I visit YouTube", () => {
  youtubeSearchPage.visitYouTube();
});

And("I dismiss the cookie consent", () => {
  youtubeSearchPage.dismissCookie();
});

When("I search for {string}", (searchQuery) => {
  youtubeSearchPage.searchFor(searchQuery);
});

And("I click the search button", () => {
  youtubeSearchPage.clickSearch();
});

Then("the URL should contain {string}", (urlPart) => {
  cy.url().should("include", urlPart);
});
