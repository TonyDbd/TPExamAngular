import { browser, by, element } from 'protractor';

export class OrdiPage {

  sleep() {
    browser.driver.sleep(2000);
  }
  completeForm() {
    let model = element.all(by.id('model'));
    let marque = element.all(by.id('inputRadio-Dell'))
    let type = element.all(by.name('type'));
    let categorie = element.all(by.id('inputRadio-Bureautique'));
    let date = element.all(by.name('date'));
    let prixAchat = element.all(by.name('prixAchat'));
    let prixVente = element.all(by.name('prixVente'));

    model.sendKeys(' Test e2e');
    marque.click();
    type.sendKeys('Fixe');
    categorie.click();
    date.sendKeys('24/03/2020');
    prixAchat.sendKeys(123);
    prixVente.sendKeys(521);

  }
}