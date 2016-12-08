describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('https://angularjs.org');
        element(by.model('todoList.todoText')).sendKeys('first protractor test');
        element(by.css('[value="add"]')).click();
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.get(2).getText()).toEqual('first protractor test');
    });
    it('should add a todo', function() {
        browser.get('https://angularjs.org');
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.get(1).getText()).toEqual('build an angular app');
    });
    it('should add a todo', function() {
        browser.get('https://angularjs.org');
        element(by.model('todoList.todoText')).sendKeys('first protractor test');
        element(by.css('[value="add"]')).click();
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
    });
    it('get element by todo', function() {
        browser.get('https://angularjs.org');
        element(by.model('todo.done')).click();
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.get(1).getText()).toEqual('learn angular');
    });
    it('element add a todo', function() {
        browser.get('https://angularjs.org');
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});
