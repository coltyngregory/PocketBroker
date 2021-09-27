define(['jquery', 'charts', 'knockout'], ($, chart, ko) => {
    class Portfolio {
        constructor(options) {
            options = options || {};
            this.People = ko.observableArray([]);
            this.Person = {Name: "", Age: "", Height: "", Weight: ""};
            this.init();
            //this.container = $(`#${options.containerId}`) || $(document.body);
        }

        Destroy() {
            RemoveUIBindings.call(this);
            delete App.Portfolio;
        }

        init() {
            ApplyUIBindings.call(this);
            stuff.call(this);
            this.updatePerson();
        }

        updatePerson() {
            let person = document.getElementById('personDetails');
            ko.cleanNode(person);
            ko.applyBindings(this.Person, person);
        }
    }

    function ApplyUIBindings() {
        $('#addPersonBtn').on('click', addPersonToList.bind(this));
        $('#testbtn').on('click', myprivateMethod.bind(this));
    }

    function myprivateMethod() {
        console.log(this);
    }

    function RemoveUIBindings() {
        $('#addPersonBtn').off('click', addPersonToList.bind(this));
    }

    function addPersonToList() {
        this.People().push(this.Person);
    }

    function stuff() {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['TLSA',     0],
            ['APPL',      0],
            ['AIRC',  50],
            ['NETF', 0],
            ['BBY',    50]
        ]);

        let options = {
            title: 'My Portfolio'
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
        }
        let allStockChart_X_Values = [];
        let allStockChart_Y_Values = [];
        let walletBalance = 1000;
        let popularSymbols = ['NXE', 'BTG', 'ORLA', 'RMED', 'GOED'];
        let specificStockChart_X_Values = [];
        let specificStockChart_Y_Values = [];
        const APIKey = '1N6SG4GFLF1257TV';
        let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSLA&outputsize=compact&apikey=${APIKey}`;
        $.ajax({
            url: apiCall,
            success:function(data){
                for (var key in data['Time Series (Daily)']) {
                    specificStockChart_X_Values.push(key);
                    specificStockChart_Y_Values.push(data['Time Series (Daily)'][key]['1. open']);
                    
                }
                console.log(specificStockChart_Y_Values)
            }   
        });
    }

//     $.ajax({
//         url: apiCall,
//         success:function(data){
//             for (let i = 0; i < data.length; i++) {
//                 for (let j = 0; j < popularSymbols.length; j++) {
//                     if (data[i].displaySymbol === popularSymbols[j]) {
//                         $('#stockList').append(`<option>${data[i].displaySymbol}</option>`);
//                     }   
//                 }
//             }
//         }
//     });
// }


    function getTickerPrice() {
        $.ajax({
            url: `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${APIKey}`,
            success:function(data){
                console.log(data);
            }
        });
    }

    return Portfolio;
});