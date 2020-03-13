package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;





public class AmazonSerach {

	public WebDriver driver;

	public AmazonSerach(WebDriver ldriver){
		driver=ldriver;
		PageFactory.initElements(ldriver, this);

	}

	@FindBy(xpath = "//*[@id=\"twotabsearchtextbox\"]")
	WebElement SearchBar;

	@FindBy(xpath = "//*[@id=\"nav-search\"]/form/div[2]/div/input")
	WebElement SearchButton;

	@FindBy(xpath = "//*[@id=\"search\"]/span/span/h1/div/div[1]/div/div/span[3]")
	WebElement SRCresult;

	public void VerifySearchbar() {
		boolean SrcBarExptdStatus= true;
		boolean SrcBarStatus =	SearchBar.isEnabled();

		if(SrcBarExptdStatus==SrcBarStatus) {
			System.out.println("Search Bar is Active");
		}

	}

	public void TypeOnSearchBar(String SRCcontent) {
		SearchBar.clear();
		SearchBar.sendKeys(SRCcontent);

	}

	public void ClickOnSearchBTN() {
		SearchBar.click();
	}

	public void VerifySRCresult() {
		String expectedSRCresult = "iphone"	;
		String ActualSRCresult =	SRCresult.getText();

		if(ActualSRCresult==expectedSRCresult) {
			System.out.println("Search Result is Correct");
		}
	}

}
