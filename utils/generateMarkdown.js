// TODO: Create a function that returns a license badge based on which license is passed in

let licenses = {
  MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GPLv2: "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  Apache: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)"
}

// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   return Licenses[license]
// }

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

const renderLicenseBadge = licenseArr => {
  licenseArr = licenseArr.map(badge => {
    if(badge !== 'NONE') {
      return `![License](https://img.shields.io/static/v1?label=License&message=${badge}&color=BLUE)`;
    }
  })
  return licenseArr.join(' ');
}

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
function renderLicenseSection(licenseArr) {
  if(licenseArr !== 'NONE') {
    return `## License
  This project is licensed under the
   ${licenseArr.map(licenseItem => {
    `* ${licenseItem}`
  })}}`
  }
  return '';

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `


# ${data.title} ${renderLicenseBadge(data.license)}
https://github.com/${data.github}/${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#test)


${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Licenses
${generateObjectLicense(data.license)}

## Contributing
${generateList(data.contribution)}

## Tests
${data.test}

Contact Information for questions: \n

GitHub: [#{username}](https:www.github.com/${data.github}) \n
Email: ${data.email}


`;
}

module.exports = generateMarkdown;
