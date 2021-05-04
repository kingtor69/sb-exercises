-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/u7zvwk
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- I didn't understand a lot of the way this output, so I edited it heavily

DROP DATABASE IF EXISTS med_center;

CREATE DATABASE med_center;

\c med_center

CREATE TABLE "doctors" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "speciality" TEXT  NOT NULL  DEFAULT 'General Practice'
);

CREATE TABLE "patients" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "preferred_phone" VARCHAR(15)   NOT NULL,
    "preferred_email" TEXT   NOT NULL,
    "birthday" DATE   NOT NULL,
);

CREATE TABLE "diseases" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "common_name" TEXT   NOT NULL,
    "scientific_name" TEXT   NOT NULL,
);

CREATE TABLE "diseases_patients" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "disease_id" INT  REFERENCES diseases  ON DELETE CASCADE,
    "patient_id" INT  NOT NULL  REFERENCES patients(id),
);

CREATE TABLE "doctors_patients" (
    "id" SERIAL PRIMARY KEY  NOT NULL,
    "patient_id" INT  NOT NULL  REFERENCES doctors(id),
    "doctor_id" INT  NOT NULL  REFERENCES patients(id),
);


CREATE INDEX "idx_doctors_last_name"
ON "doctors" ("last_name");

CREATE INDEX "idx_patients_last_name"
ON "patients" ("last_name");

CREATE INDEX "idx_patients_birthday"
ON "patients" ("birthday");

CREATE INDEX "idx_diseases_scientific_name"
ON "diseases" ("scientific_name");

CREATE INDEX "idx_diseases_patients_disease_id"
ON "diseases_patients" ("disease_id");

CREATE INDEX "idx_diseases_patients_patient_id"
ON "diseases_patients" ("patient_id");

CREATE INDEX "idx_doctors_patients_patient_id"
ON "doctors_patients" ("patient_id");

CREATE INDEX "idx_doctors_patients_doctor_id"
ON "doctors_patients" ("doctor_id");

