import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/LAPA';
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) throw new Error('Expected one safe repository path, e.g. /LAPA');
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: basePath },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
writeFileSync('out/.nojekyll', '');
console.log(`Static site ready in out/ for ${basePath || '/'}`);
