define(['jquery', 'charts'], ($, chart) => {
    class Portfolio {
        constructor(options) {
            this.init();
            this.apiKey = 'c52p82aad3i9pcg0e6lg';
            this.tickerData = [];
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
        getTickerPrice.call(this);
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
    }


    function getTickerPrice() {
        let tickerArr = ['TSLA', 'APPL', 'WMT', 'LMND'];
        for (let i = 0 ; i < tickerArr.length; i++) {
            $.ajax({
                url: `https://finnhub.io/api/v1/quote?symbol=${tickerArr[i]}&token=${this.apiKey}`,
                success:function(data){
                    console.log(data);
                }
            });
        }
    }

    return Portfolio;
});