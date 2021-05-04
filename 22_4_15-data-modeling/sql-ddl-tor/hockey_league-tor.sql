-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "teams" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "team_name" VARCHAR(16)   NOT NULL,
    "season_id" INT REFERENCES seasons(id)  NOT NULL
);

CREATE TABLE "seasons" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "start_date" DATE   NOT NULL,
    "end_date" DATE   NOT NULL
);

CREATE TABLE "players" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "jersey_name" VARCHAR(10)   NOT NULL,
    "phone" VARCHAR(15)   NOT NULL,
    "jersey_num" INT UNIQUE  NOT NULL
);

CREATE TABLE "refs" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL
);

CREATE TABLE "team_rosters" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "season_id" INT REFERENCES seasons(id)  NOT NULL,
    "team_id" INT REFERENCES teams(id)  NOT NULL,
    "player_id" INT REFERENCES players(id)  NOT NULL
);

CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "game_datetime" DATETIME   NOT NULL,
    "rink" VARCHAR(15)   NOT NULL,
    "team_id_home" INT REFERENCES teams(id)  NOT NULL,
    "team_id_away" INT REFERENCES teams(id)  NOT NULL,
    "ref1_id" INT REFERENCES refs(id)  NOT NULL,
    "ref2_id" INT REFERENCES refs(id),
    "linie1_id" INT REFERENCES refs(id),
    "linie2_id" INT REFERENCES refs(id)
);

CREATE TABLE "goals" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "team_id" INT REFERENCES teams(id)  NOT NULL,
    "goal_id" INT REFERENCES players(id)  NOT NULL,
    "assist1_id" INT REFERENCES players(id),
    "assist2_id" INT REFERENCES players(id),
    "game_id" INT REFERENCES games(id)  NOT NULL,
    "game_period" INT   NOT NULL,
    "period_time" TIME   NOT NULL
);

CREATE TABLE "shots" (
    "id" SERIAL   NOT NULL,
    "player_id" INT REFERENCES players(id)  NOT NULL,
    "game_id" INT REFERENCES games(id)  NOT NULL,
    "shots" INT CHECK (shots > 0) DEFAULT 1  NOT NULL
);

CREATE TABLE "penalties" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "team_id" INT REFERENCES teams(id)  NOT NULL,
    "player_id" INT REFERENCES players(id)  NOT NULL,
    "ref_id" INT REFERENCES refs(id)  NOT NULL,
    "penalty" TEXT  NOT NULL,
    "duration" INT (duration >= 2) DEFAULT 2
    "game_id" INT REFERENCES games(id)  NOT NULL,
    "game_period" INT   NOT NULL,
    "period_time" TIME   NOT NULL
);

CREATE INDEX "idx_teams_team_name"
ON "teams" ("team_name");

CREATE INDEX "idx_players_last_name"
ON "players" ("last_name");


-- I think I did this one backwards in the original diagram anyway:
-- ALTER TABLE "seasons" ADD CONSTRAINT "fk_seasons_id" FOREIGN KEY("id")
-- REFERENCES "teams" ("season_id");

-- ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_season_id" FOREIGN KEY("season_id")
-- REFERENCES "seasons" ("id");

-- ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_team_id" FOREIGN KEY("team_id")
-- REFERENCES "teams" ("id");

-- ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_player_id" FOREIGN KEY("player_id")
-- REFERENCES "players" ("id");

-- ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_home" FOREIGN KEY("team_id_home")
-- REFERENCES "teams" ("id");

-- ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_away" FOREIGN KEY("team_id_away")
-- REFERENCES "teams" ("id");

-- ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref1_id" FOREIGN KEY("ref1_id")
-- REFERENCES "refs" ("id");

-- ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref2_id" FOREIGN KEY("ref2_id")
-- REFERENCES "refs" ("id");
-- I also added space for two linies even though I'm  modeling this on NM Hockey which only has the two refs

-- ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_goal_id" FOREIGN KEY("goal_id")
-- REFERENCES "players" ("id");

-- ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist1_id" FOREIGN KEY("assist1_id")
-- REFERENCES "players" ("id");

-- ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist2_id" FOREIGN KEY("assist2_id")
-- REFERENCES "players" ("id");

-- ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_game_id" FOREIGN KEY("game_id")
-- REFERENCES "games" ("id");
-- also forgot team_id for the goal... kinda important

-- ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_player_id" FOREIGN KEY("player_id")
-- REFERENCES "players" ("id");

-- ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_game_id" FOREIGN KEY("game_id")
-- REFERENCES "players" ("id");

