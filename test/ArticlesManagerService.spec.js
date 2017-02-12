describe('myFactory', function () {

  var mock, ArticlesManagerService;
  beforeEach(module('ArticlesManager'));
  beforeEach(function() {
    inject(function($injector) {
      ArticlesManagerService = $injector.get('ArticlesManagerService');
    });
  });

  it('should return an empty arr', function() {
    expect(ArticlesManagerService.getArticles()).toEqual([]);
  });

  it('should update articles after setArticles', function() {
    ArticlesManagerService.setArticles([1,2,3,4])
    expect(ArticlesManagerService.getArticles()).toEqual([1,2,3,4]);

    // expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
  });

  it('should clear messages after alert', function() {
    expect(ArticlesManagerService.getArticles()).toEqual([]);
  });
})