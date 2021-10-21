
const imgContainer = document.getElementById("ramen-menu")
const soloRating = document.getElementById("rating-display")
const soloComment = document.getElementById("comment-display")
const url = "http://localhost:3000/ramens"
const soloImg = document.getElementById("detail-image")
const soloName = document.getElementById("name")
const soloRest = document.getElementById("restaurant")
const form = document.getElementsByTagName("form")
const nameBar = document.getElementById("new-name")
const restBar = document.getElementById("new-restaurant")
const imageBar = document.getElementById("new-image")
const ratingBar = document.getElementById("new-rating")
const commentBar = document.getElementById("new-comment")
const button = document.getElementById("btn")

// ---------------------------------------------------
fetch (url)
.then(resp => resp.json())
.then (ramenImgs => getImgs(ramenImgs))

function getImgs(ramenImgs) {
    for (objKey of ramenImgs) {
        const newImg = document.createElement('img')
        newImg.src = objKey.image
        const name = objKey.name
        const comments = objKey.comment
        const ratings = objKey.rating
        const restaurant = objKey.restaurant
        imgContainer.append(newImg)
        newImg.addEventListener('click', function (){
        console.log("clicked")
        soloImg.src = newImg.src
        soloName.textContent = name
        soloRest.textContent = restaurant
        soloRating.textContent = ratings
        soloComment.textContent = comments
        })
    }
}

//--------------------------------------------------------

button.addEventListener('click', (e) => {
    e.preventDefault()
    const anotherImg = document.createElement("img")
    soloName.textContent = nameBar.value
    soloImg.src = imageBar.value
    soloRest.textContent = restBar.value
    soloRating.textContent = ratingBar.value
    soloComment.textContent = commentBar.value
    anotherImg.src = imageBar.value
    imgContainer.append(anotherImg)
})