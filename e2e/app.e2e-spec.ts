import { GeerAngular4Page } from './app.po';

describe('geer-angular4 App', () => {
  let page: GeerAngular4Page;

  beforeEach(() => {
    page = new GeerAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
