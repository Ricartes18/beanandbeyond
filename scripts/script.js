const hamMenu = document.querySelector(".ham-menu");
const off = document.querySelector(".menu-overlay");
// ^^^ HAMBURGER MENU



const baristaSpecial = [
    {
        name: "Biscoff Latte", 
        price: "150", 
        img: "images/coffee/BiscoffLatte.svg",
        shot: "1",
        alt: ""
    },
    {
        name: "Sea Salt Cloud", 
        price: "150", 
        img: "images/coffee/SeaSaltCloud.svg",
        shot: "2",
        alt: ""
    },
    {
        name: "Triple Espresso Blast", 
        price: "150", 
        img: "images/coffee/TripleEspressoBlast.svg",
        shot: "3",
        alt: ""
    }
]

const icedCoffee = [ 
    {
        name: "Cafe Latte",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: ""
    },
    {
        name: "White Chocolate",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "Cool, creamy espresso meets rich white chocolate syrup in this iced coffee for a sweet, refreshing, and decadent experience."
    },
    {
        name: "Salted Caramel",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: "Experience a refreshing blend of smooth espresso, cold milk, and rich salted caramel syrup and a caramel drizzle."
    },
    {
        name: "Mocha",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: "A refreshing combination of bold espresso, creamy milk, and rich chocolate syrup, served over ice and chocolate drizzle."
    },
    {
        name: "Caramel Macchiato",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "A delicious mix of cold espresso, milk, and caramel syrup, served over ice and drizzled with caramel for a delightful, sweet, and cool coffee treat"
    },
    {
        name: "Hazelnut Latte",
        price: "130",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "A cool, creamy blend of espresso, milk, and hazelnut syrup, served over ice for a sweet and satisfying nutty latte"
    },
    {
        name: "Vanilla Latte",
        price: "130",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "A delightful blend of chilled espresso, creamy milk, and vanilla syrup served over ice for a cool, sweet, and satisfying latte"
    },
    {
        name: "Spanish Latte",
        price: "130",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "A luxurious fusion of bold espresso, milk, and sweetened condensed milk, creating a sweet and coffee sensation."
    },
    {
        name: "Iced Americano",
        price: "99",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "Smooth, strong espresso over ice—refreshingly bold and perfectly chilled."
    },
]
const hotCoffee = [ 
    {
        name: "White Chocolate",
        price: "120",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Salted Caramel",
        price: "120",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Mocha",
        price: "120",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Caramel Macchiato",
        price: "120",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Hazelnut Latte",
        price: "115",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Vanilla Latte",
        price: "115",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Spanish Latte",
        price: "111",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "White Chocolate",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: ""
    },
    {
        name: "Salted Caramel",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Mocha",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: ""
    },
    {
        name: "Caramel Macchiato",
        price: "140",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: "Espresso meets creamy steamed milk, topped with a sweet caramel drizzle for a rich and indulgent treat that warms from the inside out."
    },
    {
        name: "Hazelnut Latte",
        price: "130",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: ""
    },
    {
        name: "Cafe Latte",
        price: "110",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: "For reference: Indulge in the smooth and creamy goodness of our cafÃ© latte, crafted with expertly roasted espresso and steamed milk."
    },
    {
        name: "Spanish Latte",
        price: "130",
        img: "images/coffee/coffee.png",
        shot: "2",
        alt: ""
    },
    {
        name: "Americano",
        price: "99",
        img: "images/coffee/coffee.png",
        shot: "1",
        alt: "Bold espresso diluted with hot water for a smooth, rich coffee experience."
    }
]
const nonCoffee = [ 
    {
        name: "Strawberry Chocolate",
        price: "120",
        img: "images/logo.svg",
        alt: "This treat combines the richness of chocolate with the vibrant sweetness of strawberries, resulting in a creamy, flavorful drink that's sure to delight"
    },
    {
        name: "Chocolate",
        price: "120",
        img: "images/logo.svg",
        alt: "Enjoy the perfect harmony of rich chocolate and smooth milk, delivering a decadent and comforting drink that's ideal for chocolate lovers"
    },
    {
        name: "Milky Avocado",
        price: "120",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Milky Ube",
        price: "120",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Matcha Latte",
        price: "120",
        img: "images/logo.svg",
        alt: "Indulge in the rich, texture of milk combined with high-quality matcha, offering a unique and invigorating twist on a classic latte."
    },
    {
        name: "Milky Mango",
        price: "110",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Strawberry Milk",
        price: "110",
        img: "images/logo.svg",
        alt: ""
    }
]

const frappe = [ 
    {
        name: "Strawberry Milk",
        price: "129",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Matcha",
        price: "129",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Chocolate",
        price: "139",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Caramel Macchiato",
        price: "159",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Coffee Jelly",
        price: "159",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Mocha",
        price: "159",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Salted Caramel",
        price: "159",
        img: "images/logo.svg",
        alt: ""
    },
    {
        name: "Java Chip",
        price: "159",
        img: "images/logo.svg",
        alt: ""
    },
]

const fruitAdes = [ 
    {
        name: "Watermelon",
        price: "85",
        img: "images/fruit-ades/Watermelon.svg",
        alt: ""
    },
    {
        name: "Pineapple",
        price: "85",
        img: "images/fruit-ades/Pineapple.svg",
        alt: ""
    },
    {
        name: "Grapes",
        price: "85",
        img: "images/fruit-ades/Grapes.svg",
        alt: ""
    },
    {
        name: "Bubblegum",
        price: "85",
        img: "images/fruit-ades/Bubblegum.svg",
        alt: ""
    },
    {
        name: "Kiwi",
        price: "85",
        img: "images/fruit-ades/Kiwi.svg",
        alt: ""
    },
    {
        name: "Melon",
        price: "85",
        img: "images/fruit-ades/Melon.svg",
        alt: ""
    },
    {
        name: "Orange",
        price: "85",
        img: "images/fruit-ades/Orange.svg",
        alt: "A cool orange soda ade, featuring vibrant citrus flavor and chewy nata de coco for a drink that's both fruity and uniquely satisfying."
    },
    {
        name: "Blueberry",
        price: "85",
        img: "images/fruit-ades/Blueberry.svg",
        alt: "A sparkling blueberry soda combined with fruity ade and chewy nata de coco, delivering a fruity, refreshing drink with a delightful texture"
    },
    {
        name: "Strawberry",
        price: "85",
        img: "images/fruit-ades/Strawberry.svg",
        alt: "A sparkling strawberry soda combined with fruity ade and chewy nata de coco, delivering a vibrant, sweet, and fun drink"
    },
    {
        name: "Lychee",
        price: "85",
        img: "images/fruit-ades/Lychee.svg",
        alt: "Enjoy a sparkling blend of sweet lychee and soda, complemented by chewy nata de coco for a refreshing and unique twist."
    },
    {
        name: "Green Apple",
        price: "85",
        img: "images/fruit-ades/GreenApple.svg",
        alt: "Experience the fusion of green apple flavor and sparkling soda, with a touch of citrus for an extra burst of refreshment."
    },
    {
        name: "Raspberry",
        price: "85",
        img: "images/fruit-ades/Raspberry.svg",
        alt: "A fizzy blend of raspberry soda and fruity ade, enhanced with chewy nata de coco for a uniquely satisfying and refreshing beverage."
    }
]

const croffles = [ 
    {
        name: "Biscoff",
        price: "135",
        img: "images/croffles/Biscoff.svg",
        alt: ""
    },
    {
        name: "Ban Tella",
        price: "125",
        img: "images/croffles/BanTella.svg",
        alt: ""
    },
    {
        name: "Matcha",
        price: "125",
        img: "images/croffles/Matcha.svg",
        alt: "A flaky, buttery croffle matcha cream, topped with fluffy whipped cream and drizzled with smooth matcha sauce for a delectable dessert experience."
    },
    {
        name: "Cookies and Cream",
        price: "125",
        img: "images/croffles/CookiesAndCream.svg",
        alt: "Enjoy a decadent croffle topped with creamy whipped cream, crunchy crushed Oreos, and a rich Nutella drizzle, combining sweet and savory flavors in every bite."
    },
    {
        name: "Alcapone",
        price: "125",
        img: "images/croffles/Alcapone.svg",
        alt: "Enjoy a buttery croffle filled with rich Alcapone, topped with airy whipped cream and finished with a decadent Nutella drizzle for a sweet and savory delight."
    },
    {
        name: "Chocolate Chip",
        price: "125",
        img: "images/croffles/ChocolateChip.svg",
        alt: "Indulge in this crispy croffle chocolate chips, topped with a rich layer of whipped cream, drizzled with Nutella, and a generous sprinkle of chocolate chips."
    },
    {
        name: "Tella",
        price: "115",
        img: "images/croffles/Tella.svg",
        alt: ""
    },
    {
        name: "Cro Tella",
        price: "110",
        img: "images/croffles/CroTella.svg",
        alt: ""
    },
    {
        name: "Powdered Sugar",
        price: "99",
        img: "images/croffles/PowderedSugar.svg",
        alt: "A delectable fusion of buttery croissant and crispy waffle textures, elegantly dusted with powdered sugar for a sweet and satisfying treat"
    }
    
]

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    off.classList.toggle('active');
})



function baristaSpecialin() {
    
    for (let i = 0; i < baristaSpecial.length; i++) {
        const bsn = document.querySelector(`.bs-item.item-${i + 1} .bs-name`);
        const bsp = document.querySelector(`.bs-item.item-${i + 1} .bs-price`);
        const bsi = document.querySelector(`.bs-item.item-${i + 1} .bs-img`);

        bsn.innerHTML = baristaSpecial[i].name;
        bsp.innerHTML = "&#8359;" + baristaSpecial[i].price;
        bsi.src = baristaSpecial[i].img;
        bsi.alt = baristaSpecial[i].name + " image";
    }
}

window.onload = function() {
    // if (window.location.href.indexOf('menu.html){                              
    //     baristaSpecialin();
    // };

    if (window.location.href.indexOf('menu.html') > -1){
        switch (location.hash) {
            case "#ic":
                menuChosen('icedCoffee', 'ic');
                break;

            case "#bsm":
                menuChosen('baristaSpecial', 'bsm');
                break;

            case "#cr":
                menuChosen('croffles', 'cr');
                break;

            case "#fa":
                menuChosen('fruitAdes', 'fa');
                break;
            default:
                menuChosen('baristaSpecial','bsm');
                break;
        }
        
    }
    
};

function menuChosen(type,ct) {

    const menuItem = document.querySelector(".menu-item-container");
    menuItem.innerHTML = '';
    const nav = document.querySelectorAll('.nc');
    nav.forEach(i => i.classList.remove('active'));


    const menu = document.querySelectorAll('.menu-coffee');
    menu.forEach(i => i.classList.remove('active'));

    
    document.getElementById(ct).classList.add('active');
    document.getElementById(type).classList.add('active');
    if (screen.width <= 1024) {
        document.getElementById(type).scrollIntoView({
        behavior: 'smooth'
    });
    }

    if (screen.width > 1023) {
        
        document.getElementById(ct).classList.add('active');
        document.getElementById(type + 'd').classList.add('active');
    }

    menuShowcase(type, ct);
}



function menuShowcase(cd,wh) {
    const container = document.querySelector(`#${wh} ` +" .inside-menu .menu-item-container");
    container.innerHTML = '';

    switch (cd) {
        case "baristaSpecial":
            cd = baristaSpecial;
            break;
        
        case "icedCoffee":
            cd = icedCoffee;
            break;
        case "hotCoffee":
            cd = hotCoffee;
            break;
        case "nonCoffee":  
            cd = nonCoffee;
            break;

        case "frappe":
            cd = frappe;
            break;

        case "fruitAdes":
            cd = fruitAdes;
            break;
        case "croffles":
            cd = croffles
    }

    for (let i = 0; i < cd.length; i++) {
        console.log(cd[i].name);
        var name = (cd[i].name).replace(/\s+/g, '-');
        const coffeItem = `
            <div class="${name} menu-item" onclick="itemOverlay('${name}', '${i}')">
                <a class="item">
                    <p>${cd[i].name}</p>
                    <h2>&#8369;${cd[i].price}</h2>
                    <img src="${cd[i].img}" alt="">
                </a>
            </div>    
            `;
            
        container.insertAdjacentHTML('afterbegin', coffeItem); 
    }
}

function itemOverlay(name, num) {
    let itemOverlays = document.querySelector(`.${name}.menu-item`);
    let closeMenu = document.getElementById('overlay');

    // itemOverlays.addEventListener('click', (e) => {
        // e.preventDefault();
        document.getElementsByTagName('html')[0].classList.toggle('no-scroll');
        console.log("CLICKED");
        itemOverlays.classList.toggle('active');
        closeMenu.classList.toggle('active');
        console.log(name);
        const close = document.querySelector(".overlay-content");
        close.innerHTML = '';
        const itemIn = name.replace('-', ' ');
        console.log(itemIn);
        let cd;
        switch (location.hash) {
            case "#bsm":
                cd = baristaSpecial;
                break;

            case "#ic":
                cd = icedCoffee;
                break;

            case "#hc":
                cd = hotCoffee;
                break;
            case "#nc":  
                cd = nonCoffee;
                break;
    
            case "#fr":
                cd = frappe;
                break;
    
            case "#fa":
                cd = fruitAdes;
                break;
            case "#cr":
                cd = croffles;
                break
            
            default:
                cd = baristaSpecial;
                break
    
        }
        let nu = parseInt(num);
        console.log(cd);
        close.innerHTML = "";
        let itemInfo = "";
        if (cd == icedCoffee || cd == hotCoffee || cd == baristaSpecial){
            itemInfo = `
                    <div class="overlay-pic">
                        <img src="${cd[nu].img}" alt="">
                    </div>
                    <div class="overlay-info">
                        <div>
                            <h2 class="overlay-name">${cd[nu].name}</h2>
                        </div>
                        <div>
                            <h2 class="overlay-price">&#8369;${cd[nu].price}</h2>
                        </div>
                        <div class="desc-shot">                
                            <div>
                                <p class="overlay-desc">A refreshing combination of bold espresso, creamy milk, and rich chocolate syrup, served over ice and chocolate drizzle.</p>
                            </div>
                            <div class="overlay-shot">
                                <h4><span>${cd[nu].shot}</span> Espresso shots</h4>
                            </div>
                        </div>
                    </div>
            `;
        } else {
            itemInfo = `
                    <div class="overlay-pic">
                        <img src="${cd[nu].img}" alt="">
                    </div>
                    <div class="overlay-info">
                        <div>
                            <h2 class="overlay-name">${cd[nu].name}</h2>
                        </div>
                        <div>
                            <h2 class="overlay-price">&#8369;${cd[nu].price}</h2>
                        </div>
                        <div class="desc-shot">                
                            <div>
                                <p class="overlay-desc">${cd[nu].alt}</p>
                            </div>
                        </div>
                    </div>
            `;
        }
        
        close.insertAdjacentHTML('afterbegin', itemInfo);
        // })
}
// ITEM OVERLAY

const exit = document.querySelector(".exit-menu");
if (window.location.href.indexOf('menu.html') > -1){
exit.addEventListener('click', () => {
    console.log("CLICKED");
    document.getElementById('overlay').classList.toggle('active');
    document.getElementsByTagName('html')[0].classList.toggle('no-scroll');
})
}

const overlay = document.getElementById("overlay");
if (screen.width < 1024) {
    overlay.addEventListener('click', () => {

        const overlayContainer = document.getElementById('overlay-container');
        overlayContainer.addEventListener('pointerout', () => {
            document.getElementById('overlay').classList.toggle('active');
        })

        overlay.addEventListener('pointerout', () => {
            document.getElementById('overlay').classList.toggle('active');
        })

        document.getElementsByTagName('html')[0].classList.toggle('no-scroll');

        // if ((document.getElementById('overlay').contains(document.getElementById('overlay-container')))){
        //     // document.getElementById('overlay').classList.toggle('active');
        //     alert("inside");
        // } else {
        //     alert("outside");
        // }
    })

}
