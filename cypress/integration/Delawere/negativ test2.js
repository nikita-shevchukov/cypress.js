
describe('Негативный тест', function () {
    it('Негативный тест авторизации 2 ', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('geerman@dolnikov.ru' );
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
 