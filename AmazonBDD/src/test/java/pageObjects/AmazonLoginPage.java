package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;







public class AmazonLoginPage {

	public WebDriver ldriver;

	public AmazonLoginPage(WebDriver rdriver) {

		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);

	}
	// Stated SignIn Related Elemets/methods
	@FindBy(how=How.ID,using="nav-link-accountList")
	WebElement AccountList;

	@FindBy(how=How.ID,using="ap_email")
	WebElement EmailField;

	@FindBy(how=How.ID,using="continue")
	WebElement BTN_Continue1;

	@FindBy(how=How.ID,using="ap_password")
	WebElement PasswordField;

	@FindBy(how=How.ID,using="signInSubmit")
	WebElement BTN_signInSubmit;

	@FindBy(how=How.ID,using="nav-hamburger-menu")
	WebElement HamburgerMenu;
	
	@FindBy(how=How.XPATH,using="//*[@id=\"auth-error-message-box\"]/div/div/ul/li/span")
	WebElement LogInErrorMessage;

	@FindBy(how=How.XPATH,using="//*[@id=\"hmenu-content\"]/ul[35]/li[47]/a/div")
	WebElement BTN_SignOut;
	////*[@id="hmenu-content"]/ul[35]/li[47]/a
	////*[@id="hmenu-content"]/ul[35]/li[47]/a/div

	public void ClickonAccount() {
		AccountList.click();
	}

	public void TypeEmail(String Email) {
		EmailField.sendKeys(Email);
	}

	public void ClickOnContinue() {
		BTN_Continue1.click();
	}

	public void TypePassword(String Password) {
		PasswordField.sendKeys(Password);
	}
	public void ClickOnSignInBTN() {
		BTN_signInSubmit.click();
	}
	
	public boolean VerifyUserName(boolean userName) {
		userName=false;
		boolean expectedName=ldriver.getPageSource().contains("Mohammed");
		if(expectedName==true) {
			userName=expectedName;
		}
		return userName;
	}
	
	public boolean VerifyLogInError(boolean erMessage) {
		String message = LogInErrorMessage.getText();
		erMessage=false;
		if(message=="Your password is incorrect") {
			erMessage=true;
		}
		
	
		return erMessage;
		
	}

	public void ClickOnHamburgerBTN() throws Exception {
		HamburgerMenu.click();
		Thread.sleep(4000);
	}

	public void ClickOnSinOutBTN() {
		BTN_SignOut.click();

	}
	//<<<<< Ended SignIn related elements/methods>>>>>





}
