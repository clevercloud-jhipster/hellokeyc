/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CountryComponentsPage, CountryDeleteDialog, CountryUpdatePage } from './country.page-object';

const expect = chai.expect;

describe('Country e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let countryUpdatePage: CountryUpdatePage;
    let countryComponentsPage: CountryComponentsPage;
    let countryDeleteDialog: CountryDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Countries', async () => {
        await navBarPage.goToEntity('country');
        countryComponentsPage = new CountryComponentsPage();
        expect(await countryComponentsPage.getTitle()).to.eq('hellokeycApp.country.home.title');
    });

    it('should load create Country page', async () => {
        await countryComponentsPage.clickOnCreateButton();
        countryUpdatePage = new CountryUpdatePage();
        expect(await countryUpdatePage.getPageTitle()).to.eq('hellokeycApp.country.home.createOrEditLabel');
        await countryUpdatePage.cancel();
    });

    it('should create and save Countries', async () => {
        const nbButtonsBeforeCreate = await countryComponentsPage.countDeleteButtons();

        await countryComponentsPage.clickOnCreateButton();
        await promise.all([
            countryUpdatePage.setIso2Input('iso2'),
            countryUpdatePage.setIso3Input('iso3'),
            countryUpdatePage.setM49Input('5'),
            countryUpdatePage.setNameInput('name'),
            countryUpdatePage.setOfficialNameEnInput('officialNameEn'),
            countryUpdatePage.setOfficialNameFrInput('officialNameFr'),
            countryUpdatePage.setDialInput('dial'),
            countryUpdatePage.setTldInput('tld'),
            countryUpdatePage.setFlag32Input('flag32'),
            countryUpdatePage.setFlag128Input('flag128'),
            countryUpdatePage.setLatitudeInput('latitude'),
            countryUpdatePage.setLongitudeInput('longitude'),
            countryUpdatePage.setZoomInput('5')
        ]);
        expect(await countryUpdatePage.getIso2Input()).to.eq('iso2');
        expect(await countryUpdatePage.getIso3Input()).to.eq('iso3');
        expect(await countryUpdatePage.getM49Input()).to.eq('5');
        expect(await countryUpdatePage.getNameInput()).to.eq('name');
        expect(await countryUpdatePage.getOfficialNameEnInput()).to.eq('officialNameEn');
        expect(await countryUpdatePage.getOfficialNameFrInput()).to.eq('officialNameFr');
        expect(await countryUpdatePage.getDialInput()).to.eq('dial');
        expect(await countryUpdatePage.getTldInput()).to.eq('tld');
        expect(await countryUpdatePage.getFlag32Input()).to.eq('flag32');
        expect(await countryUpdatePage.getFlag128Input()).to.eq('flag128');
        expect(await countryUpdatePage.getLatitudeInput()).to.eq('latitude');
        expect(await countryUpdatePage.getLongitudeInput()).to.eq('longitude');
        expect(await countryUpdatePage.getZoomInput()).to.eq('5');
        await countryUpdatePage.save();
        expect(await countryUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await countryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Country', async () => {
        const nbButtonsBeforeDelete = await countryComponentsPage.countDeleteButtons();
        await countryComponentsPage.clickOnLastDeleteButton();

        countryDeleteDialog = new CountryDeleteDialog();
        expect(await countryDeleteDialog.getDialogTitle()).to.eq('hellokeycApp.country.delete.question');
        await countryDeleteDialog.clickOnConfirmButton();

        expect(await countryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
