var express = require('express')
var app = express()
var startTime = Date.now()
var fs = require('fs')

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

var binding = JSON.parse(fs.readFileSync('/var/credentials/credentials.json'));

const tone_analyzer = binding.apikey ? new ToneAnalyzerV3({
 iam_apikey: binding.apikey,
 url: binding.url,
 version: '2016-05-19'
}) : new ToneAnalyzerV3({
 username: binding.username,
 password: binding.password,
 url: binding.url,
 version: '2016-05-19'
});

app.get('/', function(req, res) {
 res.send('Ready to analyze Tone!')
})

app.get('/healthz', function(req, res) {
 res.send('OK!')
})

app.get('/analyze', function(req, res) {
 tone_analyzer.tone({ tone_input: {
   text: req.query.text
 } }, function(err, tone) {
   if (err) {
     res.status(500).send(err);
   } else {
     res.send(JSON.stringify(tone, null, 2));
   }
 });
})

app.listen(8081, function() {
 console.log('Sample app is listening on port 8081.')
})
