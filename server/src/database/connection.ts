import knex from 'knex';

/*const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'connection', 'database.sqlite')
    },
    useNullAsDefault: true,
});*/

const db = knex({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : 'docker',
        database : 'db_proffy'
      },
    useNullAsDefault: true,
});

export default db;