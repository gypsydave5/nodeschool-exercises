module.exports = getDependencies;

function getDependencies (jsonList, result) {
  result = result || [];
  if (!jsonList.dependencies) { return result; };
  var dependencies = jsonList.dependencies;;

  Object.keys(dependencies).forEach(function (dependency) {
    var dependencyWithVersion = dependency + '@' + dependencies[dependency].version;
    if (result.indexOf(dependencyWithVersion) < 0) { result.push(dependencyWithVersion); }
    getDependencies(dependencies[dependency], result);
  });

  return result.sort();
}

// which is sort've like the official solution:

function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}

// but how can we get some tail call recursion going with it...?
