const data = [
    {
        user: "Soekarno Hata",
        quote: "Pelopor Bangsa",
        image:"image/oop1.jpg",
        rating:1
    },
    {
        user: "Soeharto",
        quote: "Mantap Jiwa",
        image:"image/oop2.jpeg",
        rating:2
    },
    {
        user: "Megawati",
        quote: "Penjual Pulau",
        image:"image/oop3.jpeg",
        rating:3
    },
]


// INI UNTUK ALL RATING
const allRating = () => {
    let stringKosong = ``

    data.forEach((card,i)=>{
        stringKosong += `<div class="crd_grid flex">
        <div class="crd_card" id="hid">
            <a href="InProject.html">
                <div class="card_div">
                    <div class="card_div1">
                        <img src="${card.image}" alt="photo" class="card_div1-img">
                    </div>
                    <h1 class="text-xl">${card.quote}</h1>
                    <h1 class="crd_div2">${card.user}</h1>
                    <p class="flex items-center justify-end pt-5 pb-10 gap-x-2 font-bold text-xl">${card.rating}<i class="fa-solid fa-star text-yellow-500"></i></p>
                </div>
            </a>
        </div>
    </div>`
    })

    document.getElementById("text2").innerHTML = stringKosong
}

allRating(); //memanggil keluar saat di refres dia akan keluar





// INI UNTUK MENFILTER Filter Rating
const filterRating = (rating) => {
    let filterStringKosong = ``

    const filterRat = data.filter((card)=>{
        return card.rating === rating
    })


    filterRat.forEach((card,i)=>{
        filterStringKosong += `<div class="crd_grid flex">
        <div class="crd_card" id="hid">
            <a href="InProject.html">
                <div class="card_div">
                    <div class="card_div1">
                        <img src="${card.image}" alt="photo" class="card_div1-img">
                    </div>
                    <h1 class="text-xl">${card.quote}</h1>
                    <h1 class="crd_div2">${card.user}</h1>
                    <p class="flex items-center justify-end pt-5 pb-10 gap-x-2 font-bold text-xl">${card.rating}<i class="fa-solid fa-star text-yellow-500"></i></p>
                </div>
            </a>
        </div>
    </div>`
    })

    document.getElementById("text2").innerHTML = filterStringKosong
}