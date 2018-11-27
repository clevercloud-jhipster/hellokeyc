import { element, by, ElementFinder } from 'protractor';

export class CountryComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('keyc-country div table .btn-danger'));
    title = element.all(by.css('keyc-country div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CountryUpdatePage {
    pageTitle = element(by.id('keyc-country-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    iso2Input = element(by.id('field_iso2'));
    iso3Input = element(by.id('field_iso3'));
    m49Input = element(by.id('field_m49'));
    nameInput = element(by.id('field_name'));
    officialNameEnInput = element(by.id('field_officialNameEn'));
    officialNameFrInput = element(by.id('field_officialNameFr'));
    dialInput = element(by.id('field_dial'));
    tldInput = element(by.id('field_tld'));
    flag32Input = element(by.id('field_flag32'));
    flag128Input = element(by.id('field_flag128'));
    latitudeInput = element(by.id('field_latitude'));
    longitudeInput = element(by.id('field_longitude'));
    zoomInput = element(by.id('field_zoom'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setIso2Input(iso2) {
        await this.iso2Input.sendKeys(iso2);
    }

    async getIso2Input() {
        return this.iso2Input.getAttribute('value');
    }

    async setIso3Input(iso3) {
        await this.iso3Input.sendKeys(iso3);
    }

    async getIso3Input() {
        return this.iso3Input.getAttribute('value');
    }

    async setM49Input(m49) {
        await this.m49Input.sendKeys(m49);
    }

    async getM49Input() {
        return this.m49Input.getAttribute('value');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setOfficialNameEnInput(officialNameEn) {
        await this.officialNameEnInput.sendKeys(officialNameEn);
    }

    async getOfficialNameEnInput() {
        return this.officialNameEnInput.getAttribute('value');
    }

    async setOfficialNameFrInput(officialNameFr) {
        await this.officialNameFrInput.sendKeys(officialNameFr);
    }

    async getOfficialNameFrInput() {
        return this.officialNameFrInput.getAttribute('value');
    }

    async setDialInput(dial) {
        await this.dialInput.sendKeys(dial);
    }

    async getDialInput() {
        return this.dialInput.getAttribute('value');
    }

    async setTldInput(tld) {
        await this.tldInput.sendKeys(tld);
    }

    async getTldInput() {
        return this.tldInput.getAttribute('value');
    }

    async setFlag32Input(flag32) {
        await this.flag32Input.sendKeys(flag32);
    }

    async getFlag32Input() {
        return this.flag32Input.getAttribute('value');
    }

    async setFlag128Input(flag128) {
        await this.flag128Input.sendKeys(flag128);
    }

    async getFlag128Input() {
        return this.flag128Input.getAttribute('value');
    }

    async setLatitudeInput(latitude) {
        await this.latitudeInput.sendKeys(latitude);
    }

    async getLatitudeInput() {
        return this.latitudeInput.getAttribute('value');
    }

    async setLongitudeInput(longitude) {
        await this.longitudeInput.sendKeys(longitude);
    }

    async getLongitudeInput() {
        return this.longitudeInput.getAttribute('value');
    }

    async setZoomInput(zoom) {
        await this.zoomInput.sendKeys(zoom);
    }

    async getZoomInput() {
        return this.zoomInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class CountryDeleteDialog {
    private dialogTitle = element(by.id('keyc-delete-country-heading'));
    private confirmButton = element(by.id('keyc-confirm-delete-country'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
