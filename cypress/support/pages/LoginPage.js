const locator = require('../locator/LoginPageLocator')

class LoginPage {
    async visit(path) {
        cy.visit(path)
        return cy.url().should('eq', path)
    }

    async verify_login_page () {
        cy.xpath(locator.datatestid.logo, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.login_text_title, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.usr_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.pass_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.btn_login, { timeout: 10000 }).should('be.visible')
    }

    async type_username(username) {
        cy.xpath(locator.datatestid.usr_input)
            .type(username)
            .should('have.value', username)
    }

    async type_password(password) {
        cy.xpath(locator.datatestid.pass_input)
            .type(password)
            .should('have.value', password)
    }

    async click_login_button() {
        cy.xpath(locator.datatestid.btn_login).click()
    }

    async verify_login_failed() {
        cy.xpath(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = LoginPage
