// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //return `# ${data.title}
  let out;
  Object.keys(data).map(
    (key) =>
      (out += `# ${key}
  ${data[key]}
  `)
  );
  return out;
  /*
  return `# ${data.name} 
  #${data.project_description}
  #${data.installtion_instructions}
  #${renderLicenseLink(data.license)}
  `;
  */
}

module.exports = generateMarkdown;
