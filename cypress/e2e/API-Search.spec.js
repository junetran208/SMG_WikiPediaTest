import WikipediaApiService from "../support/WikipediaApiService";

describe("Validate API Search function", () => {
 
  let testData1;
  before(() => {
    cy.fixture("Search-TC1.json").then((data) => {
      testData1 = data;
    });
  });

  it("TC1: Verify search result with correct response titles by requested query", function () {
    cy.wrap(testData1).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200);
        const titles = response.body.query.search.map((result) => result.title);
        const includesSoftwareOrTesting = titles.some((title) =>
          title.includes("Software") || title.includes("Testing")
        );

        expect(includesSoftwareOrTesting).to.be.true;
      });
    });
  });

  
  let testData2;
  before(() => {
    cy.fixture("Search-TC2.json").then((data) => {
      testData2 = data;
    });
  });

  it("TC2: Verify response correct paging by sroffset value", function () {
    cy.wrap(testData2).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
         const sroffsetInResponse = response.body.continue.sroffset;
        // Verify that the response's sroffset is equal to input sroffset + 10
         const expectedSroffset = testCase.sroffset + 10;
         expect(sroffsetInResponse).to.equal(expectedSroffset);
      });
    });
  });

 
  let testData3;
  before(() => {
    cy.fixture("Search-TC3.json").then((data) => {
      testData3 = data;
    });
  });

  it("TC3: Verify response value of continue when combining search params", function () {
    cy.wrap(testData3).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const titles = response.body.query.search.map((result) => result.title);
        const includesSoftwareOrTesting = titles.some((title) =>
          title.includes("Software") || title.includes("Testing")
        );
        expect(includesSoftwareOrTesting).to.be.true;
        const responseBody = response.body;
        expect(responseBody).to.have.nested.property("continue.continue", "-||");
      
      });
    });
  });

  let testData4;
  before(() => {
    cy.fixture("Search-TC4.json").then((data) => {
      testData4 = data;
    });
  });

  it("TC4: Verify returnning 'sroffset' =10 when given the negative number for 'sroffset' param", function () {
   cy.wrap(testData4).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
        expect(responseBody).to.have.nested.property("continue.sroffset", 10);
      });
    });
  });
  let testData5;
  before(() => {
    cy.fixture("Search-TC5.json").then((data) => {
      testData5 = data;
    });
  });

  it("TC5: Verify error response for invalid 'list' parameter", function () {
     cy.wrap(testData5).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;

        expect(responseBody.warnings.query.warnings).to.include("Unrecognized value for parameter \"list\"");
      });
    });
  });

  let testData6;
  before(() => {
    cy.fixture("Search-TC6.json").then((data) => {
      testData6 = data;
    });
  });

  it("TC6: Verify error response for invalid 'formatversion' parameter", function () {
 
    cy.wrap(testData6).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
       expect(responseBody.error.info).to.include('Unrecognized value for parameter \"formatversion\"');
      
      });
    });
  });
  
  let testData7;
  before(() => {
    cy.fixture("Search-TC7.json").then((data) => {
      testData7 = data;
    });
  });

  it("TC7: Verify error response for invalid 'continue' parameter", function () {
 
    cy.wrap(testData7).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
       expect(responseBody.error.info).to.include('Invalid continue param');
      
      });
    });
  });

  let testData8;
  before(() => {
    cy.fixture("Search-TC8.json").then((data) => {
      testData8 = data;
    });
  });


  it("TC8: Verify error response for long string of 'srsearch' parameter", function () {
 
    cy.wrap(testData8).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
       expect(responseBody.error.info).to.include('Search request is longer than the maximum allowed length');
      
      });
    });
  });
  let testData9;
  before(() => {
    cy.fixture("Search-TC9.json").then((data) => {
      testData9 = data;
    });
  });

  it("TC9: Verify error response for invalid value of 'sroffset'  parameter", function () {
 
    cy.wrap(testData9).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
       expect(responseBody.error.code).to.include('badinteger');
       expect(responseBody.error.info).to.include('Invalid value');
      
      });
    });
  });
  let testData10;
  before(() => {
    cy.fixture("Search-TC10.json").then((data) => {
      testData10 = data;
    });
  });

  it("TC10: Verify error response for invalid value of combining some params", function () {
 
    cy.wrap(testData10).each((testCase) => {
      WikipediaApiService.search(testCase).then((response) => {
        expect(response.status).to.equal(200); 
        const responseBody = response.body;
      expect(responseBody.error.info).to.include('Unrecognized value for parameter');
      expect(JSON.stringify(responseBody.warnings.main)).to.include('Unrecognized parameters: sroffset, srsearch');
      });
    });
  });

});
