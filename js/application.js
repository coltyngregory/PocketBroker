define(['js/utility.js'], (utility) =>{
    class Application {
        constructor(options) {}

        init() {
            this.utility = new utility({});
            applyUIbindings.call(this);
            showPortfolio.call(this);
        }
    }

    function applyUIbindings() {

    }

    function signIn() {
        if(!App.SignIn) {
            require(["js/signIn.js"], SignIn => {
                App.SignIn = new SignIn({
                    containerId: 'signIn-container'
                });
            });
        } else {
            App.SignIn.init();
        }
    }

    function showPortfolio() {
        if(!App.Portfolio) {
            require(["js/portfolio.js"], Portfolio => {
                App.Portfolio = new Portfolio({
                    containerId: 'portfolio-container'
                });
            });
        } else {
            App.Portfolio.init();
        }
    }

    function showStocks() {
        if(!App.Stocks) {
            require(["js/stocks.js"], Stocks => {
                App.Stocks = new Stocks({
                    containerId: 'stocks-container'
                });
            });
        } else {
            App.Stocks.init();
        }
    }

    function showNews() {
        if(!App.News) {
            require(["js/news.js"], St => {
                App.News = new News({
                    containerId: 'news-container'
                });
            });
        } else {
            App.News.init();
        }
    }

    

    return Application;

});