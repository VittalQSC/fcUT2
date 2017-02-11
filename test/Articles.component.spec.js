describe('component: articlesList', function() {
  var $componentController;
  var $scope;
  
  beforeEach(module('ArticlesModule'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a articles object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {articles: [1,2,3,4]};
    var ctrl = $componentController('articlesList', null, bindings);

    expect(ctrl.articles).toBeDefined();
    expect(ctrl.articles[0]).toBe(1);
  });

});