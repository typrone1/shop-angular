import { ShopAngularPage } from './app.po';

describe('shop-angular App', () => {
  let page: ShopAngularPage;

  beforeEach(() => {
    page = new ShopAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
