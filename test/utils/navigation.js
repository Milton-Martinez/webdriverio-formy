
export class Navigation {
    goToUrl(url='https://formy-project.herokuapp.com/'){
        browser.url(url)
    }

    get linksMenu(){
        return $$('.jumbotron-fluid li');
    }
}