import { readFileSync } from 'fs'; // Node.js ??????????????
export function test422() {
    // ????
    const month = '2024-09';
    const li = [{ "name": "nme111" }, { "name": "nme222" }]; // ??????
    const data = {
        yyyymm: month,
        list2024: li,
        foot: '===================='
    };
    // ???????????
    const prjdir = '/path/to/your/project'; // ????
    const tmpltf = "./cfg/rpt_month_tmplt.md";
    const template = readFileSync(tmpltf, 'utf-8'); // ????????
    const mkdwn2 = renderTemplate4vue(template, data); // ????
    console.log(mkdwn2);
    console.log(9999);
}
function renderTemplate4vue(template, data) {
    let txt = "";
    const lines = template.split("\n");
    let curIdx = 0;
    while (curIdx < lines.length) {
        const line = lines[curIdx].trim();
        if (line.includes("*vfor=")) {
            const key = extractListName4vue(line);
            // ?? *ngFor ??????????
            const startIdx = line.indexOf("*vfor");
            let rowTmplt = line.substring(0, startIdx).trim() + "\n"; // if block mode
            const list = getFieldV2(data, key, []);
            const renderedTxt = renderRowTmplt(rowTmplt, list);
            txt += renderedTxt;
            curIdx++;
            continue;
        }
        if (line.includes("{{")) {
            const renderedLine = rendMustacheFrmTmpltTxt(data, line) + "\n";
            txt += renderedLine;
            curIdx++;
            continue;
        }
        // Normal line
        txt += line + "\n";
        curIdx++;
    }
    return txt;
}
function renderTemplate4Agl(template, data) {
    let txt = "";
    const lines = template.split("\n");
    let curIdx = 0;
    while (curIdx < lines.length) {
        const line = lines[curIdx].trim();
        if (line.includes("*ngFor=")) {
            const key = extractListName4agl(line);
            // ?? *ngFor ??????????
            const startIdx = line.indexOf("*ngFor");
            let rowTmplt = line.substring(0, startIdx).trim() + "\n"; // if block mode
            const list = getFieldV2(data, key, {});
            const renderedTxt = renderRowTmplt(rowTmplt, list);
            txt += renderedTxt;
            curIdx++;
            continue;
        }
        if (line.includes("{{")) {
            const renderedLine = rendMustacheFrmTmpltTxt(data, line) + "\n";
            txt += renderedLine;
            curIdx++;
            continue;
        }
        // Normal line
        txt += line + "\n";
        curIdx++;
    }
    return txt;
}
function extractListName4vue(input) {
    // ?????????? *ngFor=list ??? list ??
    const pattern = /\*vfor\s*=\s*(\w+)/;
    // ???????????
    const match = input.match(pattern);
    if (match && match[1]) {
        // ?????????
        return match[1];
    }
    else {
        return null; // ???????? null
    }
}
/**
 * ?? *ngFor ??????
 * @param input ?????
 * @returns ?????????????????? null
 */
function extractListName4agl(input) {
    // ?????????? *ngFor=list ??? list ??
    const pattern = /\*ngFor\s*=\s*(\w+)/;
    // ???????????
    const match = input.match(pattern);
    if (match && match[1]) {
        // ?????????
        return match[1];
    }
    else {
        return null; // ???????? null
    }
}
function getFieldV2(data, key, defaultValue) {
    return data[key];
}
// ?????
function renderRowTmplt(rowTmplt, list) {
    let finalResult = "";
    for (const item of list) {
        const result = rendMustacheFrmTmpltTxt(item, rowTmplt);
        finalResult += result;
    }
    return finalResult;
}
function rendMustacheFrmTmpltTxt(data, line) {
    // Replace mustache placeholders in the line with actual data values (simple example)
    return line.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
}
//# sourceMappingURL=bscUI.js.map