let rotationBtn = document.querySelector('.rotation-btn');
let sideRowBtn = document.querySelector('.side-row');

function rotation() {
    if (rotationBtn.style.transform === 'rotate(0deg)' && sideRowBtn.style.transform === 'translate(-16rem)'){
        rotationBtn.style.transform = 'rotate(360deg)';
        rotationBtn.style.transition = 'all 1s';
        sideRowBtn.style.transform = 'translate(0rem)';
        sideRowBtn.style.transition = 'transform 0.8s ease-in';
    } else {
      rotationBtn.style.transform = 'rotate(0deg)';
        sideRowBtn.style.transform = 'translate(-16rem)';
        sideRowBtn.style.transition = 'transform 0.8s ease-in';
    }

}


/*------------------------neomorphism-mode---------------------------------------*/

function neomorphismMode() {
    let homePageContent = document.querySelector('.content');
    let customCard1 = document.querySelector('.custom-card1');
    let customCard2 = document.querySelector('.custom-card2');
    let customCard3 = document.querySelector('.custom-card3');
    let customCard4 = document.querySelector('.custom-card4');
    let sideCard = document.querySelector('.side-card');
    let neumorphismTheme = document.querySelector('.neumorphismTheme');
    let classicTheme = document.querySelector('.classicTheme');
    let flatTheme = document.querySelector('.flatTheme');
    let footer = document.querySelector('footer');

    /*--------homoPageContent------*/
    homePageContent.style.backgroundColor = 'white';
    customCard1.style.backgroundColor = 'white';
    customCard1.style.boxShadow = 'inset -3px -3px 5px #ffffff50, inset 2px 2px 15px #00000020';
    customCard1.style.border = 'none';
    customCard1.style.borderRadius = '25px';
    customCard1.style.textDecoration = 'none';

    customCard2.style.backgroundColor = 'white';
    customCard2.style.boxShadow = 'inset -3px -3px 5px #ffffff50, inset 2px 2px 15px #00000020';
    customCard2.style.border = 'none';
    customCard2.style.borderRadius = '25px';
    customCard2.style.textDecoration = 'none';

    customCard3.style.backgroundColor = 'white';
    customCard3.style.boxShadow = 'inset -3px -3px 5px #ffffff50, inset 2px 2px 15px #00000020';
    customCard3.style.border = 'none';
    customCard3.style.borderRadius = '25px';
    customCard3.style.textDecoration = 'none';

    customCard4.style.backgroundColor = 'white';
    customCard4.style.boxShadow = 'inset -3px -3px 5px #ffffff50, inset 2px 2px 15px #00000020';
    customCard4.style.border = 'none';
    customCard4.style.borderRadius = '25px';
    customCard4.style.textDecoration = 'none';

    /*-------theme-design-----------*/
    sideCard.style.backgroundColor = 'white';
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

    footer.style.backgroundColor = 'black';
    footer.style.borderTop = '0px';

    /*---------------------END-HOME-PAGE-CONTENT-----------------------------*/




    /*-------About-Page-Selector----*/
    let aboutBody = document.querySelector('#about');
    let AboutIndexHeader = document.querySelector('.AboutIndexHeader');
    let clasicAboutHeader = document.querySelector('.clasicAboutHeader');
    let AboutHeader = document.querySelector('.About-header');
    let aboutToHome = document.querySelector('.about-to-home');
    let aboutImg = document.querySelector('.about-img');


    aboutBody.style.backgroundColor = 'white';
    AboutHeader.style.width = '50%';
    AboutHeader.style.backgroundColor = 'rgb(206,215,235)';
    AboutHeader.style.color = 'white';
    AboutHeader.style.marging = 'auto';
    AboutHeader.style.top = '-14px';
    AboutHeader.style.padding = '10px';
    AboutHeader.style.fontWeight = 'lighter';
    AboutHeader.style.fontSize = 'smaller';
    AboutHeader.style.left = '25%';
    AboutHeader.style.borderRadius = '50px';
    AboutHeader.style.display = 'block';

    AboutIndexHeader.style.backgroundColor = 'white';
    AboutIndexHeader.style.border = '0px';
    AboutIndexHeader.style.borderTopLeftRadius= '0px';
    AboutIndexHeader.style.borderTopRightRadius= '0px';
    clasicAboutHeader.style.display = 'none';


    aboutToHome.style.backgroundColor = 'red';
    aboutToHome.style.width = '26px';
    aboutToHome.style.height = '26px';
    aboutToHome.style.borderRadius = '50px';

    aboutImg.style.border = '10px solid white';
    aboutImg.style.boxShadow =  '2px 2px 5px black';




    /*-----------------------Skill-Page-Content-------------------------------*/
    let skillPage = document.querySelector('#Skill-Page');
    let switchToHome = document.querySelector('.switch-to-home');
    let skillHeader = document.querySelector('.Skill-header');
    let SkillIndexHeader = document.querySelector('.SkillIndexHeader');
    let clasicSkillHeader = document.querySelector('.clasicSkillHeader');

    skillPage.style.backgroundColor = 'white';

    switchToHome.style.backgroundColor = 'red';
    switchToHome.style.width = '26px';
    switchToHome.style.height = '26px';
    switchToHome.style.border = '50px';

    skillHeader.style.width = '50%';
    skillHeader.style.backgroundColor = 'rgb(206,215,235)';
    skillHeader.style.color = 'white';
    skillHeader.style.marging = 'auto';
    skillHeader.style.top = '-14px';
    skillHeader.style.padding = '10px';
    skillHeader.style.fontWeight = 'lighter';
    skillHeader.style.fontSize = 'smaller';
    skillHeader.style.left = '25%';
    skillHeader.style.borderRadius = '50px';
    skillHeader.style.display = 'block'

    SkillIndexHeader.style.backgroundColor = 'white';
    SkillIndexHeader.style.border = '0px';
    SkillIndexHeader.style.borderTopLeftRadius= '0px';
    SkillIndexHeader.style.borderTopRightRadius= '0px';

    clasicSkillHeader.style.display = 'none';


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
    let vrLine1 = document.querySelector('.vr-line1');
    let vrLine2 = document.querySelector('.vr-line2');
    let vrLine3 = document.querySelector('.vr-line3');
    let session2k16 = document.querySelector('.session-16-20');
    let session2k20 = document.querySelector('.session-20');
    let sessionk20 = document.querySelector('.session-2k-20');
    let sessionFuture = document.querySelector('.session-future');


   learningBody.style.backgroundColor = 'white';

    learninHeader.style.width = '50%';
    learninHeader.style.backgroundColor = 'rgb(206,215,235)';
    learninHeader.style.color = 'white';
    learninHeader.style.marging = 'auto';
    learninHeader.style.top = '-14px';
    learninHeader.style.padding = '10px';
    learninHeader.style.fontWeight = 'lighter';
    learninHeader.style.fontSize = 'smaller';
    learninHeader.style.left = '25%';
    learninHeader.style.borderRadius = '50px';
    learninHeader.style.display = 'block';

    LearnswitchToHome.style.backgroundColor = 'red';
    LearnswitchToHome.style.width = '26px';
    LearnswitchToHome.style.height = '26px';
    LearnswitchToHome.style.borderRadius = '50px';


    learninIndexHeader.style.backgroundColor = 'white';
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
    certCircleIcon.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    certCircleIcon.style.border = '0px';
    lapCircleIcon.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';
    lapCircleIcon.style.border = '0px';

    vrLine1.style.backgroundColor = 'rgb(31,115,95)';
    vrLine1.style.border = '3px solid rgb(31,115,95)';

    vrLine2.style.backgroundColor = 'rgb(31,115,95)';
    vrLine2.style.border = '3px solid rgb(31,115,95)';

    vrLine3.style.backgroundColor = 'rgb(31,115,95)';
    vrLine3.style.border = '3px solid rgb(31,115,95)';

    session2k16.style.borderRadius = '50px';
    session2k16.style.border = '0px';
    session2k16.style.backgroundColor = 'white';
    session2k16.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';


    session2k20.style.borderRadius = '50px';
    session2k20.style.border = '0px';
    session2k20.style.backgroundColor = 'white';
    session2k20.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';


    sessionk20.style.borderRadius = '50px';
    sessionk20.style.border = '0px';
    sessionk20.style.backgroundColor = 'white';
    sessionk20.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';


    sessionFuture.style.borderRadius = '50px';
    sessionFuture.style.border = '0px';
    sessionFuture.style.backgroundColor = 'white';
    sessionFuture.style.boxShadow = 'inset -3px -3px 5px #00000020, inset 3px 3px 10px #ffffff70';

}



/*----------------------------classic-mode------------------------------------*/

function clssicMode() {
    let homePageContent = document.querySelector('.content');
    let customCard1 = document.querySelector('.custom-card1');
    let customCard2 = document.querySelector('.custom-card2');
    let customCard3 = document.querySelector('.custom-card3');
    let customCard4 = document.querySelector('.custom-card4');
    let sideCard = document.querySelector('.side-card');
    let neumorphismTheme = document.querySelector('.neumorphismTheme');
    let classicTheme = document.querySelector('.classicTheme');
    let flatTheme = document.querySelector('.flatTheme');
    let footer = document.querySelector('footer');


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

    classicTheme.style.width = '120px';
    classicTheme.style.border = '3px solid black';
    classicTheme.style.padding = '5px';
    classicTheme.style.backgroundColor = 'rgb(163,211,205)';

    footer.style.backgroundColor = 'rgb(144,214,205)';
    footer.style.borderTop = '3px solid black';

    /*---------------------END-HOME-PAGE-CONTENT-----------------------------*/




    /*-----------------------About-Page-Selector------------------------*/
    let aboutBody = document.querySelector('#about');
    let AboutIndexHeader = document.querySelector('.AboutIndexHeader');
    let clasicAboutHeader = document.querySelector('.clasicAboutHeader');
    let AboutHeader = document.querySelector('.About-header');
    let aboutToHome = document.querySelector('.about-to-home');
    let aboutImg = document.querySelector('.about-img');

    aboutBody.style.backgroundColor = 'rgb(144,214,205)';

    AboutHeader.style.display = 'none';

    AboutIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    AboutIndexHeader.style.border = '3px solid black';
    AboutIndexHeader.style.borderTopLeftRadius= '15px';
    AboutIndexHeader.style.borderTopRightRadius= '15px';

    clasicAboutHeader.style.display = 'block';
    clasicAboutHeader.style.width = '115px';
    clasicAboutHeader.style.padding = '6px';

    aboutImg.style.border = '10px solid rgb(144,214,205)';
    aboutImg.style.boxShadow =  'black 1px 1px 0px 2px';




    /*-----------------------Skill-Page-Content-------------------------------*/
    let skillPage = document.querySelector('#Skill-Page')
    let skillHeader = document.querySelector('.Skill-header');
    let SkillIndexHeader = document.querySelector('.SkillIndexHeader');
    let clasicSkillHeader = document.querySelector('.clasicSkillHeader');


    skillPage.style.backgroundColor = 'rgb(144,214,205)';
    skillHeader.style.display = 'none';

    SkillIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    SkillIndexHeader.style.border = '3px solid black';
    SkillIndexHeader.style.borderTopLeftRadius= '15px';
    SkillIndexHeader.style.borderTopRightRadius= '15px';

    clasicSkillHeader.style.display = 'block';
    clasicSkillHeader.style.width = '0px';
    clasicSkillHeader.style.padding = '6px';



    /*------------------Learning-Page-Selector---------*/
    let learningBody = document.querySelector('#learning');
    let learninHeader = document.querySelector('.Learning-header');
    let learninIndexHeader = document.querySelector('.learningIndexHeader');
    let clasicTheme = document.querySelector('.clasicTheme');
    let backtoHomePage = document.querySelector('.switch-to-home');
    let circleIcon = document.querySelector('.circle');
    let certCircleIcon = document.querySelector('.certCircle');
    let lapCircleIcon = document.querySelector('.lapCircle');
    let vrLine1 = document.querySelector('.vr-line1');
    let vrLine2 = document.querySelector('.vr-line2');
    let vrLine3 = document.querySelector('.vr-line3');
    let session2k16 = document.querySelector('.session-16-20');
    let session2k20 = document.querySelector('.session-20');
    let sessionk20 = document.querySelector('.session-2k-20');
    let sessionFuture = document.querySelector('.session-future');

    learningBody.style.backgroundColor = 'rgb(144,214,205)';
    learningBody.style.height = '940px';
    learningBody.style.borderRadius = '40px';
    learningBody.style.top = '-2px';
    learninHeader.style.display = 'none';

    learninIndexHeader.style.backgroundColor = 'rgb(144,214,205)';
    learninIndexHeader.style.border = '3px solid black';
    learninIndexHeader.style.borderTopLeftRadius= '15px';
    learninIndexHeader.style.borderTopRightRadius= '15px';

    clasicTheme.style.display = 'block';
    clasicTheme.style.width = '0px';
    clasicTheme.style.padding = '6px';

    circleIcon.style.boxShadow = 'none';
    circleIcon.style.border = '3px solid black';
    certCircleIcon.style.boxShadow = 'none';
    certCircleIcon.style.border = '3px solid black';
    lapCircleIcon.style.boxShadow = 'none';
    lapCircleIcon.style.border = '3px solid black';

    vrLine1.style.backgroundColor = 'black';
    vrLine1.style.border = '2px solid black';

    vrLine2.style.backgroundColor = 'black';
    vrLine2.style.border = '2px solid black';

    vrLine3.style.backgroundColor = 'black';
    vrLine3.style.border = '2px solid black';

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



}




/*----------------------About-page-switch------------------*/
function aboutHideShow() {
    let homePage = document.querySelector('.content');
    let aboutPage = document.querySelector('#about');
    if (homePage.style.display === 'block' && aboutPage.style.display === 'none'){
        homePage.style.display = 'none';
        aboutPage.style.display = 'block';

    } else {
        homePage.style.display = 'block';
        aboutPage.style.display = 'none'
    }

}


/*---------------------Skill-page-switch-----------------*/

function skillHideShow() {
    let homePage = document.querySelector('.content');
    let skillPage = document.querySelector('#Skill-Page');
    if (homePage.style.display === 'block' && skillPage.style.display === 'none'){
        homePage.style.display = 'none';
        skillPage.style.display = 'block';

    } else {
        homePage.style.display = 'block';
        skillPage.style.display = 'none'
    }

}






/*---------------------Learning-page-switch-----------------*/

function hideShow() {
    let homePage = document.querySelector('.content');
    let learningPage = document.querySelector('#learning');
if (homePage.style.display === 'block' && learningPage.style.display === 'none'){
    homePage.style.display = 'none';
    learningPage.style.display = 'block';

} else {
    homePage.style.display = 'block';
    learningPage.style.display = 'none'
}

}