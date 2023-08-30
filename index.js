var saveEl = document.getElementById("save-el")
var countEl = document.getElementById("count-el")
var count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    var saveCount = count + " - "
    saveEl.textContent += saveCount
     countEl.textContent = 0
       count *= 0

}
