const cats = ["Milo", "Otis", "Garfield"]

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat(name) {
    return cats.push(name)
}

destructivelyAppendCat("Ralph")

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}      
destructivelyPrependCat("Bob")

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')


function destructivelyRemoveLastCat() {
    return cats.pop()
}
console.log(cats)

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function destructivelyRemoveFirstCat() {
    return cats.shift()
}
console.log(cats)

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function appendCat(name) {
return [...cats, name]
}
console.log(appendCat("Broom"))

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function prependCat(name) {
    return [name, ...cats]
}
console.log(prependCat("Arnold"))

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function removeLastCat() {
    return cats.slice(0, 2)
}      

removeLastCat()

cats.length = 0
      
      cats.push('Milo', 'Otis', 'Garfield')

function removeFirstCat() {
    return cats.slice(1)
}

removeFirstCat()