-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `role` ENUM('USER', 'ADMIN', 'EDITOR') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departments` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `shortName` VARCHAR(3) NOT NULL,
    `matric` VARCHAR(255) NOT NULL,
    `HOD` VARCHAR(255) NOT NULL,
    `about` VARCHAR(191) NULL,

    UNIQUE INDEX `departments_shortName_key`(`shortName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `code` VARCHAR(6) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `credit` INTEGER NOT NULL,
    `status` ENUM('C', 'E', 'R') NOT NULL DEFAULT 'C',
    `departmentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `executives` (
    `id` VARCHAR(191) NOT NULL,
    `position` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('CISSA', 'SRC', 'STAFF') NOT NULL DEFAULT 'CISSA',
    `order` INTEGER NOT NULL DEFAULT 1,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `executives_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `imageUrl` VARCHAR(255) NOT NULL,
    `price` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `venue` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogs` (
    `id` VARCHAR(191) NOT NULL,
    `heading` VARCHAR(255) NOT NULL,
    `imageUrl` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `draft` BOOLEAN NOT NULL DEFAULT false,
    `content` LONGTEXT NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `blogs_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogTags` (
    `id` VARCHAR(191) NOT NULL,
    `blogId` VARCHAR(191) NOT NULL,
    `tagId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `executives` ADD CONSTRAINT `executives_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blogs` ADD CONSTRAINT `blogs_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blogTags` ADD CONSTRAINT `blogTags_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `blogs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blogTags` ADD CONSTRAINT `blogTags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `slug` on the `blogs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `blogs_slug_key` ON `blogs`;

-- AlterTable
ALTER TABLE `blogs` DROP COLUMN `slug`;

/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `blogs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogs` ADD COLUMN `slug` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `blogs_slug_key` ON `blogs`(`slug`);

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
