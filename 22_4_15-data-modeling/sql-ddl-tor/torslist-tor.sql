-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/mHCMjC
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "regions" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "city" TEXT   NOT NULL,
    "state_province" TEXT,
    "country" TEXT,
);

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "home_region" INT REFERENCES regions(id)  NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "username" TEXT  UNIQUE NOT NULL
);

CREATE TABLE "posts" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "title" VARCHAR(20)   NOT NULL,
    "text" TEXT   NOT NULL,
    "region_id" INT REFERENCES regions(id)  NOT NULL,
    "user_id" INT REFERENCES users(id)  NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "cat_name" VARCHAR(20)   NOT NULL,
    "cat_desc" TEXT   NOT NULL
);

CREATE TABLE "users-posts" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "user_id" INT REFERENCES users(id)  NOT NULL,
    "post_id" INT REFERENCES posts(id)  NOT NULL
);

CREATE TABLE "posts-categories" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "post_id" INT REFERENCES posts(id)  NOT NULL,
    "category_id" INT REFERENCES categories(id)  NOT NULL
);

CREATE INDEX regions_index ON regions(city);
CREATE INDEX users_index ON users(username);
CREATE INDEX posts_index ON posts(title);
CREATE INDEX categories_index ON categories(cat_name);


-- ALTER TABLE "users" ADD CONSTRAINT "fk_users_home_region" FOREIGN KEY("home_region")
-- REFERENCES "regions" ("id");

-- ALTER TABLE "posts" ADD CONSTRAINT "fk_posts_region_id" FOREIGN KEY("region_id")
-- REFERENCES "regions" ("id");

-- ALTER TABLE "posts" ADD CONSTRAINT "fk_posts_user_id" FOREIGN KEY("user_id")
-- REFERENCES "users" ("id");

-- ALTER TABLE "users-posts" ADD CONSTRAINT "fk_users-posts_user_id" FOREIGN KEY("user_id")
-- REFERENCES "users" ("id");

-- ALTER TABLE "users-posts" ADD CONSTRAINT "fk_users-posts_post_id" FOREIGN KEY("post_id")
-- REFERENCES "posts" ("id");

-- ALTER TABLE "posts-categories" ADD CONSTRAINT "fk_posts-categories_post_id" FOREIGN KEY("post_id")
-- REFERENCES "posts" ("id");

-- ALTER TABLE "posts-categories" ADD CONSTRAINT "fk_posts-categories_category_id" FOREIGN KEY("category_id")
-- REFERENCES "categories" ("id");

