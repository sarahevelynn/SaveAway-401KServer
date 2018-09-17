const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createBasicInfo(basicInfo) {
    return database("basicInfo")
      .insert(basicInfo)
      .returning("*")
      .then(record => record[0]);
  },
  createCompanyEnrollment(companyEnrollment) {
    return database("companyEnrollment")
      .insert(companyEnrollment)
      .returning("*")
      .then(record => record[0]);
  },
  createConsultation(freeConsultation) {
    return database("freeConsultation")
      .insert(freeConsultation)
      .returning("*")
      .then(record => record[0]);
  },
  createGuideInfo(guideRegistration) {
    return database("guideRegistration")
      .insert(guideRegistration)
      .returning("*")
      .then(record => record[0]);
  }
};
