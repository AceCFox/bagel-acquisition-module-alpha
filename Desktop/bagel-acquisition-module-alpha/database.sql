-- Create a postgresql database called "bread-box" and run the following queries in order:

CREATE TABLE "item"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50),
    "tag_id" INT REFERENCES "tag",
    "refresh period" INT);

CREATE TABLE "store"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (50),
	"status" VARCHAR (50)
);

CREATE TABLE "store-item"(
	"id" SERIAL PRIMARY KEY,
	"store_id" INT REFERENCES "store",
	"item_id" INT REFERENCES "item"
);

CREATE TABLE "tag"(
    "id" SERIAL PRIMARY KEY,
    "color" VARCHAR(20),
    "label" VARCHAR(50)
);

INSERT INTO "store"(
"name", "status") VALUES
    ('Aldi', 'favorite'),
    ('Target', null),
    ('Shuang Hur', null),
    ('Wedge', null),
    ('Cub', null);