import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary(),
        table.string('name', 50).notNullable(),
        table.string('email', 100).notNullable().unique(),
        table.string('password', 200).notNullable(),
        table.boolean('admin'),
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users')
}

