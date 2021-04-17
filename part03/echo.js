import { writeFile } from 'fs/promises';
import path from 'path';

const echo = (fileName, data, cb) => {
  const filepath = path.join(process.cwd(), fileName);

  try {
    writeFile(filepath, data).then(cb);
  } catch (error) {
    console.error('ERROR: \n', error);
  }
};

export default echo;
