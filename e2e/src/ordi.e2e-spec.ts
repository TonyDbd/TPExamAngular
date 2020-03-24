import {browser, by, element, logging} from 'protractor';
import { OrdiPage } from './ordi.po';

describe('Test Des ordinateurs', () => {
  let page: OrdiPage;
  let nbLineInit: number;

  beforeEach(() => {
    page = new OrdiPage();
    browser.get('/home');
  });

  it('Nombre de ligne dans le tableau et Test la navigation vers mon url d\'ajout', () => {
    element.all(by.css('.lineOrdi')).then(totalRows => {
      this.nbLineInit += 1; totalRows.length;
    });
    element.all(by.css('#buttonAddOrdi')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/addordi');
  });

  it('Lecture du formulaire, et la validation et retour en page d\'accueil', () => {
    browser.get('/addordi');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitButton'));
    submitBtn.click().then(fn => {
    });
    page.sleep();
    expect(browser.driver.getCurrentUrl()).toContain('/home');
  });


  it('1 ligne de plus au tableau !', () => {
    element.all(by.css('.lineOrdi')).then(totalRows => {
      this.nbLineInit += 1;
      const compareOrdi = this.nbLineInit;
      expect(totalRows.length).toEqual(compareOrdi);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


});