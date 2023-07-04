/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `blogs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `blogs_slug_key` ON `blogs`(`slug`);
