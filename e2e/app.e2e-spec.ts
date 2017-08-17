import { CoverCreatorPage } from './app.po';

describe('cover-creator App', () => {
  let page: CoverCreatorPage;

  beforeEach(() => {
    page = new CoverCreatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
