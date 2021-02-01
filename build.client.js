/* eslint-disable @typescript-eslint/no-var-requires */
require('esbuild').build({
  entryPoints: ['client/src/index.ts'],
  bundle: true,
  platform: 'browser',
  outbase: 'client/src',
  outdir: './public/js'
});