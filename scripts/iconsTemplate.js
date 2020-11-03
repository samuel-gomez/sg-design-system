const fs = require('fs-extra');
const chalk = require('chalk');
const find = require('find');
const path = require('path');

const log = (prefix, message, inverse) => {
  const darkGray = '#111111';
  const yellow = '#e8be00';
  const blue = '#0c93f2';
  if (inverse) {
    console.log(
      chalk.hex(blue).bgHex(darkGray)(` ${prefix} `),
      chalk.hex(yellow).bgHex(darkGray)(` ${message} `),
    );
  } else {
    console.log(
      chalk.hex(darkGray).bgHex(blue)(` ${prefix} `),
      chalk.hex(darkGray).bgHex(yellow)(` ${message} `),
    );
  }
};

const logStart = (prefix, inverse = false) => log(prefix, 'Starting', inverse);
const logFinished = (prefix, inverse = false) =>
  log(prefix, 'Finished', inverse);

/**************************************************************************** */
/* Compile SVG files to a template HTML files                                 */
/**************************************************************************** */

const basePath = 'src/webcomponents/atoms/icons';

const getSVGFiles = () => {
  try {
    return find.fileSync(/\.svg$/, `${basePath}/svg`);
  } catch (err) {
    console.error(err);
  }
};

const cleanPathSVGFiles = (allSVGFiles) =>
  allSVGFiles.map((file) => file.replace(/\\/g, '/'));

const getNameFile = (pathFile) =>
  `sg-icon-${path.basename(pathFile).replace(/.svg/gi, '')}`;

const generateTemplateFile = (svgList) => {
  const content = svgList
    .map((svgFile) => {
      const contentFile = fs.readFileSync(path.join(svgFile), 'utf8');
      const contentFileWithId = contentFile.replace(
        /<svg /gi,
        `<svg id="${getNameFile(svgFile)}" `,
      );
      return contentFileWithId;
    })
    .join('\n');
  fs.writeFileSync(`${basePath}/template.html`, content);
};

/**************************************************************************** */
/* Main                                                                       */
/**************************************************************************** */
try {
  logStart('Build SVG template file');
  const svgFilesRaw = getSVGFiles() || [];
  const svgFiles = cleanPathSVGFiles(svgFilesRaw);
  generateTemplateFile(svgFiles);
} catch (err) {
  console.error(err);
} finally {
  logFinished('Build Style Files');
}
