# Google Sheets lead form setup

1. Create a new Google Sheet for website leads.
2. In the sheet, open **Extensions → Apps Script**.
3. Copy the spreadsheet ID from the sheet URL. It is the text between `/d/` and `/edit`.
4. Replace the contents of `Code.gs` with the code from this folder's `Code.gs`.
5. Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with the spreadsheet ID, then save.
6. Select **Deploy → New deployment**.
7. Choose **Web app** as the deployment type.
8. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
9. Select **Deploy**, authorize the script, and copy the web app URL ending in `/exec`.
10. Open the website's `script.js` and paste that URL between the quotes in `GOOGLE_SCRIPT_URL`.
11. Commit and push the updated website to GitHub.
12. Submit one test lead and confirm that a `Leads` tab appears in the Google Sheet.

Keep the Google Sheet private. The website URL is public by design, but the spreadsheet itself should not be shared publicly.
