-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/u7zvwk
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "doctors" (
    "id" INT   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "speciality" TEXT  NOT NULL  DEFAULT,
    CONSTRAINT "pk_doctors" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "patients" (
    "id" int   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "preferred_phone" VARCHAR(15)   NOT NULL,
    "preferred_email" TEXT   NOT NULL,
    "birthday" DATE   NOT NULL,
    CONSTRAINT "pk_patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "diseases" (
    "id" int   NOT NULL,
    "common_name" TEXT   NOT NULL,
    "scientific_name" TEXT   NOT NULL,
    CONSTRAINT "pk_diseases" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "diseases_patients" (
    "id" int   NOT NULL,
    "disease_id" INT   NOT NULL,
    "patient_id" INT   NOT NULL,
    CONSTRAINT "pk_diseases_patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "doctors_patients" (
    "id" int   NOT NULL,
    "patient_id" INT   NOT NULL,
    "doctor_id" INT   NOT NULL,
    CONSTRAINT "pk_doctors_patients" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "diseases_patients" ADD CONSTRAINT "fk_diseases_patients_disease_id" FOREIGN KEY("disease_id")
REFERENCES "diseases" ("id");

ALTER TABLE "diseases_patients" ADD CONSTRAINT "fk_diseases_patients_patient_id" FOREIGN KEY("patient_id")
REFERENCES "patients" ("id");

ALTER TABLE "doctors_patients" ADD CONSTRAINT "fk_doctors_patients_patient_id" FOREIGN KEY("patient_id")
REFERENCES "patients" ("id");

ALTER TABLE "doctors_patients" ADD CONSTRAINT "fk_doctors_patients_doctor_id" FOREIGN KEY("doctor_id")
REFERENCES "doctors" ("id");

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

