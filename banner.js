const childProcess = require('child_process');

module.exports = function banner() {
    const date = new Date().toLocaleString()
    const commit = childProcess.execSync("git rev-parse --short HEAD")
    const user = childProcess.execSync("git config user.name")

    return (

        `commitVersion : ${commit}` + `Build Date : ${date}\n` + `Author : ${user}`

    )
}