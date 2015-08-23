function checkUsersValid (goodUsers) {
  return function allUsersValid (usersToCheck) {
    return usersToCheck.every(function (user) {
      return goodUsers.some(function (goodUser) {
        return user.id === goodUser.id
      })
    })
  }
}

module.exports = checkUsersValid