define(['jquery', 'charts'], ($, chart) => {
    class Portfolio {
        constructor(options) {}

        Destroy() {
            RemoveUIBindings.call(this);
            delete PB.Portfolio;
        }

        init() {
            ApplyUIBindings.call(this);
            stuff.call(this);
        }
    }

    function ApplyUIBindings() {
        getTickerPrice.call(this);
    }

    function RemoveUIBindings() {

    }

    return Portfolio;
});