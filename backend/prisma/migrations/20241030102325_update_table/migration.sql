/*
  Warnings:

  - You are about to drop the column `stock` on the `barang` table. All the data in the column will be lost.
  - You are about to drop the column `alamat` on the `suplier` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `suplier` table. All the data in the column will be lost.
  - Added the required column `image` to the `barang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stok` to the `barang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alamat_suplier` to the `suplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_suplier` to the `suplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `barang` DROP COLUMN `stock`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `stok` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `suplier` DROP COLUMN `alamat`,
    DROP COLUMN `phone`,
    ADD COLUMN `alamat_suplier` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_suplier` VARCHAR(191) NOT NULL;
