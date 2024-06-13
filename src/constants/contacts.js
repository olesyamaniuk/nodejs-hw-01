import path from 'path';

const workdir = path.join(process.cwd());
export const PATH_DB = path.join(workdir, 'src', 'db', 'db.json');
