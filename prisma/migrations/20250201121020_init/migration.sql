-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BabyCare" (
    "id" SERIAL NOT NULL,
    "tidur" INTEGER NOT NULL,
    "susu" INTEGER NOT NULL,
    "pampers" INTEGER NOT NULL,

    CONSTRAINT "BabyCare_pkey" PRIMARY KEY ("id")
);
