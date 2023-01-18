
describe('Тест на привидение к строчным буквам в логине', function (){
    it('Тест на привидение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru' );
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
 