/*
  Warnings:

  - You are about to drop the column `subDeanName` on the `departments` table. All the data in the column will be lost.
  - Added the required column `HOD` to the `departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `departments` DROP COLUMN `subDeanName`,
    ADD COLUMN `HOD` VARCHAR(255) NOT NULL;
