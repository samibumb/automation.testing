import { YOUTUBE_URL, YOUTUBE_URL_IDENTIFIER } from '../constants'

class YouTubeSearchPage {
  get cookieRejectButton() {
    return cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill')
  }

  get searchInput() {
    return cy.get('[name="search_query"]')
  }

  get searchButton() {
    return cy.get('.ytSearchboxComponentSearchButton')
  }

  visitYouTube() {
    cy.visit(YOUTUBE_URL)
  }

  dismissCookie() {
    this.cookieRejectButton.click()
  }

  searchFor(query) {
    this.searchInput.click().type(query)
  }

  clickSearch() {
    this.searchButton.click()
  }

  verifyUrlContainsYouTube() {
    cy.url().should('include', YOUTUBE_URL_IDENTIFIER)
  }
}

export default new YouTubeSearchPage()
