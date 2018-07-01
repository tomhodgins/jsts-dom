const {read, process, render} = require('../index.js')

document.head.appendChild(
  render(
    process(read()),
    document.createElement('style')
  )
)