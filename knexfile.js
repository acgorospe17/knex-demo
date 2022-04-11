// Update with your config settings.

/*
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
*/

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'docker',
      database: 'movies_database',
    }
  }

};

// connection: 'postgres://postgres:docker@localhost:8081/movies_database'