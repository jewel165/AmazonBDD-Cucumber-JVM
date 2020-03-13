package testRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.Reporter;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions
(			features="./Features/",
			glue= "stepDefination",
			dryRun=false,
			plugin= {"pretty","html:./Reports"},
			monochrome = true,
			tags= {"@smoke,@Regression"}
			
		)


public class Runner {
	
	/*@AfterClass
	public static void SetUpExtentReporter() {
		Reporter.loadXMLConfig("/Users/jewel/eclipse-workspace/AmazonBDD/src/test/resource/extent-config.xml");
		
	}
*/
}
