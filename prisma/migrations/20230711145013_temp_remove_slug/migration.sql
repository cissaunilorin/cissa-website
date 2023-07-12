/*
  Warnings:

  - You are about to drop the column `slug` on the `blogs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `blogs_slug_key` ON `blogs`;

-- AlterTable
ALTER TABLE `blogs` DROP COLUMN `slug`;
