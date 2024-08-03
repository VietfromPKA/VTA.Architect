const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-form', (req, res) => {
    const { name, email, phone, project } = req.body;

    let workbook;
    let worksheet;
    const filePath = 'form-data.xlsx';

    if (fs.existsSync(filePath)) {
        workbook = xlsx.readFile(filePath);
        worksheet = workbook.Sheets[workbook.SheetNames[0]];
    } else {
        workbook = xlsx.utils.book_new();
        worksheet = xlsx.utils.aoa_to_sheet([['Họ và Tên', 'Email', 'Số Điện Thoại', 'Dự Án']]);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    }

    const newRow = [name, email, phone, project];
    xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    xlsx.writeFile(workbook, filePath);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
