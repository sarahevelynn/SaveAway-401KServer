exports.up = function(knex, Promise) {
  return knex.schema.createTable("companyEnrollment", table => {
    table.increments("id").primary();
    table.text("companyName");
    table.text("accountName");
    table.text("companyPhone");
    table.text("signupEmail");
    table.text("signupAdressStreet");
    table.text("signupAdressApt");
    table.text("signupAdressCity");
    table.text("signupAdressState");
    table.text("signupAdressZip");
    table.text("companyEIN");
    table.text("businessHours");
    table.text("AutoEnroll");
    table.text("enrollmentPercentage");
    table.text("planType");
    table.text("provider");
    table.text("paymentCycle");
    table.text("Admin");
    table.text("AdminName");
    table.text("AdminPhone");
    table.text("AdminEmail");
    table.text("PlanStatus");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("companyEnrollment");
};
