import ExamplePage from '../page_model/example-model'

const page = new ExamplePage();

fixture `Example page tests`
.page `https://devexpress.github.io/testcafe/example/`;


test('input name', async t => {
    const nombre = 'Joaquin';
    await t
        .typeText(page.inputName, nombre)
        .click(page.checkboxRemotetesting)
        .click(page.checkboxTraffic)
        .click(page.checkboxTriedTestCafe)
        .typeText(page.inputComment, 'Esto es un comentario')
        .click(page.submitButton)
        .wait(5000);
    await t.expect(page.thanksMesssage.innerText).contains(nombre);
});