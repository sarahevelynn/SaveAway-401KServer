exports.up = function(knex, Promise) {
  return knex.schema.createTable("basicInfo", table => {
    table.increments("id").primary();
    table.text("FullName");
    table.text("CompanyEmail");
    table.text("State");
    table.text("CompanyName");
    table.text("CompanyPhone");
    table.text("EmployeeNumber");
    table.text("payroll");
    table.text("provider");
    table.text("heardAbout");
    table.text("Admin");
    table.text("AdminName");
    table.text("AdminPhone");
    table.text("AdminEmail");
    table.text("PlanStatus");
    table.text("checked");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("basicInfo");
};
