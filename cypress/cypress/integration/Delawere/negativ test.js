
describe('Негативный тест', function () {
    it('Негативный тест авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru' );
         cy.get('#pass').type('iLoveqastudio19');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
 