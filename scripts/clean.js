const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.test('-e', 'config/templates')) {
  shell.echo('The example is deleted already.');
  shell.exit(1);
}

process.stdout.write('Cleanup started...');

// Cleanup components/
shell.rm('-rf', 'src/components/*');
shell.cp('config/templates/index.js', 'src/components')

// Cleanup containers/
shell.rm('-rf', 'src/containers/*');
shell.cp('-R', 'config/templates/containers/*', 'src/containers');

// Cleanup reducers
shell.rm('-rf', 'src/redux/*');
shell.cp('-R', 'config/templates/redux/*', 'src/redux');

// Remove the templates folder
shell.rm('-rf', 'config/templates');

shell.echo('\nCleanup done. \nTo start with a fresh git repository delete the .git folder in the root directory and run git init. \nHappy Coding!!!');
