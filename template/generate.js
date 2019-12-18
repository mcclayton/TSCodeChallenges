const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const replace = require('replace-in-file');

const BASE_SRC_DIR = '__dirname/../src';
const BASE_TEMPLATE_DIR = '__dirname/../template';

const TEMPLATE_FILES = [
  { from: 'index.template', to: 'index.ts' },
  { from: 'info.template', to: 'info.md' },
  { from: 'problem.template', to: 'problem.md' },
  { from: 'test.template', to: '__tests__/challenge.test.js' },
];

const created = (filePath) => console.log(`✅  Created: ${filePath}`);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'challenge_name',
      default: 'NewExampleProblem',
      message: "Name of challenge:",
    }
  ])
  .then((answers) => {
    const challengeName = answers['challenge_name'];

    // Create a new directory for the new challenge
    const newDir = path.resolve(`${BASE_SRC_DIR}/${challengeName}`);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir);
      created(newDir);
    } else {
      console.log(`Challenge '${newDir} already exists.'`);
    }

    // Copy over all the template files into new directory
    TEMPLATE_FILES.forEach((curr) => {
      const fromPath = path.resolve(`${BASE_TEMPLATE_DIR}/${curr.from}`);
      const toPath = path.resolve(`${newDir}/${curr.to}`);
      fs.copySync(
        fromPath,
        toPath
      );

      // Replace all instances of {{name}} with challenge name
      replace.sync({
        files: toPath,
        from: /{{name}}/g,
        to: challengeName,
      });
      created(toPath);
    });

    require('tree-cli')({
      base: newDir,
      noreport: true,
      l: 10,
      f: true,
    }).then(res => {
      console.log("\n\nCreated From Template:\n", res.report);
    });
  }).catch((err) => {
    console.log(`Error occurred: ${err}`);
  });
