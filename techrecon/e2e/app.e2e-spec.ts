import { TechreconPage } from './app.po';

describe('techrecon App', function() {
  let page: TechreconPage;

  beforeEach(() => {
    page = new TechreconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
