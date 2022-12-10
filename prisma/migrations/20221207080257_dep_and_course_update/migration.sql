/*
  Warnings:

  - The primary key for the `courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `courses` table. All the data in the column will be lost.
  - You are about to alter the column `code` on the `courses` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(6)`.
  - Added the required column `shortName` to the `departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `code` VARCHAR(6) NOT NULL,
    ADD PRIMARY KEY (`code`);

-- AlterTable
ALTER TABLE `departments` ADD COLUMN `shortName` VARCHAR(3) NOT NULL;
