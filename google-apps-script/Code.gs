const SHEET_NAME = 'Leads';
const HEADERS = [
  'Submitted At',
  'Full Name',
  'Phone Number',
  'ZIP Code',
  'Homeowner',
  'Consent',
  'Language',
  'Page URL',
  'Referrer'
];

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    const params = e && e.parameter ? e.parameter : {};

    if (params.website) {
      return jsonResponse_({ ok: true });
    }

    if (!params.fullName || !params.phoneNumber || !params.zipCode || params.contactConsent !== 'true') {
      return jsonResponse_({ ok: false, error: 'Missing required fields.' });
    }

    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      safeCell_(params.fullName),
      safeCell_(params.phoneNumber),
      safeCell_(params.zipCode),
      safeCell_(params.homeownerStatus),
      'Yes',
      safeCell_(params.language),
      safeCell_(params.pageUrl),
      safeCell_(params.referrer)
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: 'Unable to save submission.' });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function safeCell_(value) {
  const text = String(value || '').trim().slice(0, 500);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
