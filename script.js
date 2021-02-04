let rotationBtn = document.querySelector('.rotation-btn');
let sideRowBtn = document.querySelector('.side-row');

function rotation() {
    if (rotationBtn.style.transform === 'rotate(0deg)' && sideRowBtn.style.transform === 'translate(-16rem)'){
        rotationBtn.style.transform = 'rotate(220deg)';
        rotationBtn.style.transition = 'all 1s';
        sideRowBtn.style.transform = 'translate(-0.25rem)';
        sideRowBtn.style.transition = 'transform 0.7s ease-in';
    } else {
      rotationBtn.style.transform = 'rotate(0deg)';
        sideRowBtn.style.transform = 'translate(-16rem)';
        sideRowBtn.style.transition = 'transform 0.7s ease-in';
    }

}


/*-------------------social-icon-------*/
let socialIcon1 = document.querySelector('.socialIcon1');
let socialIcon2 = document.querySelector('.socialIcon2');
let socialIcon3 = document.querySelector('.socialIcon3');
let socialIcon4 = document.querySelector('.socialIcon4');
let socialIcon5 = document.querySelector('.socialIcon5');

/*------------------------neomorphism-mode---------------------------------------*/
let bootsclassicImg = document.querySelector('.bootsclassicimg');
let cssclassicImg = document.querySelector('.cssclassicimg');
let htmlclassicImg = document.querySelector('.htmlclassicimg');

let ES5neu = document.querySelector('.ES5neu');
let ES6neu = document.querySelector('.ES6neu ');
let reactimgneu = document.querySelector('.reactimgneu');

let ES5classic = document.querySelector('.ES5classic');
let ES6classic = document.querySelector('.ES6classic');
let reactclassic = document.querySelector('.reactclassic');



let gitbashclassic = document.querySelector('.gitbashclassic');
let npmclassic = document.querySelector('.npmclassic');
let webstormclassic = document.querySelector('.webstormclassic');

let webstormflat = document.querySelector('.webstormflat');
let vscodeflat = document.querySelector('.vscodeflat');

let ES6neu1 = document.querySelector('.ES6neu1');
let vscodenue1 = document.querySelector('.vscodenue1');
let webstormneu1 = document.querySelector('.webstormneu1');


let gitbashneu = document.querySelector('.gitbashneu');
let npmneu = document.querySelector('.npmneu');
let webstormneu = document.querySelector('.webstormneu');

let githubneu = document.querySelector('.githubneu');
let msofficeneu = document.querySelector('.msofficeneu');
let vscodenue = document.querySelector('.vscodenue');


let githubclassic = document.querySelector('.githubclassic');
let msoffceclassic = document.querySelector('.msoffceclassic');
let vscodeClassic = document.querySelector('.vscodeClassic');

let bootsImg = document.querySelector('.bootstrapImg');
let cssImg = document.querySelector('.cssImg');
let htmlImg = document.querySelector('.htmlImg');

function neomorphismMode() {
    let body = document.querySelector('body');
    let homePageContent = document.querySelector('.content');
    let customCard1 = document.querySelector('.custom-card1');
    let customCard2 = document.querySelector('.custom-card2');
    let customCard3 = document.querySelector('.custom-card3');
    let customCard4 = document.querySelector('.custom-card4');
    let a1bg = document.querySelector('.a1bg');
    let a2bg = document.querySelector('.a2bg');
    let a3bg = document.querySelector('.a3bg');
    let a4bg = document.querySelector('.a4bg');
    let sideCard = document.querySelector('.side-card');
    let faUserCircle = document.querySelector('.fa-user-circle');
    let faUserGraduate = document.querySelector('.fa-user-graduates');
    let faBrief = document.querySelector('.fa-brief');
    let faBookReader = document.querySelector('.fa-book-reader');
    let neumorphismTheme = document.querySelector('.neumorphismTheme');
    let classicTheme = document.querySelector('.classicTheme');
    let flatTheme = document.querySelector('.flatTheme');
    let footer = document.querySelector('footer');
    let rotationBtn = document.querySelector('.rotation-btn');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    let footerh2Icon1 = document.querySelector('.fa-book-open');

    /*--------homoPageContent------*/
    body.style.backgroundColor = 'rgb(246, 243, 246)';
    homePageContent.style.backgroundColor = 'whitesmoke';
    customCard1.style.backgroundColor = 'whitesmoke';
    customCard1.style.boxShadow = 'rgb(255 255 285) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    customCard1.style.border = 'none';
    customCard1.style.borderRadius = '10px';
    customCard1.style.textDecoration = 'none';

    customCard2.style.backgroundColor = 'whitesmoke';
    customCard2.style.boxShadow = 'rgb(255 255 285) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    customCard2.style.border = 'none';
    customCard2.style.borderRadius = '10px';
    customCard2.style.textDecoration = 'none';

    customCard3.style.backgroundColor = 'whitesmoke';
    customCard3.style.boxShadow = 'rgb(255 255 285) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset ';
    customCard3.style.border = 'none';
    customCard3.style.borderRadius = '10px';
    customCard3.style.textDecoration = 'none';

    customCard4.style.backgroundColor = 'whitesmoke';
    customCard4.style.boxShadow = 'rgb(255 255 285) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    customCard4.style.border = 'none';
    customCard4.style.borderRadius = '10px';
    customCard4.style.textDecoration = 'none';

    a1bg.style.color = 'black';
    a2bg.style.color = 'black';
    a3bg.style.color = 'black';
    a4bg.style.color = 'black';

    faUserCircle.style.color = 'rgb(249,177,98)';
    faUserGraduate.style.color = 'rgb(249,177,98)';
    faBrief.style.color = 'rgb(249,177,98)';
    faBookReader.style.color = 'rgb(249,177,98)';

    /*-------theme-design-----------*/
    sideCard.style.backgroundColor = 'whitesmoke';
    sideCard.style.boxShadow = 'inset -3px 100px 5px #ffffff70, inset -1px 1px 9px #00000070';
    sideCard.style.borderRadius = '5px';
    sideCard.style.padding = '5px';

    neumorphismTheme.style.boxShadow ='inset -3px 100px 5px #ffffff70, inset -1px 1px 9px #00000070';
    neumorphismTheme.style.borderRadius = '6px';
    neumorphismTheme.style.padding = '8px';
    neumorphismTheme.style.width= '120px';

    classicTheme.style.width = '115px';
    classicTheme.style.border = 'none';
    classicTheme.style.padding = '5px';
    classicTheme.style.backgroundColor = 'white';

    flatTheme.style.width = '115px';
    flatTheme.style.padding = '5px';
    flatTheme.style.backgroundColor = '';

    footer.style.backgroundColor = 'black';
    footer.style.borderTop = '0px';
    rotationBtn.style.marginTop = '6px';

    footerh2Tag.style.padding = '10px';
    footerh2Tag.style.color = 'white';
    footerh2Tag.style.fontSize = 'lighter';
    footerh2Tag.style.position = 'fixed';
    footerh2Tag.style.textAlign = 'center';
    footerh2Tag.style.backgroundColor = 'seagreen';
    footerh2Tag.style.border = '3px solid seagreen';
    /*  footerh2Tag.style.width = '200px';*/
    footerh2Tag.style.borderRadius = '12px';
    footerh2Tag.style.textDecoration = 'none';
    footerh2Tag.style.boxShadow = 'inset -3px -3px 5px #ffffff60, inset 3px 3px 15px #00000090';
    footerh2Tag.style.marginLeft = '70px';
    footerh2Tag.style.marginTop = '-48px';
    footerh2Tag.style.height = '48px';
    /*footerh2Icon1.style.color = 'rgb(249,177,98)';
    footerh2Icon1.style.paddingRight = '5px';*/

    /*---------------------END-HOME-PAGE-CONTENT-----------------------------*/




    /*-------About-Page-Selector----*/
    let aboutBody = document.querySelector('#about');
    let Body = document.querySelector('body');
    let flataboutToHome = document.querySelector('.flatabout-to-home');
    let aboutFlatBg= document.querySelector('.aboutFlatBg');
    let AboutIndexHeader = document.querySelector('.AboutIndexHeader');
    let clasicAboutHeader = document.querySelector('.clasicAboutHeader');
    let AboutHeader = document.querySelector('.About-header');
    let aboutToHome = document.querySelector('.about-to-home');
    let aboutImg = document.querySelector('.about-img');
    let closeIcon1 = document.querySelector('.closeIcon1');



    aboutBody.style.backgroundColor = 'rgb(242,243,247)';
    AboutHeader.style.width = '50%';
    AboutHeader.style.backgroundColor = 'rgb(206,215,235)';
    AboutHeader.style.color = 'white';
    AboutHeader.style.marging = 'auto';
    AboutHeader.style.top = '-14px';
    AboutHeader.style.paddingTop = '12px';
    AboutHeader.style.fontWeight = 'lighter';
    AboutHeader.style.fontSize = 'smaller';
    AboutHeader.style.left = '25%';
    AboutHeader.style.borderRadius = '50px';
    AboutHeader.style.display = 'block';
    closeIcon1.style.display = 'none';

    AboutIndexHeader.style.backgroundColor = 'rgb(242,243,247)';
    AboutIndexHeader.style.border = '0px';
    AboutIndexHeader.style.borderTopLeftRadius= '0px';
    AboutIndexHeader.style.borderTopRightRadius= '0px';
    clasicAboutHeader.style.display = 'none';
    flataboutToHome.style.display = 'none';


    aboutToHome.style.backgroundColor = 'red';
    aboutToHome.style.width = '26px';
    aboutToHome.style.height = '26px';
    aboutToHome.style.borderRadius = '50px';

    aboutImg.style.border = '10px solid white';
    aboutImg.style.boxShadow =  '2px 2px 5px black';

    aboutFlatBg.style.backgroundColor = 'rgb(242,243,247)';
    Body.style.backgroundColor = 'whitesmoke';




    /*------------------------Work-Page-----------------------------------------*/
    let workPage = document.querySelector('#work-page');
    let flatswitchWorkToHome = document.querySelector('.flatswitchWork-to-home');
    let switchWorkToHome = document.querySelector('.switchWork-to-home');
    let workHeader= document.querySelector('.Work-header');
    let WorkIndexHeader = document.querySelector('.WorkIndexHeader');
    let clasicWorkHeader = document.querySelector('.clasicWorkHeader');
    let closeIcon2 = document.querySelector('.closeIcon2');
    let neuFolder1 = document.querySelector('.neuFolder1');
    let neuFolder2 = document.querySelector('.neuFolder2');
    let neuFolder3 = document.querySelector('.neuFolder3');
    let neuFolder4 = document.querySelector('.neuFolder4');
    let neuFolder5 = document.querySelector('.neuFolder5');
    let neuFolder6 = document.querySelector('.neuFolder6');
    let classicFolder1 = document.querySelector('.classicFolder1');
    let classicFolder2 = document.querySelector('.classicFolder2');
    let classicFolder3 = document.querySelector('.classicFolder3');
    let classicFolder4 = document.querySelector('.classicFolder4');
    let classicFolder5 = document.querySelector('.classicFolder5');
    let classicFolder6 = document.querySelector('.classicFolder6');
    let flatFolder1 = document.querySelector('.flatFolder1');
    let flatFolder2 = document.querySelector('.flatFolder2');
    let flatFolder3 = document.querySelector('.flatFolder3');
    let flatFolder4 = document.querySelector('.flatFolder4');
    let flatFolder5 = document.querySelector('.flatFolder5');
    let flatFolder6 = document.querySelector('.flatFolder6');

    workPage.style.backgroundColor = 'whitesmoke';

    flatswitchWorkToHome.style.display = 'none'
    switchWorkToHome.style.backgroundColor = 'red';
    switchWorkToHome.style.width = '26px';
    switchWorkToHome.style.height = '26px';
    switchWorkToHome.style.border = '50px';
    switchWorkToHome.style.borderRadius = '50px';

    workHeader.style.width = '50%';
    workHeader.style.backgroundColor = 'rgb(206,215,235)';
    workHeader.style.color = 'white';
    workHeader.style.marging = 'auto';
    workHeader.style.top = '-14px';
    workHeader.style.paddingTop = '12px';
    workHeader.style.fontWeight = 'lighter';
    workHeader.style.fontSize = 'smaller';
    workHeader.style.left = '25%';
    workHeader.style.borderRadius = '50px';
    workHeader.style.display = 'block'

    WorkIndexHeader.style.backgroundColor = 'whitesmoke';
    WorkIndexHeader.style.border = '0px';
    WorkIndexHeader.style.borderTopLeftRadius= '0px';
    WorkIndexHeader.style.borderTopRightRadius= '0px';
    closeIcon2.style.display = 'none';

    neuFolder1.style.display = 'block';
    neuFolder2.style.display = 'block';
    neuFolder3.style.display = 'block';
    neuFolder4.style.display = 'block';
    neuFolder5.style.display = 'block';
    neuFolder6.style.display = 'block';

    classicFolder1.style.display = 'none';
    classicFolder2.style.display = 'none';
    classicFolder3.style.display = 'none';
    classicFolder4.style.display = 'none';
    classicFolder5.style.display = 'none';
    classicFolder6.style.display = 'none';

    flatFolder1.style.display = 'none';
    flatFolder2.style.display = 'none';
    flatFolder3.style.display = 'none';
    flatFolder4.style.display = 'none';
    flatFolder5.style.display = 'none';
    flatFolder6.style.display = 'none';

    clasicWorkHeader.style.display = 'none';

    /*--------------work-page-subfolder-covid--------------*/
    let container1 = document.querySelector('.container1');

    container1.style.boxShadow = 'inset -2px -7px 27px  #00000020, inset 41px 5px 70px #ffffff70';
    container1.style.padding = '20px';
    container1.style.border = '0px';
    container1.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container1.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container1.style.height = '530px';
    container1.style.width = '92%';



    /*--------------work-page-subfolder-Github--------------*/
    let container2 = document.querySelector('.container2');

    container2.style.boxShadow = 'inset  0px -2px 13px   #00000020, inset 41px 8px 70px #ffffff70';
    container2.style.padding = '20px';
    container2.style.border = '0px';
    container2.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container2.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container2.style.height = '530px';
    container2.style.width = '92%';



    /*--------------work-page-subfolder-winport--------------*/
    let container3 = document.querySelector('.container3');

    container3.style.boxShadow = 'inset  0px -2px 13px   #00000020, inset 41px 8px 70px #ffffff70';
    container3.style.padding = '20px';
    container3.style.border = '0px';
    container3.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container3.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container3.style.height = '530px';
    container3.style.width = '92%';


    /*---------------------work-page-subfolder-Taxmann---------------*/

    let container4 = document.querySelector('.container4');

    container4.style.boxShadow = 'inset  0px -2px 13px   #00000020, inset 41px 8px 70px #ffffff70';
    container4.style.padding = '20px';
    container4.style.border = '0px';
    container4.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container4.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container4.style.height = '530px';
    container4.style.width = '92%';


    /*---------------------work-page-subfolder-Employee-portal---------------*/

    let container5 = document.querySelector('.container5');

    container5.style.boxShadow = 'inset  0px -2px 13px   #00000020, inset 41px 8px 70px #ffffff70';
    container5.style.padding = '20px';
    container5.style.border = '0px';
    container5.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container5.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container5.style.height = '530px';
    container5.style.width = '92%';



    /*---------------------work-page-subfolder-Employee-portal---------------*/

    let container6 = document.querySelector('.container6');

    container6.style.boxShadow = 'inset  0px -2px 13px   #00000020, inset 41px 8px 70px #ffffff70';
    container6.style.padding = '20px';
    container6.style.border = '0px';
    container6.style.backgroundColor = 'whitesmoke';
    /*container1.style.margin = 'auto';*/
    container6.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container6.style.minHeight = '530px';
    container6.style.width = '92%';






    /*-----------------------Skill-Page-Content-------------------------------*/
    let skillPage = document.querySelector('#Skill-Page');
    let flatBg = document.querySelector('.flatBg');
    let switchToHome = document.querySelector('.switch-to-home');
    let skillHeader = document.querySelector('.Skill-header');
    let SkillIndexHeader = document.querySelector('.SkillIndexHeader');
    let clasicSkillHeader = document.querySelector('.clasicSkillHeader');
    let closeIcon3 = document.querySelector('.closeIcon3');
    let skillFlatSwitch = document.querySelector('.skillflatswitch-to-home');

    skillPage.style.backgroundColor = 'whitesmoke';
    flatBg.style.backgroundColor = 'whitesmoke';

    switchToHome.style.backgroundColor = 'red';
    switchToHome.style.width = '26px';
    switchToHome.style.height = '26px';
    switchToHome.style.border = '50px';

    skillHeader.style.width = '50%';
    skillHeader.style.backgroundColor = 'rgb(206,215,235)';
    skillHeader.style.color = 'white';
    skillHeader.style.marging = 'auto';
    skillHeader.style.top = '-14px';
    skillHeader.style.paddingTop = '12px';
    skillHeader.style.fontWeight = 'lighter';
    skillHeader.style.fontSize = 'smaller';
    skillHeader.style.left = '25%';
    skillHeader.style.borderRadius = '50px';
    skillHeader.style.display = 'block';
    closeIcon3.style.display = 'none';
    skillFlatSwitch.style.display = 'none';

    SkillIndexHeader.style.backgroundColor = 'whitesmoke';
    SkillIndexHeader.style.border = '0px';
    SkillIndexHeader.style.borderTopLeftRadius= '0px';
    SkillIndexHeader.style.borderTopRightRadius= '0px';

    clasicSkillHeader.style.display = 'none';

    htmlImg.style.display = 'block';
    cssImg.style.display = 'block';
    bootsImg.style.display = 'block';

    ES5neu.style.display = 'block';
    ES6neu.style.display = 'none';
    reactimgneu.style.display = 'block';

    gitbashneu.style.display = 'block';
    npmneu.style.display = 'block';
    webstormneu.style.display = 'none';

    webstormflat.style.display = 'none';
    vscodeflat.style.display = 'none';

    githubneu.style.display = 'block';
    msofficeneu.style.display = 'block';
    vscodenue.style.display = 'none';


    ES6classic.style.display = 'none';
    ES5classic.style.display = 'none';
    reactclassic.style.display = 'none';

    htmlclassicImg.style.display = 'none';
    cssclassicImg.style.display = 'none';
    bootsclassicImg.style.display = 'none';

    webstormclassic.style.display = 'none';
    npmclassic.style.display = 'none';
    gitbashclassic.style.display = 'none';

    vscodeClassic.style.display = 'none';
    msoffceclassic.style.display = 'none';
    githubclassic.style.display = 'none';

    ES6neu1.style.display = 'block';
    vscodenue1.style.display = 'block';
    webstormneu1.style.display = 'block';



    /*------------------Learning-Page-Selector---------*/
    let learningBody = document.querySelector('#learning');
    let learninHeader = document.querySelector('.Learning-header');
    let LearnswitchToHome = document.querySelector('.Learnswitch-to-home');
    let learninIndexHeader = document.querySelector('.learningIndexHeader')
    let clasicTheme = document.querySelector('.clasicTheme');
    let backtoHomePage = document.querySelector('.switch-to-home');
    let circleIcon = document.querySelector('.circle');
    let certCircleIcon = document.querySelector('.certCircle');
    let lapCircleIcon = document.querySelector('.lapCircle');
    let brfCircle = document.querySelector('.brfCircle');
    let vrLine1 = document.querySelector('.vr-line1');
    let vrLine2 = document.querySelector('.vr-line2');
    let vrLine3 = document.querySelector('.vr-line3');
    let vrLine4 = document.querySelector('.vr-line4');
    let session2k16 = document.querySelector('.session-16-20');
    let session2k20 = document.querySelector('.session-20');
    let sessionk20 = document.querySelector('.session-2k-20');
    let sessionFuture = document.querySelector('.session-future');
    let closeIcon4 = document.querySelector('.closeIcon4');
    let LearnFlatTohome = document.querySelector('.LearnFlat-to-home');


    learningBody.style.backgroundColor = 'whitesmoke';

    learninHeader.style.width = '50%';
    learninHeader.style.backgroundColor = 'rgb(206,215,235)';
    learninHeader.style.color = 'white';
    learninHeader.style.marging = 'auto';
    learninHeader.style.top = '-14px';
    learninHeader.style.paddingTop = '12px';
    learninHeader.style.fontWeight = 'lighter';
    learninHeader.style.fontSize = 'smaller';
    learninHeader.style.left = '25%';
    learninHeader.style.borderRadius = '50px';
    learninHeader.style.display = 'block';
    closeIcon4.style.display = 'none';

    LearnswitchToHome.style.backgroundColor = 'red';
    LearnswitchToHome.style.width = '26px';
    LearnswitchToHome.style.height = '26px';
    LearnswitchToHome.style.borderRadius = '50px';

    LearnFlatTohome.style.display = 'none';


    learninIndexHeader.style.backgroundColor = 'whitesmoke';
    learninIndexHeader.style.border = '0px';
    learninIndexHeader.style.borderTopLeftRadius= '0px';
    learninIndexHeader.style.borderTopRightRadius= '0px';

    clasicTheme.style.display = 'none';


    backtoHomePage.style.backgroundColor = 'red';
    backtoHomePage.style.width = '26px';
    backtoHomePage.style.height = '26px';
    backtoHomePage.style.borderRadius = '50px';

    circleIcon.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    circleIcon.style.border = '0px';
    circleIcon.style.backgroundColor = 'whitesmoke';
    circleIcon.style.color = 'black';
    circleIcon.style.paddingTop = '10px';
    certCircleIcon.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    certCircleIcon.style.border = '0px';
    certCircleIcon.style.backgroundColor = 'whitesmoke';
    certCircleIcon.style.color = 'black';
    certCircleIcon.style.paddingTop = '10px';
    lapCircleIcon.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    lapCircleIcon.style.border = '0px';
    lapCircleIcon.style.backgroundColor = 'whitesmoke';
    lapCircleIcon.style.color = 'black';
    lapCircleIcon.style.paddingTop = '10px';
    brfCircle.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    brfCircle.style.border = '0px';
    brfCircle.style.backgroundColor = 'whitesmoke';
    brfCircle.style.color = 'black';
    brfCircle.style.paddingTop = '10px';

    vrLine1.style.backgroundColor = 'rgb(31,115,95)';
    vrLine1.style.border = '3px solid rgb(31,115,95)';

    vrLine2.style.backgroundColor = 'rgb(31,115,95)';
    vrLine2.style.border = '3px solid rgb(31,115,95)';

    vrLine3.style.backgroundColor = 'rgb(31,115,95)';
    vrLine3.style.border = '3px solid rgb(31,115,95)';

    vrLine4.style.backgroundColor = 'rgb(31,115,95)';
    vrLine4.style.border = '3px solid rgb(31,115,95)';

    session2k16.style.borderRadius = '50px';
    session2k16.style.border = '0px';
    session2k16.style.backgroundColor = 'whitesmoke';
    session2k16.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -4px -1px 4px inset';


    session2k20.style.borderRadius = '50px';
    session2k20.style.border = '0px';
    session2k20.style.backgroundColor = 'whitesmoke';
    session2k20.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -4px -1px 4px inset';


    sessionk20.style.borderRadius = '50px';
    sessionk20.style.border = '0px';
    sessionk20.style.backgroundColor = 'whitesmoke';
    sessionk20.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -4px -1px 4px inset';


    sessionFuture.style.borderRadius = '50px';
    sessionFuture.style.border = '0px';
    sessionFuture.style.backgroundColor = 'whitesmoke';
    sessionFuture.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -4px -1px 4px inset';

    socialIcon1.style.backgroundColor = 'whitesmoke';
    socialIcon2.style.backgroundColor = 'whitesmoke';
    socialIcon3.style.backgroundColor = 'whitesmoke';
    socialIcon4.style.backgroundColor = 'whitesmoke';
    socialIcon5.style.backgroundColor = 'whitesmoke';

    socialIcon1.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    socialIcon2.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    socialIcon3.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    socialIcon4.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';
    socialIcon5.style.boxShadow = 'rgb(255, 255, 255) 2px 2px 10px inset, rgba(0, 66, 115, 0.125) -2px -1px 4px inset';

    socialIcon1.style.border = '0px ';
    socialIcon2.style.border = '0px ';
    socialIcon3.style.border = '0px';
    socialIcon4.style.border = '0px';
    socialIcon5.style.border = '0px';

}



/*----------------------------classic-mode------------------------------------*/

function clssicMode() {
    let homePageContent = document.querySelector('.content');
    let customCard1 = document.querySelector('.custom-card1');
    let customCard2 = document.querySelector('.custom-card2');
    let customCard3 = document.querySelector('.custom-card3');
    let customCard4 = document.querySelector('.custom-card4');
    let a1bg = document.querySelector('.a1bg');
    let a2bg = document.querySelector('.a2bg');
    let a3bg = document.querySelector('.a3bg');
    let a4bg = document.querySelector('.a4bg');
    let faUserCircle = document.querySelector('.fa-user-circle');
    let faUserGraduate = document.querySelector('.fa-user-graduates');
    let faBrief = document.querySelector('.fa-brief');
    let faBookReader = document.querySelector('.fa-book-reader');
    let sideCard = document.querySelector('.side-card');
    let neumorphismTheme = document.querySelector('.neumorphismTheme');
    let classicTheme = document.querySelector('.classicTheme');
    let flatTheme = document.querySelector('.flatTheme');
    let footer = document.querySelector('footer');
    let rotationBtn = document.querySelector('.rotation-btn');
    let footerh2Tag = document.querySelector('.footerh2Tag');



    /*--------homoPageContent------*/
    homePageContent.style.backgroundColor = 'rgb(122,194,185)';
    customCard1.style.backgroundColor = 'rgb(122,194,185)';
    customCard1.style.boxShadow = 'none';
    customCard1.style.border = '3px solid black';
    customCard1.style.borderRadius = '0px';
    customCard1.style.textDecoration = 'none';

    customCard2.style.backgroundColor = 'rgb(122,194,185)';
    customCard2.style.boxShadow = 'none';
    customCard2.style.border = '3px solid black';
    customCard2.style.borderRadius = '0px';
    customCard2.style.textDecoration = 'none';

    customCard3.style.backgroundColor = 'rgb(122,194,185)';
    customCard3.style.boxShadow = 'none';
    customCard3.style.border = '3px solid black';
    customCard3.style.borderRadius = '0px';
    customCard3.style.textDecoration = 'none';

    customCard4.style.backgroundColor = 'rgb(122,194,185)';
    customCard4.style.boxShadow = 'none';
    customCard4.style.border = '3px solid black';
    customCard4.style.borderRadius = '0px';
    customCard4.style.textDecoration = 'none';

    a1bg.style.color = 'black';
    a2bg.style.color = 'black';
    a3bg.style.color = 'black';
    a4bg.style.color = 'black';

    faUserCircle.style.color = 'rgb(36,40,41)';
    faUserGraduate.style.color = 'rgb(36,40,41)';
    faBrief.style.color = 'rgb(36,40,41)';
    faBookReader.style.color = 'rgb(36,40,41)';

    /*-------theme-design-----------*/
    sideCard.style.backgroundColor = 'rgb(144,214,205)';
    sideCard.style.boxShadow = 'black 1px 2px 0px 4px';
    sideCard.style.borderRadius = '10px';

    neumorphismTheme.style.boxShadow ='none';
    neumorphismTheme.style.borderRadius = '0px';
    neumorphismTheme.style.width = '115px';
    neumorphismTheme.style.padding = '5px';

    flatTheme.style.width = '115px';
    flatTheme.style.padding = '5px';
    flatTheme.style.backgroundColor = '';

    classicTheme.style.width = '120px';
    classicTheme.style.border = '3px solid black';
    classicTheme.style.padding = '5px';
    classicTheme.style.backgroundColor = 'rgb(163,211,205)';

    footer.style.backgroundColor = 'rgb(144,214,205)';
    footer.style.borderTop = '3px solid black';
    rotationBtn.style.marginTop = '5px';

    footerh2Tag.style.boxShadow = 'none';
    footerh2Tag.style.color = 'black';
    footerh2Tag.style.height = '59px';
    footerh2Tag.style.marginTop = '-54px';
    footerh2Tag.style.padding = '19px';
    footerh2Tag.style.borderRadius = '0px';
    footerh2Tag.style.backgroundColor = 'rgb(144,214,205)';
    footerh2Tag.style.border = '0px';
    footerh2Tag.style.borderBottom = '0px';
    footerh2Tag.style.borderLeft = '2px solid black';
    footerh2Tag.style.borderRight = '5px solid black';
    /*footerIcon2.style.color = 'rgb(36,40,41)';
    footerIcon2.style.paddingRight = '5px';
*/
    /*---------------------END-HOME-PAGE-CONTENT-----------------------------*/

    /*----------------------Work-Page-----------------------------------------*/
    let body = document.querySelector('body');
    let flatswitchWorkToHome = document.querySelector('.flatswitchWork-to-home');
    let workPage = document.querySelector('#work-page');
    let WorkHeader = document.querySelector('.Work-header');
    let clasicWorkHeader = document.querySelector('.clasicWorkHeader');
    let WorkIndexHeader = document.querySelector('.WorkIndexHeader');
    let closeIcon2 = document.querySelector('.closeIcon2');
    let neuFolder1 = document.querySelector('.neuFolder1');
    let neuFolder2 = document.querySelector('.neuFolder2');
    let neuFolder3 = document.querySelector('.neuFolder3');
    let neuFolder4 = document.querySelector('.neuFolder4');
    let neuFolder5 = document.querySelector('.neuFolder5');
    let neuFolder6 = document.querySelector('.neuFolder6');
    let classicFolder1 = document.querySelector('.classicFolder1');
    let classicFolder2 = document.querySelector('.classicFolder2');
    let classicFolder3 = document.querySelector('.classicFolder3');
    let classicFolder4 = document.querySelector('.classicFolder4');
    let classicFolder5 = document.querySelector('.classicFolder5');
    let classicFolder6 = document.querySelector('.classicFolder6');
    let flatFolder1 = document.querySelector('.flatFolder1');
    let flatFolder2 = document.querySelector('.flatFolder2');
    let flatFolder3 = document.querySelector('.flatFolder3');
    let flatFolder4 = document.querySelector('.flatFolder4');
    let flatFolder5 = document.querySelector('.flatFolder5');
    let flatFolder6 = document.querySelector('.flatFolder6');


    body.style.backgroundColor = 'rgb(144,214,205)';
    workPage.style.backgroundColor = 'rgb(144,214,205)';

    WorkHeader.style.display = 'none';
    flatswitchWorkToHome.style.display = 'none';

    WorkIndexHeader.style.display = 'block';
    WorkIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    WorkIndexHeader.style.border = '3px solid black';
    WorkIndexHeader.style.borderTopLeftRadius= '15px';
    WorkIndexHeader.style.borderTopRightRadius= '15px';
    closeIcon2.style.display = 'block';

    clasicWorkHeader.style.display = 'block';
    clasicWorkHeader.style.width = '115px';
    clasicWorkHeader.style.padding = '6px';
    clasicWorkHeader.style.color = 'black';

    neuFolder1.style.display = 'none';
    neuFolder2.style.display = 'none';
    neuFolder3.style.display = 'none';
    neuFolder4.style.display = 'none';
    neuFolder5.style.display = 'none';
    neuFolder6.style.display = 'none';

    flatFolder1.style.display = 'none';
    flatFolder2.style.display = 'none';
    flatFolder3.style.display = 'none';
    flatFolder4.style.display = 'none';
    flatFolder5.style.display = 'none';
    flatFolder6.style.display = 'none';

    classicFolder1.style.display = 'block';
    classicFolder2.style.display = 'block';
    classicFolder3.style.display = 'block';
    classicFolder4.style.display = 'block';
    classicFolder5.style.display = 'block';
    classicFolder6.style.display = 'block';

    /*--------------work-page-subfolder-container---------*/
    let container1 = document.querySelector('.container1');
    let container2 = document.querySelector('.container2');
    let container3 = document.querySelector('.container3');
    let container4 = document.querySelector('.container4');
    let container5 = document.querySelector('.container5');
    let container6 = document.querySelector('.container6');

    container1.style.boxShadow = 'none';
    container1.style.backgroundColor = 'rgb(144,214,205)';
    container1.style.padding = '20px';
    container1.style.borderRadius = '20px';
    container1.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container1.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container1.style.height = '530px';
    container1.style.width = '92%';

    container2.style.boxShadow = 'none';
    container2.style.backgroundColor = 'rgb(144,214,205)';
    container2.style.padding = '20px';
    container2.style.borderRadius = '20px';
    container2.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container2.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container2.style.height = '530px';
    container2.style.width = '92%';

    container3.style.boxShadow = 'none';
    container3.style.backgroundColor = 'rgb(144,214,205)';
    container3.style.padding = '20px';
    container3.style.borderRadius = '20px';
    container3.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container3.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container3.style.height = '530px';
    container3.style.width = '92%';

    container4.style.boxShadow = 'none';
    container4.style.backgroundColor = 'rgb(144,214,205)';
    container4.style.padding = '20px';
    container4.style.borderRadius = '20px';
    container4.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container4.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container4.style.height = '530px';
    container4.style.width = '92%';

    container5.style.boxShadow = 'none';
    container5.style.backgroundColor = 'rgb(144,214,205)';
    container5.style.padding = '20px';
    container5.style.borderRadius = '20px';
    container5.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container5.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container5.style.height = '530px';
    container5.style.width = '92%';

    container6.style.boxShadow = 'none';
    container6.style.backgroundColor = 'rgb(144,214,205)';
    container6.style.padding = '20px';
    container6.style.borderRadius = '20px';
    container6.style.border = '2px solid black';
    /*container1.style.margin = 'auto';*/
    container6.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container6.style.height = '530px';
    container6.style.width = '92%';






    /*-----------------------About-Page-Selector------------------------*/
    let aboutBody = document.querySelector('#about');
    let aboutFlatBg= document.querySelector('.aboutFlatBg');
    let AboutIndexHeader = document.querySelector('.AboutIndexHeader');
    let clasicAboutHeader = document.querySelector('.clasicAboutHeader');
    let AboutHeader = document.querySelector('.About-header');
    let aboutToHome = document.querySelector('.about-to-home');
    let aboutImg = document.querySelector('.about-img');
    let closeIcon = document.querySelector('.fa-times');

    aboutBody.style.backgroundColor = 'rgb(144,214,205)';
    aboutFlatBg.style.backgroundColor = 'rgb(144,214,205)';

    AboutHeader.style.display = 'none';

    AboutIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    AboutIndexHeader.style.border = '3px solid black';
    AboutIndexHeader.style.borderTopLeftRadius= '15px';
    AboutIndexHeader.style.borderTopRightRadius= '15px';
    closeIcon.style.display = 'block';

    clasicAboutHeader.style.display = 'block';
    clasicAboutHeader.style.width = '115px';
    clasicAboutHeader.style.padding = '6px';
    clasicAboutHeader.style.color = 'black';

    aboutImg.style.border = '10px solid rgb(144,214,205)';
    aboutImg.style.boxShadow =  'black 1px 1px 0px 2px';




    /*-----------------------Skill-Page-Content-------------------------------*/
    let skillPage = document.querySelector('#Skill-Page');
    let flatBg = document.querySelector('.flatBg');
    let skillHeader = document.querySelector('.Skill-header');
    let SkillIndexHeader = document.querySelector('.SkillIndexHeader');
    let clasicSkillHeader = document.querySelector('.clasicSkillHeader');
    let closeIcon3 = document.querySelector('.closeIcon3');
    let skillflatswitch = document.querySelector('.skillflatswitch-to-home');


    skillPage.style.backgroundColor = 'rgb(144,214,205)';
    flatBg.style.backgroundColor = 'rgb(144,214,205)';
    skillHeader.style.display = 'none';

    SkillIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    SkillIndexHeader.style.border = '3px solid black';
    SkillIndexHeader.style.borderTopLeftRadius= '15px';
    SkillIndexHeader.style.borderTopRightRadius= '15px';
    closeIcon3.style.display = 'block';
    skillflatswitch.style.display = 'none';

    clasicSkillHeader.style.display = 'block';
    clasicSkillHeader.style.width = '0px';
    clasicSkillHeader.style.padding = '6px';
    clasicSkillHeader.style.color= 'black';

    htmlImg.style.display = 'none';
    cssImg.style.display = 'none';
    bootsImg.style.display = 'none';

    ES5neu.style.display = 'none';
    ES6neu.style.display = 'none';
    reactimgneu.style.display = 'none';

    ES6classic.style.display = 'block';
    ES5classic.style.display = 'block';
    reactclassic.style.display = 'block';

    htmlclassicImg.style.display = 'block';
    cssclassicImg.style.display = 'block';
    bootsclassicImg.style.display = 'block';

    webstormclassic.style.display = 'block';
    npmclassic.style.display = 'block';
    gitbashclassic.style.display = 'block';

    ES5neu.style.display = 'none';
    ES6neu.style.display = 'none';
    reactimgneu.style.display = 'none';

    gitbashneu.style.display = 'none';
    npmneu.style.display = 'none';
    webstormneu.style.display = 'none';

    githubneu.style.display = 'none';
    msofficeneu.style.display = 'none';
    vscodenue.style.display = 'none';

    webstormflat.style.display = 'none';
    vscodeflat.style.display = 'none';

    vscodeClassic.style.display = 'block';
    msoffceclassic.style.display = 'block';
    githubclassic.style.display = 'block';

    ES6neu1.style.display = 'none';
    vscodenue1.style.display = 'none';
    webstormneu1.style.display = 'none';



    /*------------------Learning-Page-Selector---------*/
    let learningBody = document.querySelector('#learning');
    let learninHeader = document.querySelector('.Learning-header');
    let learninIndexHeader = document.querySelector('.learningIndexHeader');
    let clasicTheme = document.querySelector('.clasicTheme');
    let backtoHomePage = document.querySelector('.switch-to-home');
    let LearnFlaTohome = document.querySelector('.LearnFlat-to-home');
    let circleIcon = document.querySelector('.circle');
    let certCircleIcon = document.querySelector('.certCircle');
    let lapCircleIcon = document.querySelector('.lapCircle');
    let brfCircle = document.querySelector('.brfCircle');
    let vrLine1 = document.querySelector('.vr-line1');
    let vrLine2 = document.querySelector('.vr-line2');
    let vrLine3 = document.querySelector('.vr-line3');
    let vrLine4 = document.querySelector('.vr-line4');
    let session2k16 = document.querySelector('.session-16-20');
    let session2k20 = document.querySelector('.session-20');
    let sessionk20 = document.querySelector('.session-2k-20');
    let sessionFuture = document.querySelector('.session-future');
    let closeIcon4 = document.querySelector('.closeIcon4');

    learningBody.style.backgroundColor = 'rgb(144,214,205)';
    learningBody.style.height = '940px';
    learningBody.style.borderRadius = '40px';
    learningBody.style.top = '-2px';
    learninHeader.style.display = 'none';
    LearnFlaTohome.style.display = 'none';
    learninIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    learninIndexHeader.style.border = '3px solid black';
    learninIndexHeader.style.borderTopLeftRadius= '15px';
    learninIndexHeader.style.borderTopRightRadius= '15px';
    closeIcon4.style.display = 'block';

    clasicTheme.style.display = 'block';
    clasicTheme.style.width = '0px';
    clasicTheme.style.padding = '6px';
    clasicTheme.style.color = 'black';

    circleIcon.style.boxShadow = 'none';
    circleIcon.style.border = '3px solid black';
    circleIcon.style.color = 'rgb(36,40,41)';
    circleIcon.style.backgroundColor = 'rgb(144,214,205)';
    circleIcon.style.paddingTop = '10px';
    certCircleIcon.style.boxShadow = 'none';
    certCircleIcon.style.border = '3px solid black';
    certCircleIcon.style.color = 'rgb(36,40,41)';
    certCircleIcon.style.backgroundColor = 'rgb(144,214,205)';
    certCircleIcon.style.paddingTop = '9px';
    lapCircleIcon.style.boxShadow = 'none';
    lapCircleIcon.style.border = '3px solid black';
    lapCircleIcon.style.color = 'rgb(36,40,41)';
    lapCircleIcon.style.backgroundColor = 'rgb(144,214,205)';
    lapCircleIcon.style.paddingTop = '10px';
    brfCircle.style.boxShadow = 'none';
    brfCircle.style.border = '3px solid black';
    brfCircle.style.color = 'rgb(36,40,41)';
    brfCircle.style.backgroundColor = 'rgb(144,214,205)';
    brfCircle.style.paddingTop = '10px';

    vrLine1.style.backgroundColor = 'black';
    vrLine1.style.border = '2px solid black';

    vrLine2.style.backgroundColor = 'black';
    vrLine2.style.border = '2px solid black';

    vrLine3.style.backgroundColor = 'black';
    vrLine3.style.border = '2px solid black';

    vrLine4.style.backgroundColor = 'black';
    vrLine4.style.border = '2px solid black';

    session2k16.style.borderRadius = '0px';
    session2k16.style.border = '1px solid black';
    session2k16.style.backgroundColor = 'rgb(144,214,205)';
    session2k16.style.boxShadow = 'none';


    session2k20.style.borderRadius = '0px';
    session2k20.style.border = '1px solid black';
    session2k20.style.backgroundColor = 'rgb(144,214,205)';
    session2k20.style.boxShadow = 'none';


    sessionk20.style.borderRadius = '0px';
    sessionk20.style.border = '1px solid black';
    sessionk20.style.backgroundColor = 'rgb(144,214,205)';
    sessionk20.style.boxShadow = 'none';


    sessionFuture.style.borderRadius = '0px';
    sessionFuture.style.border = '1px solid black';
    sessionFuture.style.backgroundColor = 'rgb(144,214,205)';
    sessionFuture.style.boxShadow = 'none';

    /*------------social-icon-----*/
    socialIcon1.style.backgroundColor = 'rgb(122,194,185)';
    socialIcon2.style.backgroundColor = 'rgb(122,194,185)';
    socialIcon3.style.backgroundColor = 'rgb(122,194,185)';
    socialIcon4.style.backgroundColor = 'rgb(122,194,185)';
    socialIcon5.style.backgroundColor = 'rgb(122,194,185)';

    socialIcon1.style.border = '3px solid black';
    socialIcon2.style.border = '3px solid black';
    socialIcon3.style.border = '3px solid black';
    socialIcon4.style.border = '3px solid black';
    socialIcon5.style.border = '3px solid black';

}


/*-----------------------flat-theme------------------*/

function flatTheme(){

    let homePageContent = document.querySelector('.content');
    let customCard1 = document.querySelector('.custom-card1');
    let customCard2 = document.querySelector('.custom-card2');
    let customCard3 = document.querySelector('.custom-card3');
    let customCard4 = document.querySelector('.custom-card4');
    let a1bg = document.querySelector('.a1bg');
    let a2bg = document.querySelector('.a2bg');
    let a3bg = document.querySelector('.a3bg');
    let a4bg = document.querySelector('.a4bg');
    let faUserCircle = document.querySelector('.fa-user-circle');
    let faUserGraduate = document.querySelector('.fa-user-graduates');
    let faBrief = document.querySelector('.fa-brief');
    let faBookReader = document.querySelector('.fa-book-reader');
    let sideCard = document.querySelector('.side-card');
    let neumorphismTheme = document.querySelector('.neumorphismTheme');
    let classicTheme = document.querySelector('.classicTheme');
    let flatTheme = document.querySelector('.flatTheme');
    let footer = document.querySelector('footer');
    let rotationBtn = document.querySelector('.rotation-btn');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    let footerh2Icon1 = document.querySelector('.fa-book-open');


    /*--------homoPageContent------*/
    homePageContent.style.backgroundColor = 'rgb(26,188,156)';
    customCard1.style.backgroundColor = 'rgb(44,62,80)';
    customCard1.style.boxShadow = 'none';
    customCard1.style.border = '0px';
    customCard1.style.borderRadius = '0px';
    customCard1.style.textDecoration = 'none';

    customCard2.style.backgroundColor = 'rgb(44,62,80)';
    customCard2.style.boxShadow = 'none';
    customCard2.style.border = '0px';
    customCard2.style.borderRadius = '0px';
    customCard2.style.textDecoration = 'none';

    customCard3.style.backgroundColor = 'rgb(44,62,80)';
    customCard3.style.boxShadow = 'none';
    customCard3.style.border = '0px ';
    customCard3.style.borderRadius = '0px';
    customCard3.style.textDecoration = 'none';

    customCard4.style.backgroundColor = 'rgb(44,62,80)';
    customCard4.style.boxShadow = 'none';
    customCard4.style.border = '0px';
    customCard4.style.borderRadius = '0px';
    customCard4.style.textDecoration = 'none';
    a1bg.style.color = 'white';
    a2bg.style.color = 'white';
    a3bg.style.color = 'white';
    a4bg.style.color = 'white';

    faUserCircle.style.color = 'rgb(249,177,98)';
    faUserGraduate.style.color = 'rgb(249,177,98)';
    faBrief.style.color = 'rgb(249,177,98)';
    faBookReader.style.color = 'rgb(249,177,98)';



    /*-------theme-design-----------*/
    sideCard.style.backgroundColor = 'rgb(44,62,80)';
    sideCard.style.boxShadow = 'none';
    sideCard.style.borderRadius = '0px';

    neumorphismTheme.style.boxShadow ='none';
    neumorphismTheme.style.borderRadius = '0px';
    neumorphismTheme.style.width = '115px';
    neumorphismTheme.style.padding = '5px';

    flatTheme.style.width = '120px';
    flatTheme.style.padding = '5px';
    flatTheme.style.backgroundColor = 'rgb(23,38,59)';

    classicTheme.style.width = '115px';
    classicTheme.style.border = '0px';
    classicTheme.style.padding = '5px';
    classicTheme.style.backgroundColor = '';

    footer.style.backgroundColor = 'rgb(44,62,80)';
    footer.style.borderTop = '0px';
    rotationBtn.style.marginTop = '6px';

    footerh2Tag.style.boxShadow = 'none';
    footerh2Tag.style.height = '59px';
    footerh2Tag.style.marginTop = '-54px';
    footerh2Tag.style.padding = '19px';
    footerh2Tag.style.borderRadius = '0px';
    footerh2Tag.style.backgroundColor = 'rgb(23,38,59)';
    footerh2Tag.style.border = '0px';
    footerh2Tag.style.borderBottom = '4px solid rgb(31,115,95)';
    footerh2Tag.style.color = 'white';
   /* footerh2Icon1.style.color = 'rgb(249,177,98)';
    footerh2Icon1.style.paddingRight = '5px';*/




    /*-----------------------About-Page-Selector------------------------*/
    let aboutBody = document.querySelector('#about');
    let aboutFlatBg= document.querySelector('.aboutFlatBg');
    let AboutIndexHeader = document.querySelector('.AboutIndexHeader');
    let clasicAboutHeader = document.querySelector('.clasicAboutHeader');
    let AboutHeader = document.querySelector('.About-header');
    let aboutToHome = document.querySelector('.about-to-home');
    let flataboutToHome = document.querySelector('.flatabout-to-home');
    let aboutImg = document.querySelector('.about-img');
    let closeIcon = document.querySelector('.fa-times');

    aboutBody.style.backgroundColor = 'white';
    aboutFlatBg.style.backgroundColor = 'rgb(233,241,245)';
    aboutFlatBg.style.width = '98%';
    aboutFlatBg.style.margin = 'auto';
   /* aboutFlatBg.style.height = '97rem';*/

    AboutHeader.style.display = 'none';

    AboutIndexHeader.style.backgroundColor = 'rgb(23,38,59)';
    AboutIndexHeader.style.border = '0px';
    AboutIndexHeader.style.borderTopLeftRadius= '0px';
    AboutIndexHeader.style.borderTopRightRadius= '0px';
    closeIcon.style.display = 'none';

    clasicAboutHeader.style.display = 'block';
    clasicAboutHeader.style.width = '115px';
    clasicAboutHeader.style.padding = '6px';
    clasicAboutHeader.style.color = 'white';

    aboutImg.style.border = '10px solid white';
    aboutImg.style.boxShadow =  'black 0px 0px 0px 1px';

    flataboutToHome.style.backgroundColor = 'red';
    flataboutToHome.style.width = '26px';
    flataboutToHome.style.height = '26px';
    flataboutToHome.style.display = 'block';



/*-------------------------work-page-------------------------------*/

    let workPage = document.querySelector('#work-page');
    let flatswitchWorkToHome = document.querySelector('.flatswitchWork-to-home');
    let workHeader= document.querySelector('.Work-header');
    let WorkIndexHeader = document.querySelector('.WorkIndexHeader');
    let clasicWorkHeader = document.querySelector('.clasicWorkHeader');
    let closeIcon2 = document.querySelector('.closeIcon2');
    let neuFolder1 = document.querySelector('.neuFolder1');
    let neuFolder2 = document.querySelector('.neuFolder2');
    let neuFolder3 = document.querySelector('.neuFolder3');
    let neuFolder4 = document.querySelector('.neuFolder4');
    let neuFolder5 = document.querySelector('.neuFolder5');
    let neuFolder6 = document.querySelector('.neuFolder6');
    let classicFolder1 = document.querySelector('.classicFolder1');
    let classicFolder2 = document.querySelector('.classicFolder2');
    let classicFolder3 = document.querySelector('.classicFolder3');
    let classicFolder4 = document.querySelector('.classicFolder4');
    let classicFolder5 = document.querySelector('.classicFolder5');
    let classicFolder6 = document.querySelector('.classicFolder6');
    let flatFolder1 = document.querySelector('.flatFolder1');
    let flatFolder2 = document.querySelector('.flatFolder2');
    let flatFolder3 = document.querySelector('.flatFolder3');
    let flatFolder4 = document.querySelector('.flatFolder4');
    let flatFolder5 = document.querySelector('.flatFolder5');
    let flatFolder6 = document.querySelector('.flatFolder6');


    workPage.style.backgroundColor = 'white';

    workHeader.style.display = 'none';
    WorkIndexHeader.style.backgroundColor = 'rgb(23,38,59)';
    WorkIndexHeader.style.border = '0px';
    WorkIndexHeader.style.borderTopLeftRadius= '0px';
    WorkIndexHeader.style.borderTopRightRadius= '0px';
    closeIcon2.style.display = 'none';

    clasicWorkHeader.style.display = 'block';
    clasicWorkHeader.style.width = '115px';
    clasicWorkHeader.style.padding = '6px';
    clasicWorkHeader.style.color = 'white';

    flatswitchWorkToHome.style.backgroundColor = 'red';
    flatswitchWorkToHome.style.width = '26px';
    flatswitchWorkToHome.style.height = '26px';
    flatswitchWorkToHome.style.display = 'block';


    neuFolder1.style.display = 'none';
    neuFolder2.style.display = 'none';
    neuFolder3.style.display = 'none';
    neuFolder4.style.display = 'none';
    neuFolder5.style.display = 'none';
    neuFolder6.style.display = 'none';

    classicFolder1.style.display = 'none';
    classicFolder2.style.display = 'none';
    classicFolder3.style.display = 'none';
    classicFolder4.style.display = 'none';
    classicFolder5.style.display = 'none';
    classicFolder6.style.display = 'none';

    flatFolder1.style.display = 'block';
    flatFolder2.style.display = 'block';
    flatFolder3.style.display = 'block';
    flatFolder4.style.display = 'block';
    flatFolder5.style.display = 'block';
    flatFolder6.style.display = 'block';



    /*--------------work-page-subfolder-container---------*/
    let container1 = document.querySelector('.container1');
    let container2 = document.querySelector('.container2');
    let container3 = document.querySelector('.container3');
    let container4 = document.querySelector('.container4');
    let container5 = document.querySelector('.container5');
    let container6 = document.querySelector('.container6');

    container1.style.boxShadow = 'none';
    container1.style.backgroundColor = 'rgb(233,241,245)';
    container1.style.padding = '20px';
    container1.style.borderRadius = '0px';
    container1.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container1.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container1.style.height = '530px';
    container1.style.width = '92%';

    container2.style.boxShadow = 'none';
    container2.style.backgroundColor = 'rgb(233,241,245)';
    container2.style.padding = '20px';
    container2.style.borderRadius = '0px';
    container2.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container2.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container2.style.height = '530px';
    container2.style.width = '92%';

    container3.style.boxShadow = 'none';
    container3.style.backgroundColor = 'rgb(233,241,245)';
    container3.style.padding = '20px';
    container3.style.borderRadius = '0px';
    container3.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container3.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container3.style.height = '530px';
    container3.style.width = '92%';

    container4.style.boxShadow = 'none';
    container4.style.backgroundColor = 'rgb(233,241,245)';
    container4.style.padding = '20px';
    container4.style.borderRadius = '0px';
    container4.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container4.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container4.style.height = '530px';
    container4.style.width = '92%';

    container5.style.boxShadow = 'none';
    container5.style.backgroundColor = 'rgb(233,241,245)';
    container5.style.padding = '20px';
    container5.style.borderRadius = '0px';
    container5.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container5.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container5.style.height = '530px';
    container5.style.width = '92%';

    container6.style.boxShadow = 'none';
    container6.style.backgroundColor = 'rgb(233,241,245)';
    container6.style.padding = '20px';
    container6.style.borderRadius = '0px';
    container6.style.border = '0px';
    /*container1.style.margin = 'auto';*/
    container6.style.margin = '65px auto';
    /*container1.style.marginBottom = '20px';*/
    container6.style.height = '530px';
    container6.style.width = '92%';





    /*-----------------------Skill-Page-Content-------------------------------*/
    let skillPage = document.querySelector('#Skill-Page');
    let body = document.querySelector('body');
    let flatBg = document.querySelector('.flatBg');
    let skillHeader = document.querySelector('.Skill-header');
    let SkillIndexHeader = document.querySelector('.SkillIndexHeader');
    let clasicSkillHeader = document.querySelector('.clasicSkillHeader');
    let closeIcon3 = document.querySelector('.closeIcon3');
    let skillFlatSwitch = document.querySelector('.skillflatswitch-to-home');


    skillPage.style.backgroundColor = 'white';
    body.style.backgroundColor = 'white';
    skillHeader.style.display = 'none';
    flatBg.style.backgroundColor = 'rgb(233,241,245)';
    flatBg.style.width = '97%';
    flatBg.style.margin = 'auto';
    flatBg.style.marginBottom = '65px';

    SkillIndexHeader.style.backgroundColor = 'rgb(23,38,59)';
    SkillIndexHeader.style.border = '0px ';
    SkillIndexHeader.style.borderTopLeftRadius= '0px';
    SkillIndexHeader.style.borderTopRightRadius= '0px';
    closeIcon3.style.display = 'none';

    skillFlatSwitch.style.backgroundColor = 'red';
    skillFlatSwitch.style.width = '26px';
    skillFlatSwitch.style.height = '26px';
    skillFlatSwitch.style.display = 'block';


    clasicSkillHeader.style.display = 'block';
    clasicSkillHeader.style.color = 'white';

    htmlImg.style.display = 'block';
    cssImg.style.display = 'block';
    bootsImg.style.display = 'block';

    ES5neu.style.display = 'block';
    ES6neu.style.display = 'block';
    reactimgneu.style.display = 'block';

    gitbashneu.style.display = 'block';
    npmneu.style.display = 'block';
    webstormneu.style.display = 'block';

    githubneu.style.display = 'block';
    msofficeneu.style.display = 'block';
    vscodenue.style.display = 'block';


    ES6classic.style.display = 'none';
    ES5classic.style.display = 'none';
    reactclassic.style.display = 'none';

    htmlclassicImg.style.display = 'none';
    cssclassicImg.style.display = 'none';
    bootsclassicImg.style.display = 'none';

    webstormclassic.style.display = 'none';
    npmclassic.style.display = 'none';
    gitbashclassic.style.display = 'none';

    vscodeClassic.style.display = 'none';
    msoffceclassic.style.display = 'none';
    githubclassic.style.display = 'none';

    webstormneu.style.display = 'none';
    webstormflat.style.display = 'block';

    vscodenue.style.display = 'none';
    vscodeflat.style.display = 'block';

    ES6neu1.style.display = 'none';
    vscodenue1.style.display = 'none';
    webstormneu1.style.display = 'none';


    /*------------------Learning-Page-Selector---------*/
    let learningBody = document.querySelector('#learning');
    let learninHeader = document.querySelector('.Learning-header');
    let LearnflatToHome = document.querySelector('.LearnFlat-to-home');
    let learninIndexHeader = document.querySelector('.learningIndexHeader')
    let clasicTheme = document.querySelector('.clasicTheme');
    let backtoHomePage = document.querySelector('.switch-to-home');
    let circleIcon = document.querySelector('.circle');
    let certCircleIcon = document.querySelector('.certCircle');
    let lapCircleIcon = document.querySelector('.lapCircle');
    let brfCircle = document.querySelector('.brfCircle');
    let vrLine1 = document.querySelector('.vr-line1');
    let vrLine2 = document.querySelector('.vr-line2');
    let vrLine3 = document.querySelector('.vr-line3');
    let vrLine4 = document.querySelector('.vr-line4');
    let session2k16 = document.querySelector('.session-16-20');
    let session2k20 = document.querySelector('.session-20');
    let sessionk20 = document.querySelector('.session-2k-20');
    let sessionFuture = document.querySelector('.session-future');
    let closeIcon4 = document.querySelector('.closeIcon4');


    learningBody.style.backgroundColor = 'white';
    learningBody.style.borderRadius= '0px';

    learninHeader.style.display = 'none';
    closeIcon4.style.display = 'none';

    LearnflatToHome.style.backgroundColor = 'red';
    LearnflatToHome.style.width = '26px';
    LearnflatToHome.style.height = '26px';
    LearnflatToHome.style.display = 'block';


    learninIndexHeader.style.backgroundColor = 'rgb(23,38,59)';
    learninIndexHeader.style.border = '0px';
    learninIndexHeader.style.borderTopLeftRadius= '0px';
    learninIndexHeader.style.borderTopRightRadius= '0px';

    clasicTheme.style.display = 'block';
    clasicTheme.style.color = 'white';



    circleIcon.style.boxShadow = 'none';
    circleIcon.style.border = '5px solid rgb(26,188,156)';
    circleIcon.style.color = 'white';
    circleIcon.style.backgroundColor = 'rgb(41,42,56)';
    circleIcon.style.paddingTop = '7px';
    certCircleIcon.style.boxShadow = 'none';
    certCircleIcon.style.border = '5px solid rgb(26,188,156)';
    certCircleIcon.style.color = 'white';
    certCircleIcon.style.backgroundColor = 'rgb(41,42,56)';
    certCircleIcon.style.paddingTop = '7px';
    lapCircleIcon.style.boxShadow = 'none';
    lapCircleIcon.style.border = '5px solid rgb(26,188,156)';
    lapCircleIcon.style.color = 'white';
    lapCircleIcon.style.backgroundColor = 'rgb(41,42,56)';
    lapCircleIcon.style.paddingTop = '7px';
    brfCircle.style.boxShadow = 'none';
    brfCircle.style.border = '5px solid rgb(26,188,156)';
    brfCircle.style.color = 'white';
    brfCircle.style.backgroundColor = 'rgb(41,42,56)';
    brfCircle.style.paddingTop = '7px';

    vrLine1.style.backgroundColor = 'rgb(26,188,156)';
    vrLine1.style.border = '3px solid rgb(26,188,156)';

    vrLine2.style.backgroundColor = 'rgb(26,188,156)';
    vrLine2.style.border = '3px solid rgb(26,188,156)';

    vrLine3.style.backgroundColor = 'rgb(26,188,156)';
    vrLine3.style.border = '3px solid rgb(26,188,156)';

    vrLine4.style.backgroundColor = 'rgb(26,188,156)';
    vrLine4.style.border = '3px solid rgb(26,188,156)';

    session2k16.style.borderRadius = '50px';
    session2k16.style.border = '0px';
    session2k16.style.backgroundColor = 'rgb(233,241,245)';
    session2k16.style.boxShadow = 'none';


    session2k20.style.borderRadius = '50px';
    session2k20.style.border = '0px';
    session2k20.style.backgroundColor = 'rgb(233,241,245)';
    session2k20.style.boxShadow = 'none';


    sessionk20.style.borderRadius = '50px';
    sessionk20.style.border = '0px';
    sessionk20.style.backgroundColor = 'rgb(233,241,245)';
    sessionk20.style.boxShadow = 'none';


    sessionFuture.style.borderRadius = '50px';
    sessionFuture.style.border = '0px';
    sessionFuture.style.backgroundColor = 'rgb(233,241,245)';
    sessionFuture.style.boxShadow = 'none';


    socialIcon1.style.backgroundColor = 'rgb(26, 188, 156)';
    socialIcon2.style.backgroundColor = 'rgb(26, 188, 156)';
    socialIcon3.style.backgroundColor = 'rgb(26, 188, 156)';
    socialIcon4.style.backgroundColor = 'rgb(26, 188, 156)';
    socialIcon5.style.backgroundColor = 'rgb(26, 188, 156)';

    socialIcon1.style.border = '3px solid black';
    socialIcon2.style.border = '3px solid black';
    socialIcon3.style.border = '3px solid black';
    socialIcon4.style.border = '3px solid black';
    socialIcon5.style.border = '3px solid black';

}









/*----------------------About-page-switch------------------*/
function aboutHideShow() {
    let homePage = document.querySelector('.content');
    let aboutPage = document.querySelector('#about');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    if (homePage.style.display === 'block' && aboutPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        aboutPage.style.display = 'block';
        footerh2Tag.style.display = 'block';
        footerh2Tag.innerHTML = '<i class="fas fa-user"></i> About Me'

    } else {
        homePage.style.display = 'block';
        aboutPage.style.display = 'none';
        footerh2Tag.style.display = 'none';
    }

}



/*-----------------------Work-page-switch-------------------*/
function workHideShow() {
    let homePage = document.querySelector('.content');
    let workPage = document.querySelector('#work-page');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    if (homePage.style.display === 'block' && workPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        workPage.style.display = 'block';
        footerh2Tag.style.display = 'block';
        footerh2Tag.innerHTML = '<i class="fas fa-address-card"></i> My Work'

        } else {
        homePage.style.display = 'block';
        workPage.style.display = 'none';
        }



}

function workPageCovidHideShow() {
    let workPageContent = document.querySelector('.work-page-content');
    let container1 = document.querySelector('.container1');

    if (workPageContent.style.display === 'block' && container1.style.display === 'none'){
        workPageContent .style.display = 'none';
        container1.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container1.style.display = 'none'
    }

}



function workPageGithubHideShow() {
    let workPageContent = document.querySelector('.work-page-content');
    let container2 = document.querySelector('.container2');

    if (workPageContent.style.display === 'block' && container2.style.display === 'none'){
        workPageContent .style.display = 'none';
        container2.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container2.style.display = 'none'
    }

}


function bactToWorkPage() {
    let workPageContent = document.querySelector('.work-page-content');
    let container2 = document.querySelector('.container2');

    if (workPageContent.style.display === 'block' && container2.style.display === 'none'){
        workPageContent .style.display = 'none';
        container2.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container2.style.display = 'none'
    }

}




function winportToWorkPage() {
    let workPageContent = document.querySelector('.work-page-content');
    let container3 = document.querySelector('.container3');


    if (workPageContent.style.display === 'block' && container3.style.display === 'none'){
        workPageContent .style.display = 'none';
        container3.style.display = 'block';

        } else {
        workPageContent .style.display = 'block';
        container3.style.display = 'none';
        }
}


function taxmannToWorkPage() {
    let workPageContent = document.querySelector('.work-page-content');
    let container4 = document.querySelector('.container4');


    if (workPageContent.style.display === 'block' && container4.style.display === 'none'){
        workPageContent .style.display = 'none';
        container4.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container4.style.display = 'none';
    }
}


function employeeToWorkPage() {
    let workPageContent = document.querySelector('.work-page-content');
    let container5 = document.querySelector('.container5');


    if (workPageContent.style.display === 'block' && container5.style.display === 'none'){
        workPageContent .style.display = 'none';
        container5.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container5.style.display = 'none';
    }
}



function portfolioToWorkPage() {
    let workPageContent = document.querySelector('.work-page-content');
    let container6 = document.querySelector('.container6');


    if (workPageContent.style.display === 'block' && container6.style.display === 'none'){
        workPageContent .style.display = 'none';
        container6.style.display = 'block';

    } else {
        workPageContent .style.display = 'block';
        container6.style.display = 'none';
    }

}

/*---------------------Skill-page-switch-----------------*/

function skillHideShow() {
    let homePage = document.querySelector('.content');
    let skillPage = document.querySelector('#Skill-Page');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    if (homePage.style.display === 'block' && skillPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        skillPage.style.display = 'block';
        footerh2Tag.style.display = 'block';
        footerh2Tag.innerHTML = '<i class="fas fa-book-open"></i> Skills'

    } else {
        homePage.style.display = 'block';
        skillPage.style.display = 'none';
        footerh2Tag.style.display = 'none'
    }

}



/*---------------------About-page-switch-----------------*/

function aboutToHome() {
    let homePage = document.querySelector('.content');
    let aboutPage = document.querySelector('#about');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    if (homePage.style.display === 'block' && aboutPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        aboutPage.style.display = 'block';
        footerh2Tag.style.display = 'block';
        footerh2Tag.innerHTML = '<i class="fa fa-user-circle"></i> About Me'

    } else {
        homePage.style.display = 'block';
        aboutPage.style.display = 'none';
        footerh2Tag.style.display = 'none'
    }

}



/*-----------------work-page-switch--------------*/


function workToHome() {
    let homePage = document.querySelector('.content');
    let workPage = document.querySelector('#work-page');
    let footerh2Tag = document.querySelector('.footerh2Tag');

    if (homePage.style.display === 'block' && workPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        workPage.style.display = 'block';
        footerh2Tag.style.display = 'block'

    }else {
        homePage.style.display = 'block';
        workPage.style.display = 'none';
        footerh2Tag.style.display = 'none'
    }
}


/*----------------------Skill-page-switch-------------*/

function skillToHome() {
    let homePage = document.querySelector('.content');
    let skillPage = document.querySelector('#Skill-Page');
    let footerh2Tag = document.querySelector('.footerh2Tag');
    if (homePage.style.display === 'block' && skillPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
        homePage.style.display = 'none';
        skillPage.style.display = 'block';
        footerh2Tag.style.display = 'block';
        footerh2Tag.innerHTML = '<i class="fas fa-book-open"></i>Skills';

    } else {
        homePage.style.display = 'block';
        skillPage.style.display = 'none';
        footerh2Tag.style.display = 'none'
    }

}





/*---------------------Learning-page-switch-----------------*/

function hideShow() {
    let homePage = document.querySelector('.content');
    let learningPage = document.querySelector('#learning');
    let footerh2Tag = document.querySelector('.footerh2Tag');
if (homePage.style.display === 'block' && learningPage.style.display === 'none' || footerh2Tag.style.display === 'none'){
    homePage.style.display = 'none';
    learningPage.style.display = 'block';
    footerh2Tag.style.display = 'block';
    footerh2Tag.innerHTML = '<i class="fa fa-graduation-cap"></i> Learning'

} else {
    homePage.style.display = 'block';
    learningPage.style.display = 'none';
    footerh2Tag.style.display = 'none';
}

}