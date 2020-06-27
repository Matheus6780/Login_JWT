import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("users").del()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert([
                {  name: "Alias", email: 'alias@anemail.com', 
                    password: 'aliasPassword', admin: true },
                {  name: "Oscar", email: 'oscar@anemail.com', 
                    password: 'oscar', admin: true }

                
            ]);
        });
};
