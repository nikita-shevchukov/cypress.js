
describe('Тест https://testqastudio.me/', function () {
    it('Тест магазина мерча', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click().click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('#cart-modal > .off-modal-layer').click();
         cy.get('[href="https://testqastudio.me"]').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5500);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Никита');
         cy.get('#billing_last_name').type( 'Шевчуков');
         cy.get('#billing_address_1').type('Ленина');
         cy.get('#billing_city').type('Кемерово');
         cy.get('#billing_state').type('Кемерово')
         cy.get('#billing_postcode').type('650036');
         cy.get('#billing_phone').type('89045772634');
         cy.get('#billing_email').type('nikitok_87@mail.ru');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.');

    
    })
})