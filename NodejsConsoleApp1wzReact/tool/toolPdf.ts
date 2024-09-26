import { PDFDocument, rgb } from 'pdf-lib';
 
import { readFileSync } from 'fs';
import fs from 'fs-extra';
 
import path from 'path';
async function createPdfFromJpgs(folderPath: string, outputPdfPath: string) {
    // ???????????
    const files = await fs.readdir(folderPath);

    // ????? JPG ??
    const jpgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));

    // ?????? PDF ??
    const pdfDoc = await PDFDocument.create();

    for (const jpgFile of jpgFiles) {
        const jpgPath = path.join(folderPath, jpgFile);

        // ?? JPG ??
        const jpgBytes = await fs.readFile(jpgPath);

        // ? JPG ????? PDF ???
        const jpgImage = await pdfDoc.embedJpg(jpgBytes);
        const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
        page.drawImage(jpgImage, {
            x: 0,
            y: 0,
            width: jpgImage.width,
            height: jpgImage.height,
        });
    }

    // ?? PDF ??
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile(outputPdfPath, pdfBytes);
    console.log(`PDF created successfully at ${outputPdfPath}`);
}

export function testExptFld() {
    // ????
    const folderPath = 'c://pspt'; // JPG ?????
    const outputPdfPath = 'pspt.pdf'; // ?? PDF ????

    createPdfFromJpgs(folderPath, outputPdfPath).catch(err => console.error(err));
}

export async function convertJpgToPdf(jpgFilePath: string, pdfFilePath: string): Promise<void> {
    // ?? JPG ??
    const jpgBytes = readFileSync(jpgFilePath);

    // ?????? PDF ??
    const pdfDoc = await PDFDocument.create();

    // ? JPG ????? PDF ??
    const jpgImage = await pdfDoc.embedJpg(jpgBytes);

    const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);

    // ?????? JPG ??
    page.drawImage(jpgImage, {
        x: 0,
        y: 0,
        width: jpgImage.width,
        height: jpgImage.height,
    });

    // ?? PDF ??
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(pdfFilePath, pdfBytes);
}

export function test_xae() {
    // ????
    const jpgFilePath = 'C:\\pics\\photo_2024-09-26_14-45-57.jpg'; // ????? JPG ????
    const pdfFilePath = 'byzXaAer.pdf'; // ?? PDF ????

    convertJpgToPdf(jpgFilePath, pdfFilePath)
        .then(() => {
            console.log('?????PDF ??????:', pdfFilePath);
        })
        .catch(err => {
            console.error('?????????:', err);
        });
    console.log(111);

}


export function test311() {
    // ????
    const jpgFilePath = 'C:\\pic\\photo_2024-09-26_14-45-57 (2).jpg'; // ????? JPG ????
    const pdfFilePath = 'byzHnlgd.pdf'; // ?? PDF ????

    convertJpgToPdf(jpgFilePath, pdfFilePath)
        .then(() => {
            console.log('?????PDF ??????:', pdfFilePath);
        })
        .catch(err => {
            console.error('?????????:', err);
        });
    console.log(111);

}
