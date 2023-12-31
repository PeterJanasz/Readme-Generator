// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None!') {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None!') {
    return `- [${license}] https://opensource.org/licenses/${license} `;
  } else {
    return '';
  }
}

//Create License TOC
function renderLicenseTOC(license) {
  if (license !== 'None!') {
    return '* [License](#license)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None!') {
    return `## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table-of-Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Screenshot](#screenshot)
* [Questions](#questions)


## [Description](#table-of-contents)

${data.what}

${data.why}

## [Installation](#table-of-contents)

${data.installation}

## [Usage](#table-of-contents)

${data.usage}

${renderLicenseSection(data.license)}

## [Contributing](#table-of-contents)

${data.contribution}

## [Tests](#table-of-contents)

${data.test}

## [Screenshot](#table-of-contents)
![Screenshot of app]

## [Questions](#table-of-contents)

Please contact me with any questions!

Contact information:

[GitHub](https://github.com/${data.githubUsername})

[Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
