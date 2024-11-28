import { Form } from "../pages/form-page";
const form = new Form();

describe('Form Page', () => {

    beforeEach( async () => {
        await form.open();
        await form.selectFormPage();
    });

    it('Assess completed form message', async () => {
        await form.firstNameField();
        await form.lastNameField();
        await form.jobTitleField();
        await form.levelEducation();
        await form.genderPicker();
        await form.yearsExperience();
        await form.date();
        await form.submitForm();
        // await form.submitForm();
        const alertSuccess = await $('.alert.alert-success');
        // await browser.pause(2000);
        await expect(alertSuccess).toHaveText('The form was successfully submitted!');

    });
});