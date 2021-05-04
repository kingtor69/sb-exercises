-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/mHCMjC
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "regions" (
    "id" SERIAL   NOT NULL,
    "city" TEXT   NOT NULL,
    "state_province" TEXT   NOT NULL,
    "country" TEXT   NOT NULL,
    CONSTRAINT "pk_regions" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "users" (
    "id" SERIAL   NOT NULL,
    "home_region" INT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "username" TEXT   NOT NULL,
    CONSTRAINT "pk_users" PRIMARY KEY (
        "id"
     ),
    CONSTRAINT "uc_users_username" UNIQUE (
        "username"
    )
);

CREATE TABLE "posts" (
    "id" SERIAL   NOT NULL,
    "title" VARCHAR(20)   NOT NULL,
    "text" TEXT   NOT NULL,
    "region_id" INT   NOT NULL,
    "user_id" INT   NOT NULL,
    CONSTRAINT "pk_posts" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "categories" (
    "id" SERIAL   NOT NULL,
    "cat_name" VARCHAR(20)   NOT NULL,
    "cat_desc" TEXT   NOT NULL,
    CONSTRAINT "pk_categories" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "users-posts" (
    "id" SERIAL   NOT NULL,
    "user_id" INT   NOT NULL,
    "post_id" INT   NOT NULL,
    CONSTRAINT "pk_users-posts" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "posts-categories" (
    "id" SERIAL   NOT NULL,
    "post_id" INT   NOT NULL,
    "category_id" INT   NOT NULL,
    CONSTRAINT "pk_posts-categories" PRIMARY KEY (
        "id"
     )
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

