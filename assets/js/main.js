import { WelcomeModal } from "./modules/modals.js";

window.welcomeModal = new WelcomeModal(); // global property in browser

addAboutSectionListener(); // add event listeners to 'about' triggers in modals

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
