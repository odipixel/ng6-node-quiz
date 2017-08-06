import { Ng2CarnivalPage } from './app.po';

describe('ng2-carnival App', () => {
  let page: Ng2CarnivalPage;

  beforeEach(() => {
    page = new Ng2CarnivalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
