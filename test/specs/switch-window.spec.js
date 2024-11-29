import { SwitchWindow } from "../pages/switch-window-page";
const switchWindowPage = new SwitchWindow();

describe('Switch window page', () => {
    it('Assess - switch window and detect an alert', async () => {
        await switchWindowPage.open();
        await switchWindowPage.clickOpenNewTabButton();
        await switchWindowPage.switchWindow('https://formy-project.herokuapp.com/switch-window');
        const alertText = await switchWindowPage.clickAlertButton(); // <- por que las alerts se cierran automaticamente
        await expect(alertText).toEqual('This is a test alert!'); // <- por que to have text no funciona aqui
    });
    
});