import { Navigation } from "../utils/navigation"

/*
*Decidi entrar directamente a la pagina switch-window y no utilizar el metodo 'selectSwitchWindowPage'
*En el test de form entre al home y luego a la pagina del form
*/


export class SwitchWindow {

    constructor(){
        this.navigation = new Navigation();
        this.url = 'https://formy-project.herokuapp.com/switch-window/'
    }
    
    get newTabButton() { return  browser.$('#new-tab-button'); }
    get alertButton() { return  browser.$('#alert-button'); }

    async open(url = this.url){ 
        await this.navigation.goToUrl(url);
    }
    // async selectSwitchWindowPage(){
    //     const switchWindowPage = await this.navigation.linksMenu[12];
    //     const anchorSwitchWindowPag = await switchWindowPage.$('a');
    //     await anchorSwitchWindowPag.click();
    // }
    async clickOpenNewTabButton(){
        await this.newTabButton.click();
    }
    async switchWindow(tab){
        await browser.switchWindow(tab);
    }
    async clickAlertButton(){
        await this.alertButton.click();
        const alertText = await browser.getAlertText();
        return alertText;
    }
}