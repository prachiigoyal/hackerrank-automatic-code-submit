let puppeteer=require('puppeteer');
let browserWillBeLaunchedPromise=puppeteer.launch({
    headless:false
})
browserWillBeLaunchedPromise.then(function(browserInstance){
    let newPagePromise=browserInstance.newPage();
    newPagePromise.then(function(newPage){
        console.log("new tab is opened");
        let pageWillBeOpenedPromise=newPage.goto("https://www.pepcoding.com")
        pageWillBeOpenedPromise.then(function(){
            console.log("page is opened");
        })
    })
})