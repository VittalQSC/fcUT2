describe('myFactory', function () {

  var mock, ArticlesManagerService, $httpBackend, authRequestHandler;
  beforeEach(module('ArticlesManager'));
  beforeEach(function() {
    inject(function($injector) {
      ArticlesManagerService = $injector.get('ArticlesManagerService');
    });
  });
  beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     authRequestHandler = $httpBackend.when('GET', '/articles/')
                            .respond([{ "title": 12 }, { "title": 2 }], {'A-Token': 'xxx'});

  }))  
  
  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return an empty arr', function() {
    expect(ArticlesManagerService.getArticles()).toEqual([]);
  });

  it('should update articles after setArticles', function() {
    ArticlesManagerService.setArticles([1,2,3,4])
    expect(ArticlesManagerService.getArticles()).toEqual([1,2,3,4]);

    // expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
  });

  it('should init articles after request', function() {
    var url = '/articles/';
    ArticlesManagerService.requestArticles();
    $httpBackend.flush();

    expect(ArticlesManagerService.getArticles()).toEqual([{ "title": 12 }, { "title": 2 }]);
  });
})