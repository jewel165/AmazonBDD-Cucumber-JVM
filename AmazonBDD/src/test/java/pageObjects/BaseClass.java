package pageObjects;

import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	
	public static Logger log;
	public WebDriver driver;
	public AmazonLoginPage al;
	public AmazonSerach sr;
	WebDriverWait wait;
	
	
	//Explicit wait for webElenets
	public void WaitforEllenent(WebElement element, long second) {	
			wait = new WebDriverWait(driver, second);
			wait.until(ExpectedConditions.visibilityOf(element));
	}
	

}
