describe('angularjs homepage Name', function() {
    it('should greet the named Julie', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
    });

    it('should greet the named !@#$%^&*()', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('!@#$%^&*()');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello !@#$%^&*()!');
    });

    it('should greet the named Julie123', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie123');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie123!');
    });

    it('should greet the named Julie+100=3', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys('Julie+100=3');
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie+100=3');
    });

    it('clear the name Jon', function(){
        browser.get('https://angularjs.org/');
        element(by.model('youName')).sendKeys('Jon');
        element(by.model('youName')).clear();
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual();
     });
  });