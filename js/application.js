define([], () =>{
    class Application {
        constructor(options) {
            console.log(options);
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

    return Application;

});