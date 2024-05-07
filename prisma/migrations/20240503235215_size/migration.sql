/*
  Warnings:

  - You are about to drop the column `unit` on the `RawMaterial` table. All the data in the column will be lost.
  - Added the required column `size` to the `RawMaterial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RawMaterial` DROP COLUMN `unit`,
    ADD COLUMN `size` VARCHAR(191) NOT NULL;
