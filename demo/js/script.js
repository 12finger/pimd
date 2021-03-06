var { Document } = require("pimd")

const userInput = document.getElementById("my-input")
userInput.addEventListener("input", function(e) {
  e.preventDefault()
  const contentString = userInput.value
  convertWithPimd(contentString)
})

function convertWithPimd(contentString) {
  const pimd = new Document(contentString)
  const renderedString = pimd.render()
  let placer = document.getElementById("input-parsed")
  placer.innerHTML = renderedString
}
