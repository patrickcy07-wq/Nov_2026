    
import * as XLSX from 'xlsx';
import path from 'path';


export class ExcelReader {
    static getRow(sheetName: string, rowNumber: number): Record<string, string> {
        const filePath = path.resolve('Excel/TestData.xlsx');
        
        const workbook = XLSX.readFile(filePath);
        const sheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Worksheet "${sheetName}" not found`);
        }

        const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
            sheet,
            { defval: '', raw: false }
        );

        const data = rows[rowNumber - 2];

        if (!data) {
            throw new Error(`No data found in Excel row ${rowNumber}`);
        }

        return data;
    }
}
