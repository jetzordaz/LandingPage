# Google Sheets lead form setup

1. Create a new Google Sheet for website leads.
2. In the sheet, open **Extensions → Apps Script**.
3. Replace the contents of `Code.gs` with the code from this folder's `Code.gs`, then save.
4. Select **Deploy → New deployment**.
5. Choose **Web app** as the deployment type.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Select **Deploy**, authorize the script, and copy the web app URL ending in `/exec`.
8. Open the website's `script.js` and paste that URL between the quotes in `GOOGLE_SCRIPT_URL`.
9. Commit and push the updated website to GitHub.
10. Submit one test lead and confirm that a `Leads` tab appears in the Google Sheet.

Keep the Google Sheet private. The website URL is public by design, but the spreadsheet itself should not be shared publicly.
