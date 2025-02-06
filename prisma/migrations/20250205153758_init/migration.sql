/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BabyCare` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MilkType" AS ENUM ('ASI', 'SUFOR');

-- CreateEnum
CREATE TYPE "DiaperType" AS ENUM ('PUP', 'POO');

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "BabyCare";

-- CreateTable
CREATE TABLE "Milk" (
    "id" SERIAL NOT NULL,
    "type" "MilkType" NOT NULL,
    "madeAt" TIMESTAMP(3) NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "madeAmount" INTEGER NOT NULL,
    "leftAmount" INTEGER NOT NULL,
    "amont" INTEGER NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Milk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sleep" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Sleep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diaper" (
    "id" SERIAL NOT NULL,
    "type" "DiaperType" NOT NULL,
    "madeAt" TIMESTAMP(3) NOT NULL,
    "total" INTEGER NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Diaper_pkey" PRIMARY KEY ("id")
);
