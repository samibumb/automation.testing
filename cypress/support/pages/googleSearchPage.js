import { GOOGLE_URL } from "../constants";

class GoogleSearchPage {
  get cookieRejectButton() {
    return cy.get("#L2AGLb > .QS5gu");
  }

  get searchInput() {
    return cy.get(".gLFyf");
  }

  get searchButton() {
    return cy.get(":nth-child(1) > .eIPGRd");
  }

  visitGoogle() {
    cy.visit(GOOGLE_URL);
  }

  dismissCookie() {
    this.cookieRejectButton.click();
  }

  searchFor(query) {
    this.searchInput.type(query);
  }

  clickSearch() {
    this.searchButton.click();
  }
}

export default new GoogleSearchPage();
