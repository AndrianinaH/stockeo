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

The database is host in supabase https://supabase.com/ who is a serverless scalable postgresql database

## denodb and db migration

For now DenoDB is the only stable ORM in Deno (waiting for drizzle to be maintained)

## migration

DenoDB https://deno.land/x/denodb@v1.4.0 is the ORM use to manipulate database
to update the database tables :

1- update the concerned models
2- uncomment the sync() function for migration
3- comment the sync() function to avoid drop data
