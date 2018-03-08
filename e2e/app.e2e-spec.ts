import { AuthGuardsPage } from './app.po';

describe('auth-guards App', () => {
  let page: AuthGuardsPage;

  beforeEach(() => {
    page = new AuthGuardsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
