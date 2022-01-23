// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateList = commalist => {
  listarray = commalist.split(",")
  listarray = listarray.map(listitem => "* " + listitem)
  return listarray.join(" \n")
}

const generateBadges = badgeArr => {
  badgeArr = badgeArr.map(itemBadge => {
    if (itemBadge !== "None") {
      return "![License](https://img.shields.io/static/v1?label=License&message=" + itemBadge + "&color=BLUE)"
    }
  })
  return badgeArr.join(" ")
}

// const renderLicenseBadge = licenseArr => {
//   licenseArr = licenseArr.map(badge => {
//     if(badge !== 'NONE') {
//       return `![License](https://img.shields.io/static/v1?label=License&message=${badge}&color=BLUE)`;
//     }
//   })
//   return licenseArr.join(' ');
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'NONE') {
    return `* [License](#license)`
  }

  return '';
}

// TODO: Create a function that returns the license section of README

const generateObjectLicense = objectLicense => {
  objectLicense = objectLicense.map(itemLicense => "* " + itemLicense)
  return objectLicense.join(" \n")
}

// If there is no license, return an empty string
// function renderLicenseSection(licenseArr) {
//   if(licenseArr !== 'NONE') {
//     return `## License
//   This project is licensed under the
//    ${licenseArr.map(licenseItem => {
//     `* ${licenseItem}`
//   })}}`
//   }
//   return '';

// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `


# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses

${generateObjectLicense(data.license)}

## Contributing

${generateList(data.contributing)}

## Tests

${data.test}

## Questions

Contact Information for questions: \n

GitHub: [#{username}](https:www.github.com/${data.github}) \n
Email: ${data.email}


`;
}

module.exports = generateMarkdown;
