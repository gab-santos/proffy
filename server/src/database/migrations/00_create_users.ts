import Knex from "knex";

const tableName = "users";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("id").primary().defaultTo("(UUID())");
    table.string("name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();

    table.string("avatar").nullable();
    table.string("bio").nullable();
    table.string("whatsapp").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
