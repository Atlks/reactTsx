var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PDFDocument } from 'pdf-lib';
import { readFileSync } from 'fs';
import fs from 'fs-extra';
import path from 'path';
function createPdfFromJpgs(folderPath, outputPdfPath) {
    return __awaiter(this, void 0, void 0, function* () {
        // ???????????
        const files = yield fs.readdir(folderPath);
        // ????? JPG ??
        const jpgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg'));
        // ?????? PDF ??
        const pdfDoc = yield PDFDocument.create();
        for (const jpgFile of jpgFiles) {
            const jpgPath = path.join(folderPath, jpgFile);
            // ?? JPG ??
            const jpgBytes = yield fs.readFile(jpgPath);
            // ? JPG ????? PDF ???
            const jpgImage = yield pdfDoc.embedJpg(jpgBytes);
            const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
            page.drawImage(jpgImage, {
                x: 0,
                y: 0,
                width: jpgImage.width,
                height: jpgImage.height,
            });
        }
        // ?? PDF ??
        const pdfBytes = yield pdfDoc.save();
        yield fs.writeFile(outputPdfPath, pdfBytes);
        console.log(`PDF created successfully at ${outputPdfPath}`);
    });
}
export function testExptFld() {
    // ????
    const folderPath = 'c://pspt'; // JPG ?????
    const outputPdfPath = 'pspt.pdf'; // ?? PDF ????
    createPdfFromJpgs(folderPath, outputPdfPath).catch(err => console.error(err));
}
export function convertJpgToPdf(jpgFilePath, pdfFilePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // ?? JPG ??
        const jpgBytes = readFileSync(jpgFilePath);
        // ?????? PDF ??
        const pdfDoc = yield PDFDocument.create();
        // ? JPG ????? PDF ??
        const jpgImage = yield pdfDoc.embedJpg(jpgBytes);
        const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
        // ?????? JPG ??
        page.drawImage(jpgImage, {
            x: 0,
            y: 0,
            width: jpgImage.width,
            height: jpgImage.height,
        });
        // ?? PDF ??
        const pdfBytes = yield pdfDoc.save();
        fs.writeFileSync(pdfFilePath, pdfBytes);
    });
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
//# sourceMappingURL=toolPdf.js.map