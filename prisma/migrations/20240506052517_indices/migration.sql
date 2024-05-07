-- CreateIndex
CREATE FULLTEXT INDEX `RawMaterial_category_name_description_idx` ON `RawMaterial`(`category`, `name`, `description`);
