module.exports = loadUsers;

function loadUsers (userIds, load, done) {
  var completed = 0;
  var results = [];
  userIds.forEach(function (id) {
    load(id, function (result) {
      results.push(result);
      // better - pass in an index as well and do `results[index] = result`
      // maintains the ordering :D
      if (++completed === userIds.length) return done(results);
    });
  });
}

// the test is currently a bit broken - below code written to test it myself

function imBack (id, callback) { callback(id + " is back!"); }
var users = [1, 2, 3, 4, 5, 6];
loadUsers(users, imBack, console.log);
