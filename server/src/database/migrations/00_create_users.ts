import Knex from "knex";

const uuidGenerationRaw =
  process.env.NODE_ENV !== "production"
    ? `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    : `uuid_generate_v4()`;
const tableName = "users";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.uuid("id").primary().defaultTo(knex.raw(uuidGenerationRaw));
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
