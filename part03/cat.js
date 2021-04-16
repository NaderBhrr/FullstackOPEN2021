import { readFile } from 'fs/promises';
import path from 'path';

const cat = async (fileName) => {
  const filepath = path.join(process.cwd(), fileName);

  try {
    const data = await readFile(filepath, 'utf-8');
    return JSON.parse(data.toString());
  } catch (error) {
    console.error(error);
  }
};

export default cat;
