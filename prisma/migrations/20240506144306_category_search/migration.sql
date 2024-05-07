-- DropIndex
DROP INDEX `RawMaterial_category_name_description_idx` ON `RawMaterial`;

-- CreateIndex
CREATE FULLTEXT INDEX `RawMaterial_category_idx` ON `RawMaterial`(`category`);
