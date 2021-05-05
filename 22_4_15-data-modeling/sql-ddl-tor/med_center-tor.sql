-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/u7zvwk
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

DROP DATABASE IF EXISTS med_center;

CREATE DATABASE med_center;

\c med_center



CREATE TABLE "doctors" (
    "id" SERIAL   NOT NULL,
    "last_name" TEXT   NOT NULL,
    "first_name" TEXT   NOT NULL,
    "speciality" TEXT  NOT NULL  DEFAULT 'Family Practice',
    CONSTRAINT "pk_doctors" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "patients" (
    "id" SERIAL   NOT NULL,
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
    "id" SERIAL   NOT NULL,
    "common_name" TEXT   NOT NULL,
    "scientific_name" TEXT   NOT NULL,
    CONSTRAINT "pk_diseases" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "diseases_patients" (
    "id" SERIAL   NOT NULL,
    "disease_id" INT   NOT NULL,
    "patient_id" INT   NOT NULL,
    CONSTRAINT "pk_diseases_patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "doctors_patients" (
    "id" SERIAL   NOT NULL,
    "patient_id" INT   NOT NULL,
    "doctor_id" INT   NOT NULL,
    CONSTRAINT "pk_doctors_patients" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "doctor_visit" (
    "id" SERIAL NOT NULL,
    "patient_id" INT REFERENCES patients(id) NOT NULL,
    "doctor_id" INT REFERENCES doctors(id) NOT NULL,
    "date_time" TIMESTAMP NOT NULL,
    "preexisting_condition" BOOLEAN DEFAULT false,
    "preexisting_id" INT REFERENCES diseases_patients,
    "primary_diagnosis" INT REFERENCES diseases(id),
    "secondary_diagnosis" INT REFERENCES diseases(id),
    "treatment_prescribed" TEXT
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

INSERT INTO doctors
    (last_name, first_name)
    VALUES
        ('Roberts', 'Bob'),
        ('Helper', 'Mothers Little');

INSERT INTO patients
    (last_name, first_name, preferred_phone, preferred_email, birthday)
    VALUES
        ('Man', 'Mr.', '20 7234 3456', 'father@man.family', '1951-01-01'),
        ('Every', 'Mother', '20 2593 7890', 'mother@every.family', '1956-12-11');

INSERT INTO diseases
    (common_name, scientific_name)
    VALUES
        ('Feeling old and worse', 'Roberts Syndrome'),
        ('drag it is getting old', 'anxiety');

INSERT INTO diseases_patients
    (disease_id, patient_id)
    VALUES
        (2, 2),
        (1, 2),
        (1, 1);

INSERT INTO doctors_patients
    (patient_id, doctor_id)
    VALUES
        (2, 2),
        (1, 1), 
        (1, 2);
    
INSERT INTO doctor_visit
    (date_time, patient_id, doctor_id, preexisting_condition, primary_diagnosis, treatment_prescribed)
    VALUES
        ('1967-10-12', 1, 1, false, 1, 'what you need'),
        ('1966-12-23', 2, 2, true, 2, 'little yellow pill');

-- tests
SELECT 
    date_time, patients.last_name AS patient, doctors.last_name AS doctor, diseases.common_name, treatment_prescribed
    FROM doctor_visit
    JOIN patients
    ON doctor_visit.patient_id = patients.id
    JOIN doctors
    ON doctor_visit.doctor_id = doctors.id
    JOIN diseases
    ON doctor_visit.primary_diagnosis = diseases.id;

SELECT
    patients.first_name, patients.last_name, diseases.common_name
    FROM diseases_patients
    JOIN patients 
    ON diseases_patients.patient_id = patients.id
    JOIN diseases
    ON diseases_patients.disease_id = diseases.id
    GROUP BY patients.last_name, patients.first_name, diseases.common_name; 