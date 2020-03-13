package helpers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ElementWait {
	
	public WebDriver driver;

	public void WaitforEllenent(WebElement element, long second) {	
			WebDriverWait wait = new WebDriverWait(driver, second);
			wait.until(ExpectedConditions.visibilityOf(element));
	}

	
	
	
	
}