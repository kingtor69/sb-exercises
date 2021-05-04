-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "teams" (
    "id" SERIAL   NOT NULL,
    "team_name" VARCHAR(16)   NOT NULL,
    "season_id" INT   NOT NULL,
    CONSTRAINT "pk_teams" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "seasons" (
    "id" SERIAL   NOT NULL,
    "start_date" DATE   NOT NULL,
    "end_date" DATE   NOT NULL,
    CONSTRAINT "pk_seasons" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "players" (
    "id" SERIAL   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "jersey_name" TEXT   NOT NULL,
    "phone" VARCHAR(15)   NOT NULL,
    "jersey_num" INT   NOT NULL,
    CONSTRAINT "pk_players" PRIMARY KEY (
        "id"
     ),
    CONSTRAINT "uc_players_jersey_num" UNIQUE (
        "jersey_num"
    )
);

CREATE TABLE "team_rosters" (
    "id" SERIAL   NOT NULL,
    "season_id" INT   NOT NULL,
    "team_id" INT   NOT NULL,
    "player_id" INT   NOT NULL,
    CONSTRAINT "pk_team_rosters" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "games" (
    "id" SERIAL   NOT NULL,
    "game_datetime" DATETIME   NOT NULL,
    "rink" VARCHAR(15)   NOT NULL,
    "team_id_home" INT   NOT NULL,
    "team_id_away" INT   NOT NULL,
    "ref1_id" INT   NOT NULL,
    "ref2_id" INT   NOT NULL,
    CONSTRAINT "pk_games" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "goals" (
    "id" SERIAL   NOT NULL,
    "goal_id" INT   NOT NULL,
    "assist1_id" INT   NOT NULL,
    "assist2_id" INT   NOT NULL,
    "game_id" INT   NOT NULL,
    "game_period" INT   NOT NULL,
    "period_time" TIME   NOT NULL,
    CONSTRAINT "pk_goals" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "shots" (
    "id" SERIAL   NOT NULL,
    "player_id" INT   NOT NULL,
    "game_id" INT   NOT NULL,
    "shots" INT   NOT NULL,
    CONSTRAINT "pk_shots" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "refs" (
    "id" SERIAL   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    CONSTRAINT "pk_refs" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "seasons" ADD CONSTRAINT "fk_seasons_id" FOREIGN KEY("id")
REFERENCES "teams" ("season_id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_season_id" FOREIGN KEY("season_id")
REFERENCES "seasons" ("id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_team_id" FOREIGN KEY("team_id")
REFERENCES "teams" ("id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_player_id" FOREIGN KEY("player_id")
REFERENCES "players" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_home" FOREIGN KEY("team_id_home")
REFERENCES "teams" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_away" FOREIGN KEY("team_id_away")
REFERENCES "teams" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref1_id" FOREIGN KEY("ref1_id")
REFERENCES "refs" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref2_id" FOREIGN KEY("ref2_id")
REFERENCES "refs" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_goal_id" FOREIGN KEY("goal_id")
REFERENCES "players" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist1_id" FOREIGN KEY("assist1_id")
REFERENCES "players" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist2_id" FOREIGN KEY("assist2_id")
REFERENCES "players" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_game_id" FOREIGN KEY("game_id")
REFERENCES "games" ("id");

ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_player_id" FOREIGN KEY("player_id")
REFERENCES "players" ("id");

ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_game_id" FOREIGN KEY("game_id")
REFERENCES "players" ("id");

CREATE INDEX "idx_teams_team_name"
ON "teams" ("team_name");

CREATE INDEX "idx_players_last_name"
ON "players" ("last_name");

