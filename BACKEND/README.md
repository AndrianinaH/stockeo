# backend

Stockeo backend is a restfull API run and serve in Deno

## techno

- deno (javascript runtime),
- oak(REST API),
- planetscale (db),
- prisma (orm)

## run in localhost

in your local shell from the root folder, run

    deno task dev

## deploy

Just `push` or `merge` in main branch with git

It will rebuild the server host in https://dash.deno.com/

## database

The database is host in planetscale https://app.planetscale.com/ who is a serverless scalable mysql database

## prisma and db migration

For now Prisma is the only stable ORM in Deno (waiting for drizzle to support mysql and turso)

## migration

to update the database table :

1.  update the `./prisma/schema.prisma` from the root folder add your change (new table, new column, ...)
2.  edit the local `.env` to use `DATABASE_URL=mysql://`
3.  in your local shell from the root folder, run

        deno task prisma:db:push

4.  and to update the ORM typescript schema use in local and production, run

        deno task prisma:generate:client

5.  edit the local `.env` to use `DATABASE_URL=prisma://`
