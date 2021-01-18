// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "apache-2.0":
      return "![GitHub License](https://img.shields.io/badge/License-apach_2.0-informational)";
    case "gpl-3.0":
      return "![GitHub License](https://img.shields.io/badge/License-gpl_3.0-informational)";
    case "mit":
      return "![GitHub License](https://img.shields.io/badge/License-mit-informational)";
    case "bsd-2-clause":
      return "![GitHub License](https://img.shields.io/badge/License-bsd_2_clause-informational)";
    case "bsd-3-clause":
      return "![GitHub License](https://img.shields.io/badge/License-bsd_3_clause-informational)";
    case "mpl-2.0":
      return "![GitHub License](https://img.shields.io/badge/License-mpl_2.0-informational)";
    case "The-Unlicense":
      return "![GitHub License](https://img.shields.io/badge/License-unlicense-informational)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "apache-2.0":
      return "https://choosealicense.com/licenses/apache-2.0/";
    case "pl-3.0":
      return "https://choosealicense.com/licenses/gpl-2.0/";
    case "mit":
      return "https://choosealicense.com/licenses/mit/";
    case "bsd-2-clause":
      return "https://choosealicense.com/licenses/bsd-2-clause/";
    case "bsd-3-clause":
      return "https://choosealicense.com/licenses/bsd-3-clause/";
    case "mpl-2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/";
    case "The-Unlicense":
      return "https://choosealicense.com/licenses/unlicense/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is under the ${license} opensource license agreement: `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badgeLicense = renderLicenseBadge(data.license);
  const linkLicense = renderLicenseLink(data.license);
  const sectionLicense = renderLicenseSection(data.license);

  return `# ${data.title}
  
  ${badgeLicense}

  ---

  ## Project Description 
  ${data.description}

  ---

  ## Table of Contents

    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions

  ---

  ## Installation Instructions
  ${data.installation_instructions}

  ---

  ## Usage
  ${data.usage_information}

  ---

  ## License
  ${sectionLicense}

  ${linkLicense}

  ---

  ## Contributing
  ${data.contributing}

  ---

  ## Tests
  ${data.tests}

  ---

  ## Questions
  ${data.questions}

  ---

  ## GitHub Username
  ${data.github}

  ---

  ## User Contact Email
  ${data.email}
  
  `;

  /*

  This code is for furture update consideration.

  //return `# ${data.title}
  let out;
  Object.keys(data).map(
    (key) =>
      (out += `# ${key}
  ${data[key]}
  `);

  */
}

module.exports = generateMarkdown;
