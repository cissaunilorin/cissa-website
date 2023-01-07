-- AlterTable
ALTER TABLE `blogs` ADD COLUMN `draft` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;
