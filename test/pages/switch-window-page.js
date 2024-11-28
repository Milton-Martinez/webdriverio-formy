import { Navigation } from "../utils/navigation"


export class SwitchWindow {
    constructor(){
        this.navigation = new Navigation();
    }   
    open(url){
        return this.navigation.goToUrl(url);
    }
    async selectSwitchWindowPage(){
        const switchWindowPage = await this.navigation.linksMenu[12];
        const anchorSwitchWindowPag = await switchWindowPage.$('a');
        await anchorSwitchWindowPag.click();
    }



}