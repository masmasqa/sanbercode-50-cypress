const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')

let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()

describe('User should be able to login', () => {
    beforeEach(() => {
        loginpage.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('with valid data', () => {
        loginpage.verify_login_page()
        loginpage.type_username(UserData.datatest.username)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.verify_right_user(UserData.datatest.name)
    })

    it('with invalid data', () => {
        loginpage.verify_login_page()
        loginpage.type_username('wrong_username')
        loginpage.type_password('wrong_password')
        loginpage.click_login_button()
        loginpage.verify_login_failed()
    })
})
