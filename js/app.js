const elBody = document.querySelector('body');
const elBox = document.createElement('div');
const elWrap = document.createElement('div');
const elImgLogo = document.createElement('span');
const elWrapper = document.createElement('div');
const elTitle = document.createElement('h1');
const elText = document.createElement('p');
const elMenuBtn = document.createElement('button');
const elTitleH2 = document.createElement('h2');
const elText2 = document.createElement('p');
const elText3 = document.createElement('p');

elBody.append(elBox);
elBox.append(elWrap, elTitleH2, elText2, elText3);
elWrap.append(elImgLogo, elWrapper, elMenuBtn);
elWrapper.append(elTitle, elText);


console.log(elBody, elBox);

// ============================= BODY START ============================= //

elBody.style.cssText = `
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

// ============================= BODY END ============================= //

// ============================= BOX START ============================= //

elBox.style.cssText = `
    width: 280px;
    height: 427px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
    background: #fff;
    background-image: url("./assets/img/Image1.jpg");
    background-repeat: no-repeat;
    background-size: content;
    background-position: 0 58px; 
`

// ============================= BOX END ============================= //

// ============================= WRAP START ============================= //

elWrap.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 232px;
`

// ============================= WRAP END ============================= //

// ============================= IMG-LOGO START ============================= //

elImgLogo.style.cssText = `
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 11px;
    border-radius: 39px;
    background-image: url("./assets/img/Avatar.jpg");
`

// ============================= IMG-LOGO END ============================= //

// ============================= TITLE START ============================= //

elTitle.textContent = 'Stuar Manson';
elTitle.style.cssText = `
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0px;
`

// ============================= TITLE END ============================= //

// ============================= TEXT START ============================= //

elText.textContent = 'Publicado hace 2 horas';
elText.style.cssText = `
    color: #828282;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
`

// ============================= TEXT END ============================= //

// ============================= MENU-BTN START ============================= //

elMenuBtn.style.cssText = `
    width: 24px;
    height: 24px;
    margin-left: 56px;
    border: none;
    background-color: white;
    background-image: url("./assets/svg/menu-img.svg");
    background-position: 50% 50%;
    cursor: pointer;
`

// ============================= MENU-BTN END ============================= //

// ============================= TITLE-H2 START ============================= //e

elTitleH2.textContent = 'Flores';
elTitleH2.style.cssText = `
    color: #000;
    margin-left: 15px;
    margin: 0;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5px;
`

// ============================= TITLE-H2 END ============================= //

// ============================= TEXT-2 START ============================= //

elText2.textContent = 'by Stuar Manson';
elText2.style.cssText = `
    color: #4F4F4F;
    margin-left: 15px;
    margin: 0;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
`

// ============================= TEXT-2 END ============================= //

// ============================= TEXT-3 START ============================= //

elText3.textContent = ` Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality `;
elText3.style.cssText = `
    width: 249px;
    height: 70px;
    color: #333;
    margin: 0;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// ============================= TEXT-3 END ============================= //