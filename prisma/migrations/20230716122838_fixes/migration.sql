/*
  Warnings:

  - Made the column `about` on table `departments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `imageUrl` to the `executives` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `departments` MODIFY `about` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `executives` ADD COLUMN `imageUrl` VARCHAR(255) NOT NULL,
    MODIFY `description` LONGTEXT NOT NULL;
