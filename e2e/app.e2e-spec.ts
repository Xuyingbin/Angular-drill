import { DrillPage } from './app.po';

describe('drill App', () => {
  let page: DrillPage;

  beforeEach(() => {
    page = new DrillPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
