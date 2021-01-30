import { WelcomeModal } from "./modules/modals.js";

window.welcomeModal = new WelcomeModal(); // global property in browser

addAboutSectionListener(); // add event listeners to 'about' triggers in modals
addModalInfoListener();
addMainInfoListener();
$('button,.trigger-wrapper,.gameover-button').on("touchend", function(){this.blur();}); // remove focus after interaction on mobile

// add footer event handler 
function addAboutSectionListener(){
    $('#about-trigger-wrapper,.modal-about-trigger-wrapper').click(aboutSectionHandler);

    // footer event handler
    function aboutSectionHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        let aboutSectionContentElement = clickEvent.currentTarget.nextElementSibling; // CREDIT: https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp 
        $(aboutSectionContentElement).toggleClass("hide");
        aboutSectionContentElement.scrollIntoView(false); // show footer contents when toggled CREDIT: https://www.w3schools.com/jsref/met_element_scrollintoview.asp 
        window.scrollBy(0, 10); // ensure entire footer content is comforably in view
    }
}

// add welcome modal info event handler
function addModalInfoListener(){
    $('.modal-header-info-wrapper').click(modalInfoHandler);

    // modal info event handler
    function modalInfoHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        $('#welcome-modal .info-contents').toggleClass("hide");
        $('#welcome-input-form-wrapper').toggleClass("hide");
        $('.modal-footer-wrapper').toggleClass("hide");
    } 
}

// add main info event handler
function addMainInfoListener(){
    $('#header-info-wrapper').click(mainInfoHandler);

    // main info event handler
    function mainInfoHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
        $('#grid-container-body .info-contents').toggleClass("hide");
        $('#click-to-play-wrapper').toggleClass("hide");
        $('#scoreboards-wrapper').toggleClass("hide");
        $('#gameboard-wrapper').toggleClass("hide");
        $('#footer-wrapper').toggleClass("hide");
    }
}