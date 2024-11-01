import knex, { Knex } from "knex";

const connectedKnex: Knex = knex({
    client: "sqlite3",
    connection: {
        filename: "data.sqlite3"
    }
});

export default connectedKnex;
