const chokidar = require('chokidar');
const { execSync } = require('child_process');

const DEBOUNCE_MS = 5000; // wait 5s after last change before committing
let timer = null;

function commitAndPush() {
  try {
    const status = execSync('git status --porcelain').toString();
    if (!status.trim()) return;

    execSync('npm run build', { stdio: 'inherit' }); // fails loudly if broken
    execSync('git add -A');
    execSync(`git commit -m "auto: ${new Date().toISOString()}"`);
    execSync('git push');
    console.log('Pushed.');
  } catch (err) {
    console.error('Build or push failed, not pushing broken code:', err.message);
  }
}
chokidar
  .watch('.', {
    ignored: ['.git', 'node_modules', '.next', 'dist', 'build'],
    ignoreInitial: true,
  })
  .on('all', () => {
    clearTimeout(timer);
    timer = setTimeout(commitAndPush, DEBOUNCE_MS);
  });

console.log('Watching for changes...');