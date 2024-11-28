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
    async firstNameField(name = 'test'){
        const firstNameField = await $('#first-name');
        await firstNameField.setValue(name);
    }
    async lastNameField(lastName = 'ipsom'){
        const firstNameField = await $('#last-name');
        await firstNameField.setValue(lastName);
    }
    async jobTitleField(name = 'Just a script'){
        const firstNameField = await $('#job-title');
        await firstNameField.setValue(name);
    }
    async levelEducation(number = 1){
        const selectItems = await $$('.input-group [type="radio"]');
        await selectItems[number].click();
    }
    async genderPicker(number = 2){
        const selectItems = await $$('.input-group [type="checkbox"]');
        await selectItems[number].click();
    }
    async yearsExperience(number = 2) {
        const yearsExperiencePicker = await $('#select-menu');
        await yearsExperiencePicker.click();
        const yearsExperienceOptions = await $$('#select-menu option')[number];
        yearsExperienceOptions.click();
    }
    async date(numberDay = 4){
        const datePicker = await $('#datepicker');
        await datePicker.click();

        const dayElement = await $$('td.day').find(async (el) =>{
            const text = await el.getText();
            const classesInElement = await el.getAttribute('class');//to verify that the old and new classes are not there (that would mean that it is not a selected month)

            if (text.trim() === numberDay.toString()) {
                if (!classesInElement.includes('old') && !classesInElement.includes('new')) {
                    return true;
                } else {
                    return false;
                }
            }
        });

        if (dayElement) {
            await dayElement.click()
        } else {
            throw new Error("Day not found in the day picker");
        }
    }
    async submitForm(){
        const submitButton = await $('.btn.btn-lg.btn-primary');
        await submitButton.click();
    }
}