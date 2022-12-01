let chai=require("chai");
let chaiHttp=require("chai-http");
let server=require("./app");
// let { expect } = require("chai");
const { listeners } = require("./app");
const { JSDOM } = require('jsdom');
// const request = require("supertest")("https:/newsapi.org");
// const request = require("supertest")("https://airportgap.dev-tester.com/api");
const axios = require("axios")
const expect = require("chai").expect;

chai.should();
chai.use(chaiHttp);

// chai.use(require('chai-dom'));
// require('jsdom-global')();

// describe('index.html', () => {
//     beforeEach((done) => {
//      JSDOM.fromFile('index.html')
//      .then((dom) => {
//        global.document = dom.window.document
//      })
//    .then(done, done);
//    })
//   describe("Level 1 heading", () => {
//    it("h1 element should say 'Hello World!'", () => {
//     let element = document.querySelectorAll('list');
//     expect(element).to.have.text("Hello World!");
//    })
//   })
//   })

  describe("GET /airports", function () {
    it("returns all airports, limited to 30 per page", async function () {
      const response = await axios.get("https:/newsapi.org/v2/top-headlines?country=in&apiKey=4133a954c08249019e6f221dc4e9b1b8");
    //   console.log(response);
    //   const articles=response.articles;
    //   console.log(articles);
        expect(response).to.not.be.undefined;
        expect(response).to.have.status(200);
    });
  });

// describe("GET /airports", function () {
//     it("returns all airports, limited to 30 per page", async function () {
//       const response = await request.get("/airports");
  
//       expect(response.status).to.eql(200);
//       expect(response.body.data.length).to.eql(30);
//     });
//   });

describe("Get/LandingPage",()=>{

    it("it should display landing page",(done)=>{
        chai.request(server)
            .get("/")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/Newsfeed",()=>{

    it("it should display newsfeed",(done)=>{
        chai.request(server)
            .get("/newsfeed")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/SearchNewsPage",()=>{

    it("it should display search news page",(done)=>{
        chai.request(server)
            .get("/searchnews")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/anyOtherPage",()=>{

    it("it should display error message: resource not found",(done)=>{
        chai.request(server)
            .get("/anyotherpage")
            .end((err,res)=>{
                res.should.have.status(404);
                done();
            });
    });
});