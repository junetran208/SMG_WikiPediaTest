// cypress/support/WikipediaApiService.js

class WikipediaApiService {
  constructor() {
    this.baseApiUrl = "https://en.wikipedia.org/w/api.php";
  }

 search(params) {
    const apiUrl = `${this.baseApiUrl}?${new URLSearchParams(params).toString()}`;
    
    return cy.request({
      method: "GET",
      url: apiUrl,
    });
  }
}

export default new WikipediaApiService();
