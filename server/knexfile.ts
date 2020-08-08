import path from 'path';

module.exports = {
    /*client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,*/
//    development: {
        client: 'pg',
    connection: {
        database : 'db_proffy',
        user : 'postgres',
        password : 'docker',
        host : 'localhost',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
//    }
};