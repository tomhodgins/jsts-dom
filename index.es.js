import jstsEngine from 'https://unpkg.com/jsts-engine/index.es.js'

export function read(selector = '[type="text/jsts"]') {

  return [...document.querySelectorAll(selector)]
    .map(tag => tag.innerHTML)

}

export function process(strings = [], environment = {}) {

  return Array.isArray(strings)
         ? strings.map(string => jstsEngine(string, environment))
         : jstsEngine(strings, environment)

}

export function render(strings = [], tag = document.body) {

  tag.innerHTML += strings
    .map(string => string[0])
    .join('\n')

  return tag

}

export function mount(
  selector = '[type="text/jsts"]',
  tag = document.body,
  environment = {}
) {

  return render(
    process(
      read(selector),
      environment
    ),
    tag
  )

}