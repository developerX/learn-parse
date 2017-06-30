
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('test', function(req, res) {
	res.success('test hi');
});