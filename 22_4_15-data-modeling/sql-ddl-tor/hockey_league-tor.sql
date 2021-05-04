-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
DROP DATABASE IF EXISTS hockey_league;

CREATE DATABASE hockey_league;

\c hockey_league



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
    "first_game_date" DATE   NOT NULL,
    "championship_date" DATE   NOT NULL,
    CONSTRAINT "pk_seasons" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "players" (
    "last_name" TEXT,
    "first_name" TEXT,
    "jersey_name" TEXT   NOT NULL,
    "phone" VARCHAR(15),
    "jersey_num" INT PRIMARY KEY CHECK (jersey_num >= -1) NOT NULL
    -- jersey number -1 is reserved for bench penalties
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
    "game_datetime" TIMESTAMP   NOT NULL,
    "rink" VARCHAR(15)   NOT NULL,
    "team_id_home" INT   NOT NULL,
    "team_id_away" INT   NOT NULL,
    "ref1_id" INT   NOT NULL,
    "ref2_id" INT,
    "ref3_id" INT,
    "ref4_id" INT,
    CONSTRAINT "pk_games" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "goals" (
    "id" SERIAL   NOT NULL,
    "team_id" INT  NOT NULL,
    "goal_id" INT   NOT NULL,
    "assist1_id" INT,
    "assist2_id" INT,
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

CREATE TABLE "penalties" (
    "id" SERIAL NOT NULL,
    "offending_player_id" INT REFERENCES players(jersey_num),
    "offending_team" INT REFERENCES teams(id),
    "calling_ref" INT REFERENCES refs(id),
    "penalty" VARCHAR(12) NOT NULL,
    "penalty_minutes" INT CHECK (penalty_minutes >= 2),
    "game_id" INT REFERENCES games(id),
    "game_period" INT CHECK (game_period > 0),
    "period_time" TIME NOT NULL
);

ALTER TABLE "teams" ADD CONSTRAINT "fk_teams_id" FOREIGN KEY("season_id")
REFERENCES "seasons" ("id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_season_id" FOREIGN KEY("season_id")
REFERENCES "seasons" ("id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_team_id" FOREIGN KEY("team_id")
REFERENCES "teams" ("id");

ALTER TABLE "team_rosters" ADD CONSTRAINT "fk_team_rosters_player_id" FOREIGN KEY("player_id")
REFERENCES "players" ("jersey_num");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_home" FOREIGN KEY("team_id_home")
REFERENCES "teams" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_team_id_away" FOREIGN KEY("team_id_away")
REFERENCES "teams" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref1_id" FOREIGN KEY("ref1_id")
REFERENCES "refs" ("id");

ALTER TABLE "games" ADD CONSTRAINT "fk_games_ref2_id" FOREIGN KEY("ref2_id")
REFERENCES "refs" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_team_id" FOREIGN KEY("team_id")
REFERENCES "teams" ("id");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_goal_id" FOREIGN KEY("goal_id")
REFERENCES "players" ("jersey_num");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist1_id" FOREIGN KEY("assist1_id")
REFERENCES "players" ("jersey_num");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_assist2_id" FOREIGN KEY("assist2_id")
REFERENCES "players" ("jersey_num");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_game_id" FOREIGN KEY("game_id")
REFERENCES "games" ("id");

ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_player_id" FOREIGN KEY("player_id")
REFERENCES "players" ("jersey_num");

ALTER TABLE "shots" ADD CONSTRAINT "fk_shots_game_id" FOREIGN KEY("game_id")
REFERENCES "players" ("jersey_num");

CREATE INDEX "idx_teams_team_name"
ON "teams" ("team_name");

CREATE INDEX "idx_players_last_name"
ON "players" ("last_name");

INSERT INTO players
    (jersey_name, jersey_num)
    VALUES
        ('BENCH', -1),
        ('MONGATROLL', 69),
        ('HAAART', 25),
        ('COOGAN', 12),
        ('NOONAN', 93),
        ('ANTONEE', 24),
        ('CLIFFORD', 62),
        ('OVERBECK', 29),
        ('GRETZKY', 99),
        ('DATSYUK', 13),
        ('ZETTERBERG', 55),
        ('LEGACE', 23),
        ('LIDSTROM', 5);

INSERT INTO refs
    (last_name, first_name)
    VALUES
        ('Bossman', 'Kelly'),
        ('Morin', 'Scott'),
        ('Kneeland', 'Jay'),
        ('Homis', 'Doug');

INSERT INTO seasons
    (first_game_date, championship_date)
    VALUES
        ('2021-07-30', '2021-12-12');

INSERT INTO teams
    (team_name, season_id)
    VALUES
        ('Rocket Racoon', 1),
        ('Wonder Woman', 1);

INSERT INTO team_rosters
    (season_id, team_id, player_id)
    VALUES
        (1, 1, -1),
        (1, 2, -1),
        (1, 1, 69),
        (1, 1, 25),
        (1, 1, 12),
        (1, 1, 93),
        (1, 1, 24),
        (1, 1, 62),
        (1, 2, 24),
        (1, 2, 99),
        (1, 2, 13),
        (1, 2, 55),
        (1, 2, 23),
        (1, 2, 5);

INSERT INTO games
    (game_datetime, rink, team_id_home, team_id_away, ref1_id, ref2_id, ref3_id, ref4_id)
    VALUES
        ('2021-08-18 17:30:00', 'Outpost North', 1, 2, 3, 2, 1, 4);

INSERT INTO goals 
    (team_id, goal_id, assist1_id, assist2_id, game_id, game_period, period_time)
    VALUES
        (1, 69, 12, NULL, 1, 1, '00:02:45'),
        (2, 13, 55, 5, 1, 1, '00:02:48'),
        (1, 62, 24, 25, 1, 1, '00:12:34'),
        (2, 99, 5, 23, 1, 2, '18:32');

INSERT INTO penalties
    (game_id, game_period, period_time, offending_team, offending_player_id, calling_ref, penalty, penalty_minutes)
    VALUES
        (1, 2, '00:11:24', 2, 55, 2, 'roughing', 2),
        (1, 3, '00:09:13', 1, 29, 2, 'tripping', 2);

-- test
SELECT 
        games.game_datetime, game_period, period_time, teams.team_name, goal_id, players.jersey_name, assist1_id, assist2_id
    FROM goals
    JOIN games
    ON goals.game_id = games.id
    JOIN players
    ON goals.goal_id = players.jersey_num
    JOIN teams
    ON goals.team_id = teams.id;

-- question how (or can I?) get the names of the assisting players?
    -- ON goals.assist1_id = players.jersey_num
    -- ON goals.assist2_id = players.jersey_num;

SELECT
        games.game_datetime, game_period, period_time, teams.team_name, players.jersey_num, players.jersey_name, refs.last_name
    FROM penalties
    JOIN games
    ON penalties.game_id = games.id
    JOIN teams
    ON penalties.offending_team = teams.id
    JOIN players
    ON penalties.offending_player_id = players.jersey_num
    JOIN refs
    ON penalties.calling_ref = refs.id;
