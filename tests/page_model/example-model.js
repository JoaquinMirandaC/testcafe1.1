import {Selector} from 'testcafe';

export default class ExamplePage{
    constructor(){
        this.inputName = Selector('#developer-name');
        this.checkboxRemotetesting = Selector('input').withAttribute('name', 'remote');
        this.checkboxTraffic = Selector('input').withAttribute('name', 'analysis');
        this.checkboxTriedTestCafe = Selector('input[name=tried-test-cafe]');
        this.inputComment = Selector('#comments');
        this.submitButton = Selector('#submit-button');
        this.thanksMesssage = Selector('#article-header');


    }
}