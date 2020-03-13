package stepDefination;

import org.apache.logging.log4j.LogManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import pageObjects.AmazonLoginPage;
import pageObjects.AmazonSerach;
import pageObjects.BaseClass;

public class Stepps extends BaseClass {






	// Strart Login Related Steps

	@Given("user open chrome browser")
	public void user_open_chrome_browser() {
		log=LogManager.getLogger(Stepps.class);

		log.info("Setting up Chrome Browser");
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir")+"/Drivers/chromedriver-2");
		driver= new ChromeDriver();
		al= new AmazonLoginPage(driver);

	}

	@When("user navigates to url {string}")
	public void user_navigates_to_url(String string) {
		log.info("Navigating to URL");
		driver.get(string); 
	}

	@Then("user clciks on LogIn button")
	public void user_clciks_on_LogIn_button() {
		log.info("Clicking on Account");
		al.ClickonAccount();


	}

	@Then("user enters email as {string}")
	public void user_enters_email_as(String string) {
		log.info("Typing the login email");
		al.TypeEmail(string);
	}

	@Then("user clciks on continue button")
	public void user_clciks_on_continue_button() {
		log.info("Clicking on Continue Button");
		al.ClickOnContinue();
	}

	@Then("user ecters password as {string}")
	public void user_ecters_password_as(String string) {
		log.info("Typing the password");
		al.TypePassword(string);
	}

	@Then("user Clicks on signin")
	public void user_Clicks_on_signin() {
		log.info("Clicking on Signin");
		al.ClickOnSignInBTN();
	}

	@Then("users name should appear in the pannel")
	public void users_name_should_appear_in_the_pannel_as() {
		log.info("Verifying User Name ");
		al.VerifyUserName(true);
	}

	@Then("user clcik on signout from menu")
	public void user_clcik_on_signout_from_menu() throws Exception {
		log.info("Clicking on SignOut Button");
		al.ClickOnHamburgerBTN();
		al.ClickOnSinOutBTN();
	}

	@Then("user closes the browser")
	public void user_closes_the_browser() {
		log.info("Closing the Browser");
		driver.close();
	}
	@Then("User Should see Incorrect Password message")
	public void user_Should_see_Incorrect_Password_message() {
		log.info("Verifying SignIn Error Message");
		al.VerifyLogInError(true);
	}

	//END longin Related Steps

	//Start Srearch Related Steps


	@Given("User open chrome browser")
	public void user_open_chrome_browser_Search() {
		log=LogManager.getLogger(Stepps.class);

		log.info("Setting up Chrome Browser");
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir")+"/Drivers/chromedriver-2");
		driver= new ChromeDriver();
		sr= new AmazonSerach(driver);


	}

	@When("User Navigate to url {string}")
	public void user_Navigate_to_url(String string) {
		log.info("Navigating to Amazon");
		driver.get(string);
	}

	@Then("user varify that search bar is activate")
	public void user_varify_that_search_bar_is_activate() {
		log.info("Verifiying SearchBar");
		sr.VerifySearchbar();
	}

	@Then("user input data in search bar {string}")
	public void user_input_data_in_search_bar(String string) {
		log.info("Typing in searchbar");
		sr.TypeOnSearchBar(string);

	}

	@Then("user Varify the search result")
	public void user_Varify_the_search_result() {
		
		log.info("Verifying Serach Result");
		sr.VerifySRCresult();

	}

	@Then("user closes the bhrome browser")
	public void user_closes_the_bhrome_browser() {
		log.info("Clossing The Browser");
		driver.close();
	}


















}
