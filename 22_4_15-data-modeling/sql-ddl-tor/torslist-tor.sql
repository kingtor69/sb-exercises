-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/mHCMjC
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

DROP DATABASE IF EXISTS torslist;

CREATE DATABASE torslist;

\c torslist

CREATE TABLE "regions" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "region_name" TEXT   NOT NULL,
    "state_province" TEXT,
    "country" TEXT
);

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "home_region" INT   NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "username" TEXT UNIQUE  NOT NULL
);

CREATE TABLE "posts" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "title" VARCHAR(20)   NOT NULL,
    "text" TEXT   NOT NULL,
    "region_id" INT   NOT NULL,
    "user_id" INT   NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "cat_name" VARCHAR(20)   NOT NULL,
    "cat_desc" TEXT   NOT NULL
);

CREATE TABLE "users-posts" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "user_id" INT   NOT NULL,
    "post_id" INT   NOT NULL
);

CREATE TABLE "posts-categories" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "post_id" INT   NOT NULL,
    "category_id" INT   NOT NULL
);

ALTER TABLE "users" ADD CONSTRAINT "fk_users_home_region" FOREIGN KEY("home_region")
REFERENCES "regions" ("id");

ALTER TABLE "posts" ADD CONSTRAINT "fk_posts_region_id" FOREIGN KEY("region_id")
REFERENCES "regions" ("id");

ALTER TABLE "posts" ADD CONSTRAINT "fk_posts_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("id");

ALTER TABLE "users-posts" ADD CONSTRAINT "fk_users-posts_user_id" FOREIGN KEY("user_id")
REFERENCES "users" ("id");

ALTER TABLE "users-posts" ADD CONSTRAINT "fk_users-posts_post_id" FOREIGN KEY("post_id")
REFERENCES "posts" ("id");

ALTER TABLE "posts-categories" ADD CONSTRAINT "fk_posts-categories_post_id" FOREIGN KEY("post_id")
REFERENCES "posts" ("id");

ALTER TABLE "posts-categories" ADD CONSTRAINT "fk_posts-categories_category_id" FOREIGN KEY("category_id")
REFERENCES "categories" ("id");

INSERT INTO regions (region_name, state_province, country) 
    VALUES 
        ('Albuquerque', 'New Mexico', 'United States of America'),
        ('Ann Arbor', 'Michigan', 'United States of America'),
        ('Thunder Bay', 'Ontario', 'Canada');

INSERT INTO users (home_region, username, last_name, first_name)
    VALUES
        (1, 'kingtor', 'Kingwards', NULL),
        (2, 'hans_ghost', 'Berg', 'Hans'),
        (3, 'elsaled', NULL, 'Eduardo');

INSERT INTO 