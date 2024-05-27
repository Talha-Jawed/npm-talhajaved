#!/usr/bin/env node

const { white, blueBright } = require("colorette");

const heading = `${white("Talha Javed")}`;
const work = white(`Software Engineer`);

const linkedIn = blueBright(
  "https://www.linkedin.com/in/talha-javed-450491176/"
);
const twitter = blueBright("https://twitter.com/talha_javed97");
const github = blueBright("https://github.com/Talha-Jawed");
const devTo = blueBright("https://dev.to/talhajawed");
const website = blueBright("https://talha-jawed.github.io/portfolio/");
const npx = white("npx talhajaved");

const rows = {
  LinkedIn: linkedIn,
  Github: github,
  DevTo: devTo,
  Website: website,
  Twitter: twitter,
  Card: npx,
};

let output = `
${heading}
${work}
  `;

// `maxKeyLetters` helps in formatting the information nicely
const maxKeyLetters = Math.max(...Object.keys(rows).map((key) => key.length));
const secondaryContent = Object.keys(rows)
  .map((key) => {
    return `${key.padEnd(maxKeyLetters)} : ${rows[key]}`;
  })
  .join("\n");

output += `
${secondaryContent}
  `;

console.log(output);
