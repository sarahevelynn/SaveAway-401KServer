exports.up = function(knex, Promise) {
  return knex.schema.createTable("guideRegistration", table => {
    table.increments("id").primary();
    table.text("signupName");
    table.text("signupEmail");
    table.text("signupPhone");
    table.text("signupCoName");
    table.text("EmployeeNumber");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("guideRegistration");
};
