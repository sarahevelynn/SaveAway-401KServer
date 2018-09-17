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
  createEnrollmentInfo(enrollmentInfo) {
    return database("enrollmentInfo")
      .insert(enrollmentInfo)
      .returning("*")
      .then(record => record[0]);
  },
  createEmployeeInfo(employeeInfo) {
    return database("employeeInfo")
      .insert(employeeInfo)
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
  },
  createCompanyEnrollment2(companyEnrollment2) {
    return database("companyEnrollment2")
      .insert(companyEnrollment2)
      .returning("*")
      .then(record => record[0]);
  },
  createEnrollPayroll(enrollmentPayroll) {
    return database("enrollmentPayroll")
      .insert(enrollmentPayroll)
      .returning("*")
      .then(record => record[0]);
  },
  createBasicInfo2(basicInfo2) {
    return database("basicInfo2")
      .insert(basicInfo2)
      .returning("*")
      .then(record => record[0]);
  },
  createBasicInfo3(basicInfo3) {
    return database("basicInfo3")
      .insert(basicInfo3)
      .returning("*")
      .then(record => record[0]);
  },
  createBasicInfo4(basicInfo4) {
    return database("basicInfo4")
      .insert(basicInfo4)
      .returning("*")
      .then(record => record[0]);
  }
};
