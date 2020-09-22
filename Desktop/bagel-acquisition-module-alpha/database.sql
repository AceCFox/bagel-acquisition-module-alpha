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
