const core = require('@actions/core');

async function run() {
  try {
    console.log('1111111', process.env.GITHUB_REF);
    console.log(222, process.env['GITHUB_ENV']);
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/').slice(2).join('/'));
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
