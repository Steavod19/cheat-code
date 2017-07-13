import { AppA4BuildPage } from './app.po';

describe('app-a4-build App', () => {
  let page: AppA4BuildPage;

  beforeEach(() => {
    page = new AppA4BuildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
