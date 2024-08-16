const { execSync } = require('child_process');
const { parseStringPromise } = require('xml2js');

async function getCoveragePercentage() {
  const coverageReport = execSync('ng test --code-coverage').toString();
  const parser = new xml2js.Parser({ explicitArray: false });
  const parsedReport = await parser.parseStringPromise(coverageReport);
  const totalLines = parseInt(parsedReport.coverageReport.linesTotal._text, 10);
  const coveredLines = parseInt(parsedReport.coverageReport.linesCovered._text, 10);
  return (coveredLines / totalLines) * 100;
}

async function checkCoverage() {
  const coveragePercentage = await getCoveragePercentage();
  const minCoverage = 80; // Minimum coverage percentage allowed
  if (coveragePercentage < minCoverage) {
    console.error(`Coverage is below the required threshold of ${minCoverage}%`);
    process.exit(1); // Exit with a non-zero status to abort the push
  } else {
    console.log('Coverage meets the required threshold.');
    process.exit(0); // Exit with zero status to allow the push
  }
}

checkCoverage();
