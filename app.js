const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("basicInfo")
    .then(basicInfo =>
      queries.list("companyEnrollment").then(companyEnrollment =>
        queries.list("freeConsultation").then(freeConsultation =>
          queries.list("guideRegistration").then(guideRegistration =>
            response.json({
              basicInfo: basicInfo,
              companyEnrollment: companyEnrollment,
              freeConsultation: freeConsultation,
              guideRegistration: guideRegistration
            })
          )
        )
      )
    )
    .catch(error => console.log(error));
});

app.get("/basicInfo", (request, response) => {
  queries
    .list("basicInfo")
    .then(basicInfo => {
      response.json({ basicInfo });
    })
    .catch(error => console.log(error));
});

app.get("/companyEnrollment", (request, response) => {
  queries
    .list("companyEnrollment")
    .then(companyEnrollment => {
      response.json({ companyEnrollment });
    })
    .catch(error => console.log(error));
});

app.get("/freeConsultation", (request, response) => {
  queries
    .list("freeConsultation")
    .then(freeConsultation => {
      response.json({ freeConsultation });
    })
    .catch(error => console.log(error));
});

app.get("/guideRegistration", (request, response) => {
  queries
    .list("guideRegistration")
    .then(guideRegistration => {
      response.json({ guideRegistration });
    })
    .catch(error => console.log(error));
});

app.post("/basicInfo", (request, response) => {
  queries
    .createBasicInfo(request.body)
    .then(basicInfo => {
      response.status(201).json({ basicInfo: basicInfo });
    })
    .catch(console.error);
});

app.post("/companyEnrollment", (request, response) => {
  queries
    .createCompanyEnrollment(request.body)
    .then(companyEnrollment => {
      response.status(201).json({ companyEnrollment: companyEnrollment });
    })
    .catch(console.error);
});

app.post("/freeConsultation", (request, response) => {
  queries
    .createConsultation(request.body)
    .then(freeConsultation => {
      response.status(201).json({ freeConsultation: freeConsultation });
    })
    .catch(console.error);
});

app.post("/guideRegistration", (request, response) => {
  queries
    .createGuideInfo(request.body)
    .then(guideRegistration => {
      response.status(201).json({ guideRegistration: guideRegistration });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
