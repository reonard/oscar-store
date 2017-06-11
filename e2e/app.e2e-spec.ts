import { OscarStorePage } from './app.po';

describe('oscar-store App', () => {
  let page: OscarStorePage;

  beforeEach(() => {
    page = new OscarStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
