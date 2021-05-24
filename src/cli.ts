#!/usr/bin/env node

import chalk from 'chalk';
import { AfterHookOptions, create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for the all options.

create('create-catalyst', {
  templateRoot,
  promptForTemplate: true,
  modifyName: (name) => {
    return name.includes('-') ? name : `${name}-component`
  },
  caveat: ({ name }: AfterHookOptions) => {
    const { green, blue, red } = chalk.bold;
    let output = `cd ${green(name)}\n\n`
    output += `Commands:\n`
    output += `${blue('yarn dev')} - Start development server\n`
    output += `${blue('yarn build')} - Build for production\n\n`
    output += `${red('IMPORTANT:')}\n`
    output += `If your project name was not a two-word camel-case string (ie, hello-world) it has been appended with "-component" so that it is a valid custom element name.`
    return output;
  }
});
