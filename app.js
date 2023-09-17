let a = 0, b = 0, result = 0

let aInput = document.querySelector("#a")
let aError = document.querySelector("#aError")

let bInput = document.querySelector("#b")
let bError = document.querySelector("#bError")

let sumBtn = document.querySelector("#sum")

aInput.addEventListener("keyup", (e) => {
    a = aInput.value
    if (isNaN(a)) {
        aError.style.display = "inline"
        sumBtn.setAttribute('disabled', true)
        return
    }
    aError.style.display = "none"
    if (!isNaN(a) && !isNaN(b)) sumBtn.removeAttribute('disabled')
})

bInput.addEventListener("keyup", (e) => {
    b = bInput.value
    if (isNaN(b)) {
        bError.style.display = "inline"
        sumBtn.setAttribute('disabled', true)
        return
    }
    bError.style.display = "none"
    if (!isNaN(a) && !isNaN(b)) sumBtn.removeAttribute('disabled')
})

sumBtn.addEventListener("click", (e) => {
    result = +a + +b
    document.querySelector("#result").textContent = result
})