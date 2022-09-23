describe('empty spec', () => {
  //
  it('PT-TC-98: Caso Exitoso: Ingresar Usuario y Contraseña validos para el Loguin', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1@ptu.com')
    cy.get('#passwd').type('ptu12345')
    cy.get('#SubmitLogin > span').click()
    cy.get('.info-account').should('contain','Welcome')
  })

  it.only ('PT-TC-99: Caso Fallido: Ingresar Usuario y Contraseña invalidos', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu30@ptu.com')
    cy.get('#passwd').type('ptu1234599')
    cy.get('#SubmitLogin > span').click()
    cy.get('ol > li').should('contain','Authentication failed')
    
  })
 
})