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
import fs from 'fs';
import { readFileSync } from 'fs';
function convertJpgToPdf(jpgFilePath, pdfFilePath) {
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
// ????
const jpgFilePath = 'C:\\pic\\photo_2024-09-26_14-45-57 (2).jpg'; // ????? JPG ????
const pdfFilePath = 'byzXaAer.pdf'; // ?? PDF ????
convertJpgToPdf(jpgFilePath, pdfFilePath)
    .then(() => {
    console.log('?????PDF ??????:', pdfFilePath);
})
    .catch(err => {
    console.error('?????????:', err);
});
console.log(111);
//# sourceMappingURL=TypeScript1.js.map