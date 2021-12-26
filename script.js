

let categorie = [
    'Best-Seller',
    'Sunglass',
    'Glasses'
];

let bestG = {
    0: {
        name: 'ALIOC1',
        src: ['BG_ALIOC1_WEB_PRODUCT_001.png',
        'BG_ALIOC1_WEB_PRODUCT_002.webp',
        'BG_ALIOC1_WEB_PRODUCT_003.webp',
        'BG_ALIOC1_WEB_PRODUCT_004.webp'
            ]
    },
    1: {
        name: 'ALIOCX',
        src: ['BG_ALIOX_B4_1.png',
        'BG_ALIOX_B4_2.webp',
        'BG_ALIOX_B4_3.webp',
        'OPT_PACKAGE_2.jpg'
            ]
    },
    2: {
        name: 'JEFF',
        src: ['BG_JEFF_KC1_1.png',
        'BG_JEFF_KC1_3.webp',
        'BG_JEFF_KC1_4.webp',
        'BG_JEFF_KC1_5.webp'
            ]
    },
    3: {
        name: 'AGAIL',
        src: ['BS_AGAIL_01_1.png',
        'BS_AGAIL_01_2.webp',
        'BS_AGAIL_01_3.webp',
        'BS_AGAIL_01_5.webp'
            ]
    },
    4: {
        name: 'GHOST',
        src: ['BS_GHOST_01_1.png',
        'BS_GHOST_01_2.webp',
        'BS_GHOST_01_3.webp',
        'BS_GHOST_01_5.webp'
            ]
    },
    5: {
        name: 'LANG',
        src: ['BS_LANG_01(OR)_1.png',
        'BS_LANG_01(OR)_2.webp',
        'BS_LANG_01(OR)_3.webp',
        'BS_LANG_01(OR)_4.webp'
            ]
    }
}

let sunG = {
    0: {
        name: 'DIANE',
        src: ['S_DIANE_02(BR)_1.png',
        'S_DIANE_02(BR)_2.webp',
        'S_DIANE_02(BR)_3.webp',
        'S_DIANE_02(BR)_5.webp'
            ]
    },
    1: {
        name: 'HER',
        src: ['S_HER_01_1.png',
        'S_HER_01_2.webp',
        'S_HER_01_3.webp',
        'S_HER_01_5.webp'
            ]
    },
    2: {
        name: 'LE',
        src: ['S_LE_01_1.png',
        'S_LE_01_2.webp',
        'S_LE_01_4.webp',
        'S_LE_01_5.webp'
            ]
    },
    3: {
        name: 'LILIT',
        src: ['S_LILIT_01BR_1.png',
        'S_LILIT_01BR_2.webp',
        'S_LILIT_01BR_4.webp',
        'S_LILIT_01BR_6.webp'
            ]
    },
    4: {
        name: 'SAL',
        src: ['S_SAL_01_1.png',
        'S_SAL_01_2.webp',
        'S_SAL_01_3.webp',
        'S_SAL_01_5.webp'
            ]
    },
    5: {
        name: 'TAMBU',
        src: ['S_TAMBU_01_1.png',
        'S_TAMBU_01_2.webp',
        'S_TAMBU_01_4.webp',
        'S_TAMBU_01_5.webp'
            ]
    },
    6: {
        name: 'TOMMY',
        src: ['S_TOMY_01(BR)_1.png',
        'S_TOMY_01(BR)_2.webp',
        'S_TOMY_01(BR)_3.webp',
        'S_TOMY_01(BR)_5.webp'
            ]
    }
}

let glass = {
    0: {
        name: 'DADIO',
        src: ['G_DADIO_01_1.png',
        'G_DADIO_01_2.webp',
        'G_DADIO_01_4.webp',
        'G_DADIO_01_5.webp',
        
            ]
    },
    1: {
        name: 'EDDY',
        src: ['G_EDDY_01(BR)_1.png',
        'G_EDDY_01(BR)_2.webp',
        'G_EDDY_01(BR)_3.webp',
        'G_EDDY_01(BR)_4.webp'
            ]
    },
    2: {
        name: 'KUBO',
        src: ['G_KUBO_01_1.png',
        'G_KUBO_01_2.webp',
        'G_KUBO_01_3.webp',
        'G_KUBO_01_5.webp'
            ]
    },
    3: {
        name: 'LEROY',
        src: ['G_LEROY_01V_1.png',
        'G_LEROY_01V_2.webp',
        'G_LEROY_01V_4.webp',
        'G_LEROY_01V_5.webp'
            ]
    },
    4: {
        name: 'LIBERTYX',
        src: ['G_LIBERTYX_D01_1.png',
        'G_LIBERTYX_D01_2.webp',
        'G_LIBERTYX_D01_3.webp',
        'OPT_PACKAGE_2.jpg'
            ]
    },
    5: {
        name: 'OTAS',
        src: ['G_OTAS_M01P_1.png',
        'G_OTAS_M01P_2.webp',
        'G_OTAS_M01P_3.webp',
        'G_OTAS_M01P_6.webp'
            ]
    },
    6: {
        name: 'SOUTHSIDEN',
        src: ['G_SOUTHSIDEN_GC4_1.png',
        'G_SOUTHSIDEN_GC4_2.webp',
        'G_SOUTHSIDEN_GC4_4.webp',
        'G_SOUTHSIDEN_GC4_5.webp'
            ]
    },
}

let myObj = [bestG, sunG, glass];

let nowCategorie = 0; // 카테고리
let subMenu = 0; // 카테고리 밑 제품명



let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");
let myMenu = document.querySelector("#myMenu");

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

let productleft = document.querySelector("#itemleft");
let productRight = document.querySelector("#itemRight");
let myItems = document.querySelector("#myItems");

productleft.addEventListener('click', itemLeft);
productRight.addEventListener('click', itemRight);

let imageBox = document.querySelectorAll('.imageBox');

let textBox = document.querySelectorAll('.textBox');

function moveLeft()
{
    if(nowCategorie == 0)
    {
        nowCategorie = categorie.length-1;
    }
    else{
        nowCategorie--;
    }
    subMenu = 0;
    render();
}

function moveRight()
{
    if(nowCategorie == categorie.length-1)
    {
        nowCategorie = 0;
    }
    else{
        nowCategorie++;
    }
    subMenu = 0;
    render();
}

function itemLeft()
{
    if(subMenu == 0)
    {
        //console.log(Object.keys(bestG).length);
        subMenu = Object.keys(myObj[nowCategorie]).length-1;
    }
    else{
        subMenu--;
    }
    render();
}

function itemRight()
{
    if(subMenu == Object.keys(myObj[nowCategorie]).length-1)
    {
        subMenu = 0;
    }
    else{
        subMenu++;
    }
    render();
}

function render() // 모든 콘텐츠를 표현합니다.
{
    myMenu.innerHTML = categorie[nowCategorie];
    myItems.innerHTML = myObj[nowCategorie][subMenu].name;

    imageBox[0].src = 'img/' + myObj[nowCategorie][subMenu].src[0];
    imageBox[1].src = 'img/' + myObj[nowCategorie][subMenu].src[1];
    imageBox[2].src = 'img/' + myObj[nowCategorie][subMenu].src[2];
    imageBox[3].src = 'img/' + myObj[nowCategorie][subMenu].src[3];
   
    makeText();
}

function makeText()
{
    for(let i = 0; i< textBox.length; i++)
    {
        textBox[i].style.display = 'none';
    } 

    if(categorie == 0)
    {
        textBox[subMenu].style.display = 'flex';
    }
    else if(categorie == 1)
    {
        textBox[subMenu + Object.keys(bestG).length].style.display = 'flex';
    }
    else 
    {
        textBox[subMenu + Object.keys(bestG).length + Object.keys(sunG).length].style.display = 'flex';
    }
   
    
}

render();







