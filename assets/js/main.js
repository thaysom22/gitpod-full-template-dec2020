import { WelcomeModal } from "./modules/modals.js";

window.welcomeModal = new WelcomeModal(); // global property in browser

addAboutSectionListener(); // add event listeners to 'about' triggers in modals
addModalInfoListener();
addMainInfoListener();
$('button,.trigger-wrapper').on("touchend", function(){this.blur()}); // remove focus after interaction on mobile

// footer .hide toggle 
function addAboutSectionListener(){
    $('#about-trigger-wrapper,.modal-about-trigger-wrapper').click(aboutSectionHandler);

    function aboutSectionHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();
    
        let aboutSectionContentElement = clickEvent.currentTarget.nextElementSibling; // CREDIT: https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp 
        $(aboutSectionContentElement).toggleClass("hide");
        aboutSectionContentElement.scrollIntoView(false); // show footer contents when toggled CREDIT: https://www.w3schools.com/jsref/met_element_scrollintoview.asp 
        
    }
}

// how to play info modal toggle
function addModalInfoListener(){
    $('.modal-header-info-wrapper').click(modalInfoHandler);

    function modalInfoHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();

        $('#welcome-modal .info-contents').toggleClass("hide");
        $('#welcome-input-form-wrapper').toggleClass("hide");
        $('.modal-footer-wrapper').toggleClass("hide");
    }
    
}

// how to play info main page toggle
function addMainInfoListener(){
    $('#header-info-wrapper').click(mainInfoHandler);

    function mainInfoHandler(clickEvent){
        clickEvent.preventDefault();
        clickEvent.stopPropagation();

        $('#grid-container-body .info-contents').toggleClass("hide");
        $('#click-to-play-wrapper').toggleClass("hide");
        $('#scoreboards-wrapper').toggleClass("hide");
        $('#gameboard-grid-container').toggleClass("hide");
        $('#footer-wrapper').toggleClass("hide");
    }
    
}
