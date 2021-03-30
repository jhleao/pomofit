CREATE DATABASE pomofit;

-- \c pomofit

CREATE TABLE "users" (
  "id" varchar NOT NULL,
  "google_id" varchar,
  "name" varchar NOT NULL,
  "email" varchar,
  "img" varchar,
  "xp" int DEFAULT 0,
  "theme_name" varchar DEFAULT 'light',
  "completed_count" int DEFAULT 0,
  "failed_count" int DEFAULT 0,
  "started_count" int DEFAULT 0,
  "canceled_count" int DEFAULT 0
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");