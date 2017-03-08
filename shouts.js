// init local DB for incoming Shouts
var shoutdb = new PouchDB('ShoutDB');
var remoteCouch = false;
shoutdb.changes({
	since: 'now'
	, live: true
}).on('change', showTodos);

function addTodo(text) {
	var todo = {
		_id: new Date().toISOString()
		, title: text
		, completed: false
	};
	shoutdb.put(todo, function callback(err, result) {
		if (!err) {
			console.log('Successfully posted a todo!');
		}
	});
}

function showTodos() {
	shoutdb.allDocs({
		include_docs: true
		, descending: true
	}, function (err, doc) {
		console.log(doc.rows);
	});
}