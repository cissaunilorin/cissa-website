/*
  Warnings:

  - You are about to drop the column `attendees` on the `events` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `attendees`,
    ADD COLUMN `imageUrl` VARCHAR(255) NOT NULL;
