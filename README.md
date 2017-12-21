# Volusion Javascript Helper Class

The Javascript file contained in this repository contains functions that help simplify commonly used approaches to custom Volusion development. Due to a lack of access to server side code on the Volusion platform, customizations tend to be heavy in Javascript so we have created this file to make Volusion development easier for all.

## Installation
Download the helper-functions.js file and upload the file into your Volusion site's FTP. We recommend putting it in a folder named 'js' in the appropriate template folder in the /v/vspfiles/templates directory. You will then go to Design -> File Editor and before the closing body tag (`</body>`) and before any functions that will be using these functions, you will make your declaration:

`<script type="text/javascript" src="/v/vspfiles/templates/{template_name}/js/helper-functions.js"></script>`

Prior to use in any Javascript files or scripts, we recommend making the following declaration to ensure that the helpers class has been loaded successfully. Without a successful load, your script could cause errors on the site:

```
if(!VOLUSION_HELPERS){
	throw new Error('Volusion Helpers functions not available. Aborting.');
}
```

## Examples
When effectively loading Javascript files on Volusion sites, you need to load them sitewide through the a declaration in the main template file. Oftentimes, a developer will write code that only needs to run, for example, on the checkout page.

In this simple example, we detect if the page is the checkout page, and if so, deliver a message to the browser via the Javascript alert() function:

```
if( VOLUSION_HELPERS.detect.isCheckout() ){
  alert('This is the checkout page!');
}
```
---

We encourage other developers to provide additional functionality to our code through pull requests.
