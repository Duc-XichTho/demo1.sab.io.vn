import {
    MAPPING_TABLE_SAB_KTQT
} from "../postgres/postgres.js";


export const updateDMFromSABService = async () => {
    if (MAPPING_TABLE_SAB_KTQT?.length > 0) {
        for (const table of MAPPING_TABLE_SAB_KTQT) {
            if (!table.ktqt) {
                console.error("Error: table.ktqt is undefined");
                continue;
            }

            const tableSAB = await table.sab.findAll({
                where: {
                    show: true
                },
                raw: true
            });
            const tableKTQT = await table.ktqt.findAll({
                where: {
                    show: true
                },
                raw: true
            });
            // Check if tableKTQT is an array
            if (!Array.isArray(tableKTQT)) {
                console.error("Error: tableKTQT is not an array", tableKTQT);
                continue; // Skip this mapping if it's not iterable
            }

            // Create a map for quick lookup of KTQT records by code
            const ktqtMap = new Map();
            for (const ktqtRecord of tableKTQT) {
                ktqtMap.set(ktqtRecord.code, ktqtRecord);
            }

            // Iterate over each record in tableSAB
            for (const sabRecord of tableSAB) {
                const ktqtRecord = ktqtMap.get(sabRecord.code);

                if (ktqtRecord) {
                    // Record exists in KTQT, update matching fields
                    for (const key in sabRecord) {
                        // Chỉ cập nhật các trường không phải là 'code' và 'id'
                        if (key !== 'code' && key !== 'id' && ktqtRecord.hasOwnProperty(key)) {
                            ktqtRecord[key] = sabRecord[key]; // Update field
                        }
                    }
                    // Save updated record back to database
                    await table.ktqt.update(ktqtRecord, {
                        where: {
                            code: ktqtRecord.code
                        }
                    });
                } else {
                    // No matching record found in KTQT, create a new one
                    const newKTQTRecord = {
                        ...sabRecord
                    };
                    delete newKTQTRecord.id; // Assuming id is auto-generated
                    await table.ktqt.create(newKTQTRecord);
                }
            }

        }
    }

};