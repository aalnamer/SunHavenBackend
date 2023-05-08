\echo 'Delete and recreate sun_haven db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE sun_haven;
CREATE DATABASE sun_haven;
\connect sun_haven

\i sun_haven_schema.sql
\i sun_haven_seed.sql

\echo 'Delete and recreate sun_haven_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE sun_haven_test;
CREATE DATABASE sun_haven_test;
\connect sun_haven_test

\i sun_haven_schema.sql
