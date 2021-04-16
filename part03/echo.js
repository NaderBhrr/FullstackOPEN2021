import { writeFile } from 'fs/promises';
import path from 'path';

const echo = (fileName, data) => {
  const filepath = path.join(process.cwd(), fileName);

  try {
    writeFile(filepath, data);
  } catch (error) {
    console.error('ERROR: \n', error);
  }
};

export default echo;
