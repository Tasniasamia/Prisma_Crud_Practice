/*
  Warnings:

  - You are about to drop the column `userid` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userid]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_userid_fkey`;

-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `userid`;

-- CreateIndex
CREATE UNIQUE INDEX `customers_userid_key` ON `customers`(`userid`);
