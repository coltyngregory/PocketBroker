define([], () =>{
    class Application {
        constructor(options) {
            console.log(options);
            this.defaultValue = 'hello mr coltyn';
        }

        init() {
            applyUIbindings.call(this);
            showPortfolio.call(this);
        }
    }

    function applyUIbindings() {

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