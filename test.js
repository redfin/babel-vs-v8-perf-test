var cp = require('child_process');
var fs = require('fs');
var stripAnsi = require('strip-ansi');

var elapsedMillisRegexp = /Elapsed: ([-+]?[0-9]*\,?[0-9]*\.?[0-9]+) ms/;

fs.readdir('./tests', (err, files) => {
  files.forEach((file) => {
    cp.execSync('babel -o ./compiled/' + file + ' ./tests/' + file);

    var testName = file.replace('.js', '');
    var nodeRes = [];
    var babelRes = [];
    var opts = { stdio: ['ignore', 'pipe', 'ignore'] };
    var node = () => cp.execSync('~/bin/node-v6.0.0-rc.2-darwin-x64/bin/node ./node_modules/.bin/matcha ./tests/' + testName, opts);
    var babel = () => cp.execSync('~/bin/node-v6.0.0-rc.2-darwin-x64/bin/node ./node_modules/.bin/matcha ./compiled/' + testName, opts);

    for (var i = 0; i < 10; i++) {
      nodeRes.push(getElapsedMillis(node().toString()));
      babelRes.push(getElapsedMillis(babel().toString()));
    }

    let babelMean = mean(babelRes);
    let nodeMean = mean(nodeRes);
    let program;
    let faster;
    let slower;

    if (babelMean > nodeMean) {
      program = "node";
      faster = nodeMean;
      slower = babelMean;
    } else {
      program = "babel";
      faster = babelMean;
      slower = nodeMean;
    }

    console.log(`Testing ${testName}
    Node results: min ${min(nodeRes)} ms max: ${max(nodeRes)} ms mean: ${nodeMean} ms
    Babel results: min ${min(babelRes)} ms max: ${max(babelRes)} ms mean: ${babelMean} ms
    ${program + " is " + Math.round(((slower - faster) / slower) * 1000, 2) / 10 + "% faster" }`);
  });
});

function max(res) {
  return res.reduce((x, y) => x > y ? x : y, 0);
}

function min(res) {
  return res.reduce((x, y) => x < y ? x : y, 1000000);
}

function mean(res) {
  return res.reduce((x, y) => x + y, 0) / res.length;
}

function getElapsedMillis(stdout) {
  stdout = stripAnsi(stdout);
  var matches = elapsedMillisRegexp.exec(stdout);
  return +matches[0].replace('Elapsed: ', '').replace(' ms', '').replace(',', '');
}
