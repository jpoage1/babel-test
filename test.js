function query(sql, params, callback) {
	console.log(sql, params, callback);
}
function test(sql, params, callback) {
	query( params, callback, sql);
}

test("123", "456", "789")
