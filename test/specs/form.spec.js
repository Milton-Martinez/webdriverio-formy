import { Form } from "../pages/form-page";
const form = new Form();

describe('Form Page', () => {

    beforeEach( async () => {
        await form.open();
        await form.selectFormPage();
    });

    it('Assess completed form message', async () => {
        await expect(browser).toHaveUrl('https://formy-project.herokuapp.com/form');
    });
});