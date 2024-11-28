import { Navigation } from "../utils/navigation"


export class Form {
    constructor(){
        this.navigation = new Navigation();
    }   
    open(){
        return this.navigation.goToUrl();
    }
    async selectFormPage(){
        const formPage = await this.navigation.linksMenu[13];
        const anchorFormPage = await formPage.$('a');
        await anchorFormPage.click();
    }
}