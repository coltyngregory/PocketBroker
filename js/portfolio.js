define(['jquery', 'charts'], ($, chart) => {
    class Portfolio {
        constructor(options) {
            this.init();
            //options = options || {};
            //this.container = $(`#${options.containerId}`) || $(document.body);
        }

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

    }

    function RemoveUIBindings() {

    }

    function stuff() {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);

        let options = {
            title: 'My Portfolio'
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
        }

        let walletBalance = 1000;
        let popularSymbols = ['NXE', 'BTG', 'ORLA', 'RMED', 'GOED'];
        let apiKey = 'c52p82aad3i9pcg0e6lg';
        $.ajax({
            url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XASE&token=${apiKey}`,
            success:function(data){
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < popularSymbols.length; j++) {
                        if (data[i].displaySymbol === popularSymbols[j]) {
                            $('#stockList').append(`<option>${data[i].displaySymbol}</option>`);
                        }   
                    }
                }
            }
        });
    }

    function getTickerPrice() {
        $.ajax({
            url: `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${apiKey}`,
            success:function(data){
                console.log(data);
            }
        });
    }

    return Portfolio;
});