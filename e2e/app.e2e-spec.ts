import { BlogSampleAngularRouterPage } from './app.po';

describe('blog-sample-angular-router App', () => {
  let page: BlogSampleAngularRouterPage;

  beforeEach(() => {
    page = new BlogSampleAngularRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
