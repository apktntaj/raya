/*
  Warnings:

  - You are about to drop the column `amont` on the `Milk` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Milk` table. All the data in the column will be lost.
  - You are about to drop the column `expiredAt` on the `Milk` table. All the data in the column will be lost.
  - You are about to drop the column `leftAmount` on the `Milk` table. All the data in the column will be lost.
  - You are about to drop the column `madeAmount` on the `Milk` table. All the data in the column will be lost.
  - You are about to drop the `Diaper` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sleep` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `qty` to the `Milk` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `Milk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Milk" DROP COLUMN "amont",
DROP COLUMN "desc",
DROP COLUMN "expiredAt",
DROP COLUMN "leftAmount",
DROP COLUMN "madeAmount",
ADD COLUMN     "amount" INTEGER NOT NULL DEFAULT qty - COALESCE(left, 0),
ADD COLUMN     "left" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "qty" INTEGER NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "madeAt" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Diaper";

-- DropTable
DROP TABLE "Sleep";

-- DropEnum
DROP TYPE "DiaperType";

-- DropEnum
DROP TYPE "MilkType";
