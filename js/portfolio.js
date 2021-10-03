define(['jquery', 'charts'], ($, chart) => {
    class Portfolio {
        constructor(options) {
            this.apiKey = '1N6SG4GFLF1257TV';
            this.tickerData = [];
            this.tickersToCheck = ['TSLA', 'LMND', 'AAPL'];
            this.chartData = [['Task', 'Hours per Day']];
            this.tempData = [
                {
                    "Meta Data": {
                        "1. Information": "Daily Time Series with Splits and Dividend Events",
                        "2. Symbol": "LMND",
                        "3. Last Refreshed": "2021-09-29",
                        "4. Output Size": "Compact",
                        "5. Time Zone": "US/Eastern"
                    },
                    "Time Series (Daily)": {
                        "2021-09-29": {
                            "1. open": "67.98",
                            "2. high": "68.43",
                            "3. low": "64.87",
                            "4. close": "65.67",
                            "5. adjusted close": "65.67",
                            "6. volume": "1142384",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-28": {
                            "1. open": "70.34",
                            "2. high": "71.2838",
                            "3. low": "67.02",
                            "4. close": "67.21",
                            "5. adjusted close": "67.21",
                            "6. volume": "1724920",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-27": {
                            "1. open": "69.9",
                            "2. high": "72.65",
                            "3. low": "68.6744",
                            "4. close": "71.87",
                            "5. adjusted close": "71.87",
                            "6. volume": "996360",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-24": {
                            "1. open": "71.02",
                            "2. high": "71.23",
                            "3. low": "68.94",
                            "4. close": "69.72",
                            "5. adjusted close": "69.72",
                            "6. volume": "1142235",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-23": {
                            "1. open": "72.11",
                            "2. high": "72.77",
                            "3. low": "71.1",
                            "4. close": "71.25",
                            "5. adjusted close": "71.25",
                            "6. volume": "812752",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-22": {
                            "1. open": "71.03",
                            "2. high": "72.93",
                            "3. low": "70.935",
                            "4. close": "71.71",
                            "5. adjusted close": "71.71",
                            "6. volume": "790163",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-21": {
                            "1. open": "69.8",
                            "2. high": "71.14",
                            "3. low": "68.9",
                            "4. close": "70.16",
                            "5. adjusted close": "70.16",
                            "6. volume": "1094084",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-20": {
                            "1. open": "69.44",
                            "2. high": "71.5",
                            "3. low": "67.76",
                            "4. close": "68.93",
                            "5. adjusted close": "68.93",
                            "6. volume": "1740366",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-17": {
                            "1. open": "72.92",
                            "2. high": "74.0",
                            "3. low": "72.09",
                            "4. close": "73.24",
                            "5. adjusted close": "73.24",
                            "6. volume": "2244132",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-16": {
                            "1. open": "72.48",
                            "2. high": "74.1367",
                            "3. low": "71.3501",
                            "4. close": "72.28",
                            "5. adjusted close": "72.28",
                            "6. volume": "860071",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-15": {
                            "1. open": "71.14",
                            "2. high": "73.08",
                            "3. low": "69.98",
                            "4. close": "72.72",
                            "5. adjusted close": "72.72",
                            "6. volume": "1078536",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-14": {
                            "1. open": "72.98",
                            "2. high": "74.5985",
                            "3. low": "70.0",
                            "4. close": "70.91",
                            "5. adjusted close": "70.91",
                            "6. volume": "1333572",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-13": {
                            "1. open": "75.07",
                            "2. high": "75.085",
                            "3. low": "72.2101",
                            "4. close": "72.77",
                            "5. adjusted close": "72.77",
                            "6. volume": "1192108",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-10": {
                            "1. open": "76.5",
                            "2. high": "77.5399",
                            "3. low": "74.25",
                            "4. close": "74.72",
                            "5. adjusted close": "74.72",
                            "6. volume": "839940",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-09": {
                            "1. open": "74.09",
                            "2. high": "77.815",
                            "3. low": "74.0",
                            "4. close": "76.27",
                            "5. adjusted close": "76.27",
                            "6. volume": "1188916",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-08": {
                            "1. open": "76.62",
                            "2. high": "77.4501",
                            "3. low": "73.91",
                            "4. close": "74.95",
                            "5. adjusted close": "74.95",
                            "6. volume": "920630",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-07": {
                            "1. open": "77.44",
                            "2. high": "79.12",
                            "3. low": "76.62",
                            "4. close": "76.86",
                            "5. adjusted close": "76.86",
                            "6. volume": "881672",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-03": {
                            "1. open": "78.99",
                            "2. high": "79.25",
                            "3. low": "76.325",
                            "4. close": "77.32",
                            "5. adjusted close": "77.32",
                            "6. volume": "976064",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-02": {
                            "1. open": "79.76",
                            "2. high": "81.6767",
                            "3. low": "78.2",
                            "4. close": "79.3",
                            "5. adjusted close": "79.3",
                            "6. volume": "1113230",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-01": {
                            "1. open": "76.18",
                            "2. high": "81.1",
                            "3. low": "76.0226",
                            "4. close": "78.85",
                            "5. adjusted close": "78.85",
                            "6. volume": "1409142",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-31": {
                            "1. open": "75.85",
                            "2. high": "76.15",
                            "3. low": "73.9",
                            "4. close": "75.54",
                            "5. adjusted close": "75.54",
                            "6. volume": "744136",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-30": {
                            "1. open": "76.99",
                            "2. high": "77.02",
                            "3. low": "74.45",
                            "4. close": "75.47",
                            "5. adjusted close": "75.47",
                            "6. volume": "1041941",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-27": {
                            "1. open": "72.24",
                            "2. high": "76.14",
                            "3. low": "71.66",
                            "4. close": "76.08",
                            "5. adjusted close": "76.08",
                            "6. volume": "1117271",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-26": {
                            "1. open": "74.41",
                            "2. high": "75.6819",
                            "3. low": "72.2",
                            "4. close": "72.53",
                            "5. adjusted close": "72.53",
                            "6. volume": "952089",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-25": {
                            "1. open": "75.61",
                            "2. high": "76.78",
                            "3. low": "73.82",
                            "4. close": "74.05",
                            "5. adjusted close": "74.05",
                            "6. volume": "908816",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-24": {
                            "1. open": "74.37",
                            "2. high": "77.09",
                            "3. low": "73.4406",
                            "4. close": "75.96",
                            "5. adjusted close": "75.96",
                            "6. volume": "1594658",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-23": {
                            "1. open": "69.71",
                            "2. high": "73.45",
                            "3. low": "69.69",
                            "4. close": "73.12",
                            "5. adjusted close": "73.12",
                            "6. volume": "1627433",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-20": {
                            "1. open": "68.22",
                            "2. high": "69.79",
                            "3. low": "67.46",
                            "4. close": "68.94",
                            "5. adjusted close": "68.94",
                            "6. volume": "836216",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-19": {
                            "1. open": "68.5",
                            "2. high": "70.38",
                            "3. low": "67.01",
                            "4. close": "67.55",
                            "5. adjusted close": "67.55",
                            "6. volume": "1241894",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-18": {
                            "1. open": "69.44",
                            "2. high": "71.61",
                            "3. low": "67.65",
                            "4. close": "69.54",
                            "5. adjusted close": "69.54",
                            "6. volume": "1536324",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-17": {
                            "1. open": "69.99",
                            "2. high": "70.48",
                            "3. low": "66.48",
                            "4. close": "68.39",
                            "5. adjusted close": "68.39",
                            "6. volume": "3223569",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-16": {
                            "1. open": "73.73",
                            "2. high": "74.065",
                            "3. low": "70.51",
                            "4. close": "71.87",
                            "5. adjusted close": "71.87",
                            "6. volume": "1736324",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-13": {
                            "1. open": "76.08",
                            "2. high": "76.49",
                            "3. low": "73.14",
                            "4. close": "73.55",
                            "5. adjusted close": "73.55",
                            "6. volume": "2150276",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-12": {
                            "1. open": "81.0",
                            "2. high": "81.19",
                            "3. low": "75.75",
                            "4. close": "75.84",
                            "5. adjusted close": "75.84",
                            "6. volume": "2321299",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-11": {
                            "1. open": "82.86",
                            "2. high": "83.49",
                            "3. low": "79.27",
                            "4. close": "81.73",
                            "5. adjusted close": "81.73",
                            "6. volume": "1222803",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-10": {
                            "1. open": "84.25",
                            "2. high": "85.9999",
                            "3. low": "80.73",
                            "4. close": "83.03",
                            "5. adjusted close": "83.03",
                            "6. volume": "1260893",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-09": {
                            "1. open": "80.95",
                            "2. high": "87.9699",
                            "3. low": "80.125",
                            "4. close": "85.35",
                            "5. adjusted close": "85.35",
                            "6. volume": "2263159",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-06": {
                            "1. open": "81.01",
                            "2. high": "83.215",
                            "3. low": "79.31",
                            "4. close": "80.9",
                            "5. adjusted close": "80.9",
                            "6. volume": "2053737",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-05": {
                            "1. open": "82.75",
                            "2. high": "82.76",
                            "3. low": "77.81",
                            "4. close": "79.64",
                            "5. adjusted close": "79.64",
                            "6. volume": "4346046",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-04": {
                            "1. open": "86.06",
                            "2. high": "91.3",
                            "3. low": "85.7",
                            "4. close": "89.88",
                            "5. adjusted close": "89.88",
                            "6. volume": "1770407",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-03": {
                            "1. open": "88.98",
                            "2. high": "88.98",
                            "3. low": "84.5306",
                            "4. close": "86.93",
                            "5. adjusted close": "86.93",
                            "6. volume": "1018380",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-02": {
                            "1. open": "88.01",
                            "2. high": "91.35",
                            "3. low": "87.2601",
                            "4. close": "88.98",
                            "5. adjusted close": "88.98",
                            "6. volume": "920644",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-30": {
                            "1. open": "87.69",
                            "2. high": "89.4358",
                            "3. low": "85.81",
                            "4. close": "87.06",
                            "5. adjusted close": "87.06",
                            "6. volume": "598191",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-29": {
                            "1. open": "90.86",
                            "2. high": "91.59",
                            "3. low": "87.57",
                            "4. close": "88.25",
                            "5. adjusted close": "88.25",
                            "6. volume": "729555",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-28": {
                            "1. open": "88.0",
                            "2. high": "92.0",
                            "3. low": "86.17",
                            "4. close": "90.7",
                            "5. adjusted close": "90.7",
                            "6. volume": "1005414",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-27": {
                            "1. open": "88.28",
                            "2. high": "88.28",
                            "3. low": "83.91",
                            "4. close": "87.39",
                            "5. adjusted close": "87.39",
                            "6. volume": "783893",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-26": {
                            "1. open": "85.34",
                            "2. high": "89.3194",
                            "3. low": "85.09",
                            "4. close": "87.85",
                            "5. adjusted close": "87.85",
                            "6. volume": "920565",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-23": {
                            "1. open": "89.79",
                            "2. high": "89.9999",
                            "3. low": "85.57",
                            "4. close": "85.83",
                            "5. adjusted close": "85.83",
                            "6. volume": "1032939",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-22": {
                            "1. open": "92.44",
                            "2. high": "92.45",
                            "3. low": "88.1293",
                            "4. close": "88.7",
                            "5. adjusted close": "88.7",
                            "6. volume": "957884",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-21": {
                            "1. open": "87.0",
                            "2. high": "93.69",
                            "3. low": "86.86",
                            "4. close": "92.2",
                            "5. adjusted close": "92.2",
                            "6. volume": "1751080",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-20": {
                            "1. open": "85.55",
                            "2. high": "88.26",
                            "3. low": "83.08",
                            "4. close": "86.59",
                            "5. adjusted close": "86.59",
                            "6. volume": "1119696",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-19": {
                            "1. open": "81.56",
                            "2. high": "85.35",
                            "3. low": "80.76",
                            "4. close": "84.24",
                            "5. adjusted close": "84.24",
                            "6. volume": "1190491",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-16": {
                            "1. open": "87.56",
                            "2. high": "88.2",
                            "3. low": "83.49",
                            "4. close": "84.25",
                            "5. adjusted close": "84.25",
                            "6. volume": "1620464",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-15": {
                            "1. open": "87.23",
                            "2. high": "90.8791",
                            "3. low": "84.425",
                            "4. close": "86.88",
                            "5. adjusted close": "86.88",
                            "6. volume": "1496624",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-14": {
                            "1. open": "91.7",
                            "2. high": "92.6",
                            "3. low": "86.82",
                            "4. close": "87.29",
                            "5. adjusted close": "87.29",
                            "6. volume": "1412134",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-13": {
                            "1. open": "95.01",
                            "2. high": "95.5",
                            "3. low": "90.9",
                            "4. close": "91.76",
                            "5. adjusted close": "91.76",
                            "6. volume": "1472499",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-12": {
                            "1. open": "97.21",
                            "2. high": "98.98",
                            "3. low": "94.7",
                            "4. close": "96.32",
                            "5. adjusted close": "96.32",
                            "6. volume": "749198",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-09": {
                            "1. open": "96.5",
                            "2. high": "98.4175",
                            "3. low": "94.2",
                            "4. close": "97.15",
                            "5. adjusted close": "97.15",
                            "6. volume": "774074",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-08": {
                            "1. open": "94.52",
                            "2. high": "97.58",
                            "3. low": "92.47",
                            "4. close": "95.95",
                            "5. adjusted close": "95.95",
                            "6. volume": "1352008",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-07": {
                            "1. open": "106.11",
                            "2. high": "106.25",
                            "3. low": "96.74",
                            "4. close": "97.02",
                            "5. adjusted close": "97.02",
                            "6. volume": "1547763",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-06": {
                            "1. open": "107.26",
                            "2. high": "107.355",
                            "3. low": "103.05",
                            "4. close": "105.01",
                            "5. adjusted close": "105.01",
                            "6. volume": "1200448",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-02": {
                            "1. open": "112.41",
                            "2. high": "114.8",
                            "3. low": "107.25",
                            "4. close": "107.65",
                            "5. adjusted close": "107.65",
                            "6. volume": "1150452",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-01": {
                            "1. open": "110.21",
                            "2. high": "115.85",
                            "3. low": "108.505",
                            "4. close": "112.75",
                            "5. adjusted close": "112.75",
                            "6. volume": "1662559",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-30": {
                            "1. open": "111.03",
                            "2. high": "111.92",
                            "3. low": "107.33",
                            "4. close": "109.41",
                            "5. adjusted close": "109.41",
                            "6. volume": "1002195",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-29": {
                            "1. open": "111.21",
                            "2. high": "113.71",
                            "3. low": "109.39",
                            "4. close": "111.86",
                            "5. adjusted close": "111.86",
                            "6. volume": "917084",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-28": {
                            "1. open": "110.11",
                            "2. high": "113.16",
                            "3. low": "109.74",
                            "4. close": "110.85",
                            "5. adjusted close": "110.85",
                            "6. volume": "1128610",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-25": {
                            "1. open": "111.29",
                            "2. high": "111.9",
                            "3. low": "107.5484",
                            "4. close": "111.9",
                            "5. adjusted close": "111.9",
                            "6. volume": "2194400",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-24": {
                            "1. open": "108.55",
                            "2. high": "112.71",
                            "3. low": "107.3501",
                            "4. close": "109.49",
                            "5. adjusted close": "109.49",
                            "6. volume": "1803778",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-23": {
                            "1. open": "101.9",
                            "2. high": "109.08",
                            "3. low": "101.72",
                            "4. close": "107.75",
                            "5. adjusted close": "107.75",
                            "6. volume": "1995472",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-22": {
                            "1. open": "103.08",
                            "2. high": "104.1",
                            "3. low": "100.54",
                            "4. close": "101.89",
                            "5. adjusted close": "101.89",
                            "6. volume": "797450",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-21": {
                            "1. open": "102.11",
                            "2. high": "104.5",
                            "3. low": "98.1",
                            "4. close": "102.81",
                            "5. adjusted close": "102.81",
                            "6. volume": "1284880",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-18": {
                            "1. open": "99.19",
                            "2. high": "104.26",
                            "3. low": "98.62",
                            "4. close": "103.83",
                            "5. adjusted close": "103.83",
                            "6. volume": "1619891",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-17": {
                            "1. open": "94.6",
                            "2. high": "101.32",
                            "3. low": "94.13",
                            "4. close": "99.19",
                            "5. adjusted close": "99.19",
                            "6. volume": "1636813",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-16": {
                            "1. open": "96.5",
                            "2. high": "99.57",
                            "3. low": "92.36",
                            "4. close": "95.6",
                            "5. adjusted close": "95.6",
                            "6. volume": "1724868",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-15": {
                            "1. open": "103.5",
                            "2. high": "104.0",
                            "3. low": "94.36",
                            "4. close": "96.38",
                            "5. adjusted close": "96.38",
                            "6. volume": "2111163",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-14": {
                            "1. open": "106.5",
                            "2. high": "107.33",
                            "3. low": "103.31",
                            "4. close": "103.78",
                            "5. adjusted close": "103.78",
                            "6. volume": "1003664",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-11": {
                            "1. open": "102.76",
                            "2. high": "106.98",
                            "3. low": "102.52",
                            "4. close": "106.17",
                            "5. adjusted close": "106.17",
                            "6. volume": "1742050",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-10": {
                            "1. open": "104.99",
                            "2. high": "105.18",
                            "3. low": "99.82",
                            "4. close": "101.36",
                            "5. adjusted close": "101.36",
                            "6. volume": "1950444",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-09": {
                            "1. open": "102.01",
                            "2. high": "107.89",
                            "3. low": "100.75",
                            "4. close": "105.15",
                            "5. adjusted close": "105.15",
                            "6. volume": "2374476",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-08": {
                            "1. open": "99.85",
                            "2. high": "109.01",
                            "3. low": "99.676",
                            "4. close": "103.63",
                            "5. adjusted close": "103.63",
                            "6. volume": "2652730",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-07": {
                            "1. open": "96.5",
                            "2. high": "99.52",
                            "3. low": "93.2101",
                            "4. close": "99.01",
                            "5. adjusted close": "99.01",
                            "6. volume": "1089537",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-04": {
                            "1. open": "96.22",
                            "2. high": "98.65",
                            "3. low": "94.83",
                            "4. close": "95.85",
                            "5. adjusted close": "95.85",
                            "6. volume": "1218607",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-03": {
                            "1. open": "96.01",
                            "2. high": "102.28",
                            "3. low": "94.29",
                            "4. close": "96.88",
                            "5. adjusted close": "96.88",
                            "6. volume": "2990691",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-02": {
                            "1. open": "90.56",
                            "2. high": "99.29",
                            "3. low": "90.0003",
                            "4. close": "99.03",
                            "5. adjusted close": "99.03",
                            "6. volume": "4073122",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-01": {
                            "1. open": "91.02",
                            "2. high": "91.79",
                            "3. low": "86.58",
                            "4. close": "91.72",
                            "5. adjusted close": "91.72",
                            "6. volume": "1740305",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-28": {
                            "1. open": "86.76",
                            "2. high": "92.75",
                            "3. low": "86.6984",
                            "4. close": "90.47",
                            "5. adjusted close": "90.47",
                            "6. volume": "2569472",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-27": {
                            "1. open": "83.41",
                            "2. high": "86.49",
                            "3. low": "81.72",
                            "4. close": "86.0",
                            "5. adjusted close": "86.0",
                            "6. volume": "1630383",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-26": {
                            "1. open": "76.56",
                            "2. high": "85.21",
                            "3. low": "76.4272",
                            "4. close": "84.2",
                            "5. adjusted close": "84.2",
                            "6. volume": "2156509",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-25": {
                            "1. open": "81.0",
                            "2. high": "81.37",
                            "3. low": "75.69",
                            "4. close": "76.06",
                            "5. adjusted close": "76.06",
                            "6. volume": "2088891",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-24": {
                            "1. open": "78.6",
                            "2. high": "82.31",
                            "3. low": "77.51",
                            "4. close": "80.84",
                            "5. adjusted close": "80.84",
                            "6. volume": "1452984",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-21": {
                            "1. open": "78.42",
                            "2. high": "80.14",
                            "3. low": "76.53",
                            "4. close": "78.4",
                            "5. adjusted close": "78.4",
                            "6. volume": "1486396",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-20": {
                            "1. open": "75.0",
                            "2. high": "78.36",
                            "3. low": "74.72",
                            "4. close": "77.53",
                            "5. adjusted close": "77.53",
                            "6. volume": "1596477",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-19": {
                            "1. open": "69.85",
                            "2. high": "74.8",
                            "3. low": "69.33",
                            "4. close": "73.92",
                            "5. adjusted close": "73.92",
                            "6. volume": "1428527",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-18": {
                            "1. open": "73.2",
                            "2. high": "74.88",
                            "3. low": "71.26",
                            "4. close": "73.87",
                            "5. adjusted close": "73.87",
                            "6. volume": "1750635",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-17": {
                            "1. open": "68.75",
                            "2. high": "73.06",
                            "3. low": "68.01",
                            "4. close": "72.48",
                            "5. adjusted close": "72.48",
                            "6. volume": "2104449",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-14": {
                            "1. open": "65.96",
                            "2. high": "69.87",
                            "3. low": "64.13",
                            "4. close": "69.45",
                            "5. adjusted close": "69.45",
                            "6. volume": "4881758",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-13": {
                            "1. open": "60.12",
                            "2. high": "67.3",
                            "3. low": "58.8301",
                            "4. close": "64.72",
                            "5. adjusted close": "64.72",
                            "6. volume": "9167021",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-12": {
                            "1. open": "67.95",
                            "2. high": "68.35",
                            "3. low": "60.0673",
                            "4. close": "60.17",
                            "5. adjusted close": "60.17",
                            "6. volume": "12298455",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-11": {
                            "1. open": "66.01",
                            "2. high": "74.82",
                            "3. low": "65.13",
                            "4. close": "73.85",
                            "5. adjusted close": "73.85",
                            "6. volume": "3831255",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-10": {
                            "1. open": "77.36",
                            "2. high": "77.59",
                            "3. low": "71.05",
                            "4. close": "71.06",
                            "5. adjusted close": "71.06",
                            "6. volume": "3391395",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        }
                    }
                },
                {
                    "Meta Data": {
                        "1. Information": "Daily Time Series with Splits and Dividend Events",
                        "2. Symbol": "AAPL",
                        "3. Last Refreshed": "2021-09-29",
                        "4. Output Size": "Compact",
                        "5. Time Zone": "US/Eastern"
                    },
                    "Time Series (Daily)": {
                        "2021-09-29": {
                            "1. open": "142.47",
                            "2. high": "144.45",
                            "3. low": "142.03",
                            "4. close": "142.83",
                            "5. adjusted close": "142.83",
                            "6. volume": "74602044",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-28": {
                            "1. open": "143.25",
                            "2. high": "144.75",
                            "3. low": "141.69",
                            "4. close": "141.91",
                            "5. adjusted close": "141.91",
                            "6. volume": "108972340",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-27": {
                            "1. open": "145.47",
                            "2. high": "145.96",
                            "3. low": "143.82",
                            "4. close": "145.37",
                            "5. adjusted close": "145.37",
                            "6. volume": "74150729",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-24": {
                            "1. open": "145.66",
                            "2. high": "147.4701",
                            "3. low": "145.56",
                            "4. close": "146.92",
                            "5. adjusted close": "146.92",
                            "6. volume": "53477869",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-23": {
                            "1. open": "146.65",
                            "2. high": "147.08",
                            "3. low": "145.64",
                            "4. close": "146.83",
                            "5. adjusted close": "146.83",
                            "6. volume": "64838170",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-22": {
                            "1. open": "144.45",
                            "2. high": "146.43",
                            "3. low": "143.7001",
                            "4. close": "145.85",
                            "5. adjusted close": "145.85",
                            "6. volume": "76404341",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-21": {
                            "1. open": "143.93",
                            "2. high": "144.6",
                            "3. low": "142.78",
                            "4. close": "143.43",
                            "5. adjusted close": "143.43",
                            "6. volume": "75833962",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-20": {
                            "1. open": "143.8",
                            "2. high": "144.84",
                            "3. low": "141.27",
                            "4. close": "142.94",
                            "5. adjusted close": "142.94",
                            "6. volume": "123478863",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-17": {
                            "1. open": "148.82",
                            "2. high": "148.82",
                            "3. low": "145.76",
                            "4. close": "146.06",
                            "5. adjusted close": "146.06",
                            "6. volume": "129868824",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-16": {
                            "1. open": "148.44",
                            "2. high": "148.97",
                            "3. low": "147.221",
                            "4. close": "148.79",
                            "5. adjusted close": "148.79",
                            "6. volume": "68034149",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-15": {
                            "1. open": "148.56",
                            "2. high": "149.44",
                            "3. low": "146.37",
                            "4. close": "149.03",
                            "5. adjusted close": "149.03",
                            "6. volume": "83281315",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-14": {
                            "1. open": "150.35",
                            "2. high": "151.07",
                            "3. low": "146.91",
                            "4. close": "148.12",
                            "5. adjusted close": "148.12",
                            "6. volume": "109296295",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-13": {
                            "1. open": "150.63",
                            "2. high": "151.42",
                            "3. low": "148.75",
                            "4. close": "149.55",
                            "5. adjusted close": "149.55",
                            "6. volume": "102404329",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-10": {
                            "1. open": "155.0",
                            "2. high": "155.48",
                            "3. low": "148.7",
                            "4. close": "148.97",
                            "5. adjusted close": "148.97",
                            "6. volume": "140893235",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-09": {
                            "1. open": "155.49",
                            "2. high": "156.11",
                            "3. low": "153.95",
                            "4. close": "154.07",
                            "5. adjusted close": "154.07",
                            "6. volume": "57305730",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-08": {
                            "1. open": "156.98",
                            "2. high": "157.04",
                            "3. low": "153.975",
                            "4. close": "155.11",
                            "5. adjusted close": "155.11",
                            "6. volume": "74420207",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-07": {
                            "1. open": "154.97",
                            "2. high": "157.26",
                            "3. low": "154.39",
                            "4. close": "156.69",
                            "5. adjusted close": "156.69",
                            "6. volume": "82278261",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-03": {
                            "1. open": "153.76",
                            "2. high": "154.63",
                            "3. low": "153.09",
                            "4. close": "154.3",
                            "5. adjusted close": "154.3",
                            "6. volume": "57866066",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-02": {
                            "1. open": "153.87",
                            "2. high": "154.72",
                            "3. low": "152.4",
                            "4. close": "153.65",
                            "5. adjusted close": "153.65",
                            "6. volume": "71171317",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-01": {
                            "1. open": "152.83",
                            "2. high": "154.98",
                            "3. low": "152.34",
                            "4. close": "152.51",
                            "5. adjusted close": "152.51",
                            "6. volume": "80313711",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-31": {
                            "1. open": "152.66",
                            "2. high": "152.8",
                            "3. low": "151.29",
                            "4. close": "151.83",
                            "5. adjusted close": "151.83",
                            "6. volume": "86453117",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-30": {
                            "1. open": "149.0",
                            "2. high": "153.49",
                            "3. low": "148.61",
                            "4. close": "153.12",
                            "5. adjusted close": "153.12",
                            "6. volume": "90956723",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-27": {
                            "1. open": "147.48",
                            "2. high": "148.75",
                            "3. low": "146.83",
                            "4. close": "148.6",
                            "5. adjusted close": "148.6",
                            "6. volume": "55802388",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-26": {
                            "1. open": "148.35",
                            "2. high": "149.12",
                            "3. low": "147.51",
                            "4. close": "147.54",
                            "5. adjusted close": "147.54",
                            "6. volume": "48597195",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-25": {
                            "1. open": "149.81",
                            "2. high": "150.32",
                            "3. low": "147.8",
                            "4. close": "148.36",
                            "5. adjusted close": "148.36",
                            "6. volume": "58991297",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-24": {
                            "1. open": "149.45",
                            "2. high": "150.86",
                            "3. low": "149.15",
                            "4. close": "149.62",
                            "5. adjusted close": "149.62",
                            "6. volume": "48606428",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-23": {
                            "1. open": "148.31",
                            "2. high": "150.19",
                            "3. low": "147.89",
                            "4. close": "149.71",
                            "5. adjusted close": "149.71",
                            "6. volume": "60131810",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-20": {
                            "1. open": "147.44",
                            "2. high": "148.5",
                            "3. low": "146.78",
                            "4. close": "148.19",
                            "5. adjusted close": "148.19",
                            "6. volume": "60549630",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-19": {
                            "1. open": "145.03",
                            "2. high": "148.0",
                            "3. low": "144.5",
                            "4. close": "146.7",
                            "5. adjusted close": "146.7",
                            "6. volume": "86960310",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-18": {
                            "1. open": "149.8",
                            "2. high": "150.72",
                            "3. low": "146.15",
                            "4. close": "146.36",
                            "5. adjusted close": "146.36",
                            "6. volume": "86325990",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-17": {
                            "1. open": "150.23",
                            "2. high": "151.68",
                            "3. low": "149.09",
                            "4. close": "150.19",
                            "5. adjusted close": "150.19",
                            "6. volume": "92229735",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-16": {
                            "1. open": "148.535",
                            "2. high": "151.19",
                            "3. low": "146.47",
                            "4. close": "151.12",
                            "5. adjusted close": "151.12",
                            "6. volume": "103558782",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-13": {
                            "1. open": "148.97",
                            "2. high": "149.4444",
                            "3. low": "148.27",
                            "4. close": "149.1",
                            "5. adjusted close": "149.1",
                            "6. volume": "58846293",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-12": {
                            "1. open": "146.19",
                            "2. high": "149.05",
                            "3. low": "145.84",
                            "4. close": "148.89",
                            "5. adjusted close": "148.89",
                            "6. volume": "73779113",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-11": {
                            "1. open": "146.05",
                            "2. high": "146.72",
                            "3. low": "145.53",
                            "4. close": "145.86",
                            "5. adjusted close": "145.86",
                            "6. volume": "48493463",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-10": {
                            "1. open": "146.44",
                            "2. high": "147.71",
                            "3. low": "145.3",
                            "4. close": "145.6",
                            "5. adjusted close": "145.6",
                            "6. volume": "69023081",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-09": {
                            "1. open": "146.2",
                            "2. high": "146.7",
                            "3. low": "145.52",
                            "4. close": "146.09",
                            "5. adjusted close": "146.09",
                            "6. volume": "48908689",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-06": {
                            "1. open": "146.35",
                            "2. high": "147.11",
                            "3. low": "145.63",
                            "4. close": "146.14",
                            "5. adjusted close": "146.14",
                            "6. volume": "54126813",
                            "7. dividend amount": "0.2200",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-05": {
                            "1. open": "146.98",
                            "2. high": "147.84",
                            "3. low": "146.17",
                            "4. close": "147.06",
                            "5. adjusted close": "146.8389478",
                            "6. volume": "46397674",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-04": {
                            "1. open": "147.27",
                            "2. high": "147.79",
                            "3. low": "146.28",
                            "4. close": "146.95",
                            "5. adjusted close": "146.729113146",
                            "6. volume": "56368271",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-03": {
                            "1. open": "145.81",
                            "2. high": "148.045",
                            "3. low": "145.18",
                            "4. close": "147.36",
                            "5. adjusted close": "147.138496857",
                            "6. volume": "64786618",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-02": {
                            "1. open": "146.36",
                            "2. high": "146.95",
                            "3. low": "145.25",
                            "4. close": "145.52",
                            "5. adjusted close": "145.30126264",
                            "6. volume": "62879961",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-30": {
                            "1. open": "144.38",
                            "2. high": "146.33",
                            "3. low": "144.11",
                            "4. close": "145.86",
                            "5. adjusted close": "145.640751571",
                            "6. volume": "70440626",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-29": {
                            "1. open": "144.685",
                            "2. high": "146.55",
                            "3. low": "144.58",
                            "4. close": "145.64",
                            "5. adjusted close": "145.421082263",
                            "6. volume": "54323047",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-28": {
                            "1. open": "144.81",
                            "2. high": "146.97",
                            "3. low": "142.54",
                            "4. close": "144.98",
                            "5. adjusted close": "144.762074337",
                            "6. volume": "118931191",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-27": {
                            "1. open": "149.12",
                            "2. high": "149.21",
                            "3. low": "145.55",
                            "4. close": "146.77",
                            "5. adjusted close": "146.549383711",
                            "6. volume": "104818578",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-26": {
                            "1. open": "148.27",
                            "2. high": "149.83",
                            "3. low": "147.7",
                            "4. close": "148.99",
                            "5. adjusted close": "148.766046734",
                            "6. volume": "72434089",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-23": {
                            "1. open": "147.55",
                            "2. high": "148.7177",
                            "3. low": "146.92",
                            "4. close": "148.56",
                            "5. adjusted close": "148.336693086",
                            "6. volume": "71447416",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-22": {
                            "1. open": "145.935",
                            "2. high": "148.195",
                            "3. low": "145.81",
                            "4. close": "146.8",
                            "5. adjusted close": "146.579338617",
                            "6. volume": "77338156",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-21": {
                            "1. open": "145.53",
                            "2. high": "146.13",
                            "3. low": "144.63",
                            "4. close": "145.4",
                            "5. adjusted close": "145.181443017",
                            "6. volume": "74993460",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-20": {
                            "1. open": "143.46",
                            "2. high": "147.0997",
                            "3. low": "142.96",
                            "4. close": "146.15",
                            "5. adjusted close": "145.93031566",
                            "6. volume": "96350036",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-19": {
                            "1. open": "143.75",
                            "2. high": "144.07",
                            "3. low": "141.67",
                            "4. close": "142.45",
                            "5. adjusted close": "142.235877289",
                            "6. volume": "121434571",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-16": {
                            "1. open": "148.46",
                            "2. high": "149.76",
                            "3. low": "145.88",
                            "4. close": "146.39",
                            "5. adjusted close": "146.169954906",
                            "6. volume": "93251426",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-15": {
                            "1. open": "149.24",
                            "2. high": "150.0",
                            "3. low": "147.09",
                            "4. close": "148.48",
                            "5. adjusted close": "148.256813337",
                            "6. volume": "106820297",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-14": {
                            "1. open": "148.1",
                            "2. high": "149.57",
                            "3. low": "147.68",
                            "4. close": "149.15",
                            "5. adjusted close": "148.925806231",
                            "6. volume": "127050785",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-13": {
                            "1. open": "144.03",
                            "2. high": "147.46",
                            "3. low": "143.63",
                            "4. close": "145.64",
                            "5. adjusted close": "145.421082263",
                            "6. volume": "100827099",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-12": {
                            "1. open": "146.21",
                            "2. high": "146.32",
                            "3. low": "144.0",
                            "4. close": "144.5",
                            "5. adjusted close": "144.282795846",
                            "6. volume": "76299719",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-09": {
                            "1. open": "142.75",
                            "2. high": "145.65",
                            "3. low": "142.6522",
                            "4. close": "145.11",
                            "5. adjusted close": "144.891878929",
                            "6. volume": "99890800",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-08": {
                            "1. open": "141.58",
                            "2. high": "144.06",
                            "3. low": "140.665",
                            "4. close": "143.24",
                            "5. adjusted close": "143.024689806",
                            "6. volume": "105575458",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-07": {
                            "1. open": "143.535",
                            "2. high": "144.89",
                            "3. low": "142.66",
                            "4. close": "144.57",
                            "5. adjusted close": "144.352690626",
                            "6. volume": "104911589",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-06": {
                            "1. open": "140.07",
                            "2. high": "143.15",
                            "3. low": "140.07",
                            "4. close": "142.02",
                            "5. adjusted close": "141.80652364",
                            "6. volume": "108181793",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-02": {
                            "1. open": "137.9",
                            "2. high": "140.0",
                            "3. low": "137.745",
                            "4. close": "139.96",
                            "5. adjusted close": "139.749620115",
                            "6. volume": "78945572",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-01": {
                            "1. open": "136.6",
                            "2. high": "137.33",
                            "3. low": "135.76",
                            "4. close": "137.27",
                            "5. adjusted close": "137.063663569",
                            "6. volume": "52485781",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-30": {
                            "1. open": "136.17",
                            "2. high": "137.41",
                            "3. low": "135.87",
                            "4. close": "136.96",
                            "5. adjusted close": "136.754129544",
                            "6. volume": "63261393",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-29": {
                            "1. open": "134.8",
                            "2. high": "136.49",
                            "3. low": "134.35",
                            "4. close": "136.33",
                            "5. adjusted close": "136.125076524",
                            "6. volume": "64556081",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-28": {
                            "1. open": "133.41",
                            "2. high": "135.245",
                            "3. low": "133.35",
                            "4. close": "134.78",
                            "5. adjusted close": "134.577406395",
                            "6. volume": "62111303",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-25": {
                            "1. open": "133.46",
                            "2. high": "133.89",
                            "3. low": "132.81",
                            "4. close": "133.11",
                            "5. adjusted close": "132.909916644",
                            "6. volume": "70783746",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-24": {
                            "1. open": "134.45",
                            "2. high": "134.64",
                            "3. low": "132.93",
                            "4. close": "133.41",
                            "5. adjusted close": "133.209465701",
                            "6. volume": "68710998",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-23": {
                            "1. open": "133.77",
                            "2. high": "134.32",
                            "3. low": "133.23",
                            "4. close": "133.7",
                            "5. adjusted close": "133.49902979",
                            "6. volume": "60214200",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-22": {
                            "1. open": "132.13",
                            "2. high": "134.08",
                            "3. low": "131.62",
                            "4. close": "133.98",
                            "5. adjusted close": "133.77860891",
                            "6. volume": "74783618",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-21": {
                            "1. open": "130.3",
                            "2. high": "132.41",
                            "3. low": "129.21",
                            "4. close": "132.3",
                            "5. adjusted close": "132.10113419",
                            "6. volume": "79663316",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-18": {
                            "1. open": "130.71",
                            "2. high": "131.51",
                            "3. low": "130.24",
                            "4. close": "130.46",
                            "5. adjusted close": "130.263899973",
                            "6. volume": "108953309",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-17": {
                            "1. open": "129.8",
                            "2. high": "132.55",
                            "3. low": "129.65",
                            "4. close": "131.79",
                            "5. adjusted close": "131.591900793",
                            "6. volume": "96721669",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-16": {
                            "1. open": "130.37",
                            "2. high": "130.89",
                            "3. low": "128.461",
                            "4. close": "130.15",
                            "5. adjusted close": "129.954365947",
                            "6. volume": "91339351",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-15": {
                            "1. open": "129.94",
                            "2. high": "130.6",
                            "3. low": "129.39",
                            "4. close": "129.64",
                            "5. adjusted close": "129.44513255",
                            "6. volume": "62746332",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-14": {
                            "1. open": "127.82",
                            "2. high": "130.54",
                            "3. low": "127.07",
                            "4. close": "130.48",
                            "5. adjusted close": "130.28386991",
                            "6. volume": "96906490",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-11": {
                            "1. open": "126.53",
                            "2. high": "127.44",
                            "3. low": "126.1",
                            "4. close": "127.35",
                            "5. adjusted close": "127.158574747",
                            "6. volume": "53522373",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-10": {
                            "1. open": "127.02",
                            "2. high": "128.19",
                            "3. low": "125.94",
                            "4. close": "126.11",
                            "5. adjusted close": "125.920438644",
                            "6. volume": "71186421",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-09": {
                            "1. open": "127.21",
                            "2. high": "127.75",
                            "3. low": "126.52",
                            "4. close": "127.13",
                            "5. adjusted close": "126.938905439",
                            "6. volume": "56877937",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-08": {
                            "1. open": "126.6",
                            "2. high": "128.46",
                            "3. low": "126.2101",
                            "4. close": "126.74",
                            "5. adjusted close": "126.549491664",
                            "6. volume": "74403774",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-07": {
                            "1. open": "126.17",
                            "2. high": "126.32",
                            "3. low": "124.8321",
                            "4. close": "125.9",
                            "5. adjusted close": "125.710754304",
                            "6. volume": "71057550",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-04": {
                            "1. open": "124.07",
                            "2. high": "126.16",
                            "3. low": "123.85",
                            "4. close": "125.89",
                            "5. adjusted close": "125.700769336",
                            "6. volume": "75169343",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-03": {
                            "1. open": "124.68",
                            "2. high": "124.85",
                            "3. low": "123.13",
                            "4. close": "123.54",
                            "5. adjusted close": "123.354301722",
                            "6. volume": "76229170",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-02": {
                            "1. open": "124.28",
                            "2. high": "125.24",
                            "3. low": "124.05",
                            "4. close": "125.06",
                            "5. adjusted close": "124.872016945",
                            "6. volume": "59278862",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-01": {
                            "1. open": "125.08",
                            "2. high": "125.35",
                            "3. low": "123.94",
                            "4. close": "124.28",
                            "5. adjusted close": "124.093189396",
                            "6. volume": "67637118",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-28": {
                            "1. open": "125.57",
                            "2. high": "125.8",
                            "3. low": "124.55",
                            "4. close": "124.61",
                            "5. adjusted close": "124.422693359",
                            "6. volume": "71311109",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-27": {
                            "1. open": "126.44",
                            "2. high": "127.64",
                            "3. low": "125.08",
                            "4. close": "125.28",
                            "5. adjusted close": "125.091686253",
                            "6. volume": "94625601",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-26": {
                            "1. open": "126.955",
                            "2. high": "127.39",
                            "3. low": "126.42",
                            "4. close": "126.85",
                            "5. adjusted close": "126.659326319",
                            "6. volume": "56575920",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-25": {
                            "1. open": "127.82",
                            "2. high": "128.32",
                            "3. low": "126.32",
                            "4. close": "126.9",
                            "5. adjusted close": "126.709251162",
                            "6. volume": "72009482",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-24": {
                            "1. open": "126.01",
                            "2. high": "127.94",
                            "3. low": "125.94",
                            "4. close": "127.1",
                            "5. adjusted close": "126.908950533",
                            "6. volume": "63092945",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-21": {
                            "1. open": "127.82",
                            "2. high": "128.0",
                            "3. low": "125.21",
                            "4. close": "125.43",
                            "5. adjusted close": "125.241460782",
                            "6. volume": "79295436",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-20": {
                            "1. open": "125.23",
                            "2. high": "127.72",
                            "3. low": "125.1",
                            "4. close": "127.31",
                            "5. adjusted close": "127.118634873",
                            "6. volume": "76857123",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-19": {
                            "1. open": "123.16",
                            "2. high": "124.915",
                            "3. low": "122.86",
                            "4. close": "124.69",
                            "5. adjusted close": "124.502573107",
                            "6. volume": "92611989",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-18": {
                            "1. open": "126.56",
                            "2. high": "126.99",
                            "3. low": "124.78",
                            "4. close": "124.85",
                            "5. adjusted close": "124.662332605",
                            "6. volume": "63342929",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-17": {
                            "1. open": "126.82",
                            "2. high": "126.93",
                            "3. low": "125.17",
                            "4. close": "126.27",
                            "5. adjusted close": "126.080198142",
                            "6. volume": "74244624",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-14": {
                            "1. open": "126.25",
                            "2. high": "127.89",
                            "3. low": "125.85",
                            "4. close": "127.45",
                            "5. adjusted close": "127.258424433",
                            "6. volume": "81917951",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-13": {
                            "1. open": "124.58",
                            "2. high": "126.15",
                            "3. low": "124.26",
                            "4. close": "124.97",
                            "5. adjusted close": "124.782152227",
                            "6. volume": "105861339",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-12": {
                            "1. open": "123.4",
                            "2. high": "124.64",
                            "3. low": "122.25",
                            "4. close": "122.77",
                            "5. adjusted close": "122.585459142",
                            "6. volume": "112172282",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-11": {
                            "1. open": "123.5",
                            "2. high": "126.27",
                            "3. low": "122.77",
                            "4. close": "125.91",
                            "5. adjusted close": "125.720739273",
                            "6. volume": "126142826",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-10": {
                            "1. open": "129.41",
                            "2. high": "129.54",
                            "3. low": "126.81",
                            "4. close": "126.85",
                            "5. adjusted close": "126.659326319",
                            "6. volume": "88071229",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        }
                    }
                },
                {
                    "Meta Data": {
                        "1. Information": "Daily Time Series with Splits and Dividend Events",
                        "2. Symbol": "TSLA",
                        "3. Last Refreshed": "2021-09-29",
                        "4. Output Size": "Compact",
                        "5. Time Zone": "US/Eastern"
                    },
                    "Time Series (Daily)": {
                        "2021-09-29": {
                            "1. open": "779.8",
                            "2. high": "793.5",
                            "3. low": "770.68",
                            "4. close": "781.31",
                            "5. adjusted close": "781.31",
                            "6. volume": "20646205",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-28": {
                            "1. open": "787.2",
                            "2. high": "795.64",
                            "3. low": "766.1801",
                            "4. close": "777.56",
                            "5. adjusted close": "777.56",
                            "6. volume": "25381422",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-27": {
                            "1. open": "773.12",
                            "2. high": "799.0",
                            "3. low": "769.31",
                            "4. close": "791.36",
                            "5. adjusted close": "791.36",
                            "6. volume": "28070657",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-24": {
                            "1. open": "745.89",
                            "2. high": "774.8",
                            "3. low": "744.56",
                            "4. close": "774.39",
                            "5. adjusted close": "774.39",
                            "6. volume": "21373022",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-23": {
                            "1. open": "755.0",
                            "2. high": "758.2",
                            "3. low": "747.92",
                            "4. close": "753.64",
                            "5. adjusted close": "753.64",
                            "6. volume": "11947527",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-22": {
                            "1. open": "743.5263",
                            "2. high": "753.6699",
                            "3. low": "739.12",
                            "4. close": "751.94",
                            "5. adjusted close": "751.94",
                            "6. volume": "15126272",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-21": {
                            "1. open": "734.79",
                            "2. high": "744.7399",
                            "3. low": "730.44",
                            "4. close": "739.38",
                            "5. adjusted close": "739.38",
                            "6. volume": "16330723",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-20": {
                            "1. open": "734.5577",
                            "2. high": "742.0",
                            "3. low": "718.6249",
                            "4. close": "730.17",
                            "5. adjusted close": "730.17",
                            "6. volume": "24757652",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-17": {
                            "1. open": "757.15",
                            "2. high": "761.04",
                            "3. low": "750.0",
                            "4. close": "759.49",
                            "5. adjusted close": "759.49",
                            "6. volume": "28204176",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-16": {
                            "1. open": "752.83",
                            "2. high": "758.91",
                            "3. low": "747.61",
                            "4. close": "756.99",
                            "5. adjusted close": "756.99",
                            "6. volume": "13923393",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-15": {
                            "1. open": "745.0",
                            "2. high": "756.86",
                            "3. low": "738.36",
                            "4. close": "755.83",
                            "5. adjusted close": "755.83",
                            "6. volume": "15357685",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-14": {
                            "1. open": "742.57",
                            "2. high": "754.47",
                            "3. low": "736.4",
                            "4. close": "744.49",
                            "5. adjusted close": "744.49",
                            "6. volume": "18524881",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-13": {
                            "1. open": "740.2143",
                            "2. high": "744.78",
                            "3. low": "708.85",
                            "4. close": "743.0",
                            "5. adjusted close": "743.0",
                            "6. volume": "22952482",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-10": {
                            "1. open": "759.6",
                            "2. high": "762.61",
                            "3. low": "734.5201",
                            "4. close": "736.27",
                            "5. adjusted close": "736.27",
                            "6. volume": "15184170",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-09": {
                            "1. open": "753.41",
                            "2. high": "762.1",
                            "3. low": "751.6301",
                            "4. close": "754.86",
                            "5. adjusted close": "754.86",
                            "6. volume": "14077731",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-08": {
                            "1. open": "761.58",
                            "2. high": "764.45",
                            "3. low": "740.7733",
                            "4. close": "753.87",
                            "5. adjusted close": "753.87",
                            "6. volume": "18793036",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-07": {
                            "1. open": "740.0",
                            "2. high": "760.2",
                            "3. low": "739.26",
                            "4. close": "752.92",
                            "5. adjusted close": "752.92",
                            "6. volume": "20039825",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-03": {
                            "1. open": "732.2494",
                            "2. high": "734.0",
                            "3. low": "724.2",
                            "4. close": "733.57",
                            "5. adjusted close": "733.57",
                            "6. volume": "15271045",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-02": {
                            "1. open": "734.5",
                            "2. high": "740.97",
                            "3. low": "730.54",
                            "4. close": "732.39",
                            "5. adjusted close": "732.39",
                            "6. volume": "12796739",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-09-01": {
                            "1. open": "734.08",
                            "2. high": "741.99",
                            "3. low": "731.2701",
                            "4. close": "734.09",
                            "5. adjusted close": "734.09",
                            "6. volume": "13204335",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-31": {
                            "1. open": "733.0",
                            "2. high": "740.39",
                            "3. low": "726.44",
                            "4. close": "735.72",
                            "5. adjusted close": "735.72",
                            "6. volume": "20855436",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-30": {
                            "1. open": "714.715",
                            "2. high": "731.0",
                            "3. low": "712.73",
                            "4. close": "730.91",
                            "5. adjusted close": "730.91",
                            "6. volume": "18604220",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-27": {
                            "1. open": "705.0",
                            "2. high": "715.0",
                            "3. low": "702.1001",
                            "4. close": "711.92",
                            "5. adjusted close": "711.92",
                            "6. volume": "13833763",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-26": {
                            "1. open": "708.31",
                            "2. high": "715.4",
                            "3. low": "697.6201",
                            "4. close": "701.16",
                            "5. adjusted close": "701.16",
                            "6. volume": "13214292",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-25": {
                            "1. open": "707.03",
                            "2. high": "716.97",
                            "3. low": "704.0",
                            "4. close": "711.2",
                            "5. adjusted close": "711.2",
                            "6. volume": "12645562",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-24": {
                            "1. open": "710.68",
                            "2. high": "715.22",
                            "3. low": "702.64",
                            "4. close": "708.49",
                            "5. adjusted close": "708.49",
                            "6. volume": "13083071",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-23": {
                            "1. open": "685.442",
                            "2. high": "712.1299",
                            "3. low": "680.7505",
                            "4. close": "706.3",
                            "5. adjusted close": "706.3",
                            "6. volume": "20264859",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-20": {
                            "1. open": "682.85",
                            "2. high": "692.1299",
                            "3. low": "673.7",
                            "4. close": "680.26",
                            "5. adjusted close": "680.26",
                            "6. volume": "14841865",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-19": {
                            "1. open": "678.21",
                            "2. high": "686.55",
                            "3. low": "667.59",
                            "4. close": "673.47",
                            "5. adjusted close": "673.47",
                            "6. volume": "14313486",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-18": {
                            "1. open": "669.7479",
                            "2. high": "695.77",
                            "3. low": "669.35",
                            "4. close": "688.99",
                            "5. adjusted close": "688.99",
                            "6. volume": "20349375",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-17": {
                            "1. open": "672.66",
                            "2. high": "674.58",
                            "3. low": "648.84",
                            "4. close": "665.71",
                            "5. adjusted close": "665.71",
                            "6. volume": "23721279",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-16": {
                            "1. open": "705.07",
                            "2. high": "709.5",
                            "3. low": "676.4",
                            "4. close": "686.17",
                            "5. adjusted close": "686.17",
                            "6. volume": "23103303",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-13": {
                            "1. open": "723.71",
                            "2. high": "729.9",
                            "3. low": "714.34",
                            "4. close": "717.17",
                            "5. adjusted close": "717.17",
                            "6. volume": "16671844",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-12": {
                            "1. open": "706.34",
                            "2. high": "722.8",
                            "3. low": "699.4",
                            "4. close": "722.25",
                            "5. adjusted close": "722.25",
                            "6. volume": "17681686",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-11": {
                            "1. open": "712.71",
                            "2. high": "715.18",
                            "3. low": "704.21",
                            "4. close": "707.82",
                            "5. adjusted close": "707.82",
                            "6. volume": "9800558",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-10": {
                            "1. open": "713.99",
                            "2. high": "716.59",
                            "3. low": "701.88",
                            "4. close": "709.99",
                            "5. adjusted close": "709.99",
                            "6. volume": "13432305",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-09": {
                            "1. open": "710.17",
                            "2. high": "719.03",
                            "3. low": "705.13",
                            "4. close": "713.76",
                            "5. adjusted close": "713.76",
                            "6. volume": "14715349",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-06": {
                            "1. open": "711.9",
                            "2. high": "716.33",
                            "3. low": "697.63",
                            "4. close": "699.1",
                            "5. adjusted close": "699.1",
                            "6. volume": "15623049",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-05": {
                            "1. open": "716.0",
                            "2. high": "720.9499",
                            "3. low": "711.41",
                            "4. close": "714.63",
                            "5. adjusted close": "714.63",
                            "6. volume": "12919637",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-04": {
                            "1. open": "711.0",
                            "2. high": "724.9",
                            "3. low": "708.93",
                            "4. close": "710.92",
                            "5. adjusted close": "710.92",
                            "6. volume": "17002647",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-03": {
                            "1. open": "719.0",
                            "2. high": "722.65",
                            "3. low": "701.01",
                            "4. close": "709.74",
                            "5. adjusted close": "709.74",
                            "6. volume": "21620253",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-08-02": {
                            "1. open": "700.0",
                            "2. high": "726.94",
                            "3. low": "698.4",
                            "4. close": "709.67",
                            "5. adjusted close": "709.67",
                            "6. volume": "33615765",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-30": {
                            "1. open": "671.758",
                            "2. high": "697.53",
                            "3. low": "669.0",
                            "4. close": "687.2",
                            "5. adjusted close": "687.2",
                            "6. volume": "29656411",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-29": {
                            "1. open": "649.79",
                            "2. high": "683.69",
                            "3. low": "648.8",
                            "4. close": "677.35",
                            "5. adjusted close": "677.35",
                            "6. volume": "29688446",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-28": {
                            "1. open": "646.995",
                            "2. high": "654.9699",
                            "3. low": "639.4001",
                            "4. close": "646.98",
                            "5. adjusted close": "646.98",
                            "6. volume": "16006596",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-27": {
                            "1. open": "663.4",
                            "2. high": "666.5",
                            "3. low": "627.24",
                            "4. close": "644.78",
                            "5. adjusted close": "644.78",
                            "6. volume": "32813290",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-26": {
                            "1. open": "650.97",
                            "2. high": "668.1999",
                            "3. low": "647.11",
                            "4. close": "657.62",
                            "5. adjusted close": "657.62",
                            "6. volume": "25336556",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-23": {
                            "1. open": "646.36",
                            "2. high": "648.8",
                            "3. low": "637.3001",
                            "4. close": "643.38",
                            "5. adjusted close": "643.38",
                            "6. volume": "14604944",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-22": {
                            "1. open": "656.4428",
                            "2. high": "662.17",
                            "3. low": "644.6001",
                            "4. close": "649.26",
                            "5. adjusted close": "649.26",
                            "6. volume": "15105727",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-21": {
                            "1. open": "659.61",
                            "2. high": "664.8599",
                            "3. low": "650.2901",
                            "4. close": "655.29",
                            "5. adjusted close": "655.29",
                            "6. volume": "13953338",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-20": {
                            "1. open": "651.99",
                            "2. high": "662.3916",
                            "3. low": "640.501",
                            "4. close": "660.5",
                            "5. adjusted close": "660.5",
                            "6. volume": "15487127",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-19": {
                            "1. open": "629.89",
                            "2. high": "647.1999",
                            "3. low": "621.29",
                            "4. close": "646.22",
                            "5. adjusted close": "646.22",
                            "6. volume": "21297090",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-16": {
                            "1. open": "654.68",
                            "2. high": "656.6999",
                            "3. low": "642.2",
                            "4. close": "644.22",
                            "5. adjusted close": "644.22",
                            "6. volume": "16370970",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-15": {
                            "1. open": "658.39",
                            "2. high": "666.14",
                            "3. low": "637.88",
                            "4. close": "650.6",
                            "5. adjusted close": "650.6",
                            "6. volume": "20209571",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-14": {
                            "1. open": "670.75",
                            "2. high": "678.6099",
                            "3. low": "652.84",
                            "4. close": "653.38",
                            "5. adjusted close": "653.38",
                            "6. volume": "21641190",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-13": {
                            "1. open": "686.32",
                            "2. high": "693.28",
                            "3. low": "666.2958",
                            "4. close": "668.54",
                            "5. adjusted close": "668.54",
                            "6. volume": "20966092",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-12": {
                            "1. open": "662.2",
                            "2. high": "687.24",
                            "3. low": "662.161",
                            "4. close": "685.7",
                            "5. adjusted close": "685.7",
                            "6. volume": "25927042",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-09": {
                            "1. open": "653.185",
                            "2. high": "658.91",
                            "3. low": "644.69",
                            "4. close": "656.95",
                            "5. adjusted close": "656.95",
                            "6. volume": "18140548",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-08": {
                            "1. open": "628.37",
                            "2. high": "654.43",
                            "3. low": "620.46",
                            "4. close": "652.81",
                            "5. adjusted close": "652.81",
                            "6. volume": "22773316",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-07": {
                            "1. open": "664.27",
                            "2. high": "665.7",
                            "3. low": "638.32",
                            "4. close": "644.65",
                            "5. adjusted close": "644.65",
                            "6. volume": "18791960",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-06": {
                            "1. open": "681.7115",
                            "2. high": "684.0",
                            "3. low": "651.4002",
                            "4. close": "659.58",
                            "5. adjusted close": "659.58",
                            "6. volume": "23284450",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-02": {
                            "1. open": "678.98",
                            "2. high": "700.0",
                            "3. low": "673.26",
                            "4. close": "678.9",
                            "5. adjusted close": "678.9",
                            "6. volume": "27097374",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-07-01": {
                            "1. open": "683.92",
                            "2. high": "687.99",
                            "3. low": "672.8",
                            "4. close": "677.92",
                            "5. adjusted close": "677.92",
                            "6. volume": "18634522",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-30": {
                            "1. open": "679.77",
                            "2. high": "692.81",
                            "3. low": "678.14",
                            "4. close": "679.7",
                            "5. adjusted close": "679.7",
                            "6. volume": "18924862",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-29": {
                            "1. open": "684.65",
                            "2. high": "687.5099",
                            "3. low": "675.89",
                            "4. close": "680.76",
                            "5. adjusted close": "680.76",
                            "6. volume": "17381313",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-28": {
                            "1. open": "671.64",
                            "2. high": "694.6999",
                            "3. low": "670.32",
                            "4. close": "688.72",
                            "5. adjusted close": "688.72",
                            "6. volume": "21628159",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-25": {
                            "1. open": "689.58",
                            "2. high": "693.81",
                            "3. low": "668.7",
                            "4. close": "671.87",
                            "5. adjusted close": "671.87",
                            "6. volume": "32496707",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-24": {
                            "1. open": "674.99",
                            "2. high": "697.62",
                            "3. low": "667.61",
                            "4. close": "679.82",
                            "5. adjusted close": "679.82",
                            "6. volume": "45982386",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-23": {
                            "1. open": "632.0",
                            "2. high": "657.204",
                            "3. low": "630.04",
                            "4. close": "656.57",
                            "5. adjusted close": "656.57",
                            "6. volume": "31099228",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-22": {
                            "1. open": "618.25",
                            "2. high": "628.5693",
                            "3. low": "615.5",
                            "4. close": "623.71",
                            "5. adjusted close": "623.71",
                            "6. volume": "19158892",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-21": {
                            "1. open": "624.48",
                            "2. high": "631.39",
                            "3. low": "608.88",
                            "4. close": "620.83",
                            "5. adjusted close": "620.83",
                            "6. volume": "24812741",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-18": {
                            "1. open": "613.37",
                            "2. high": "628.35",
                            "3. low": "611.8",
                            "4. close": "623.31",
                            "5. adjusted close": "623.31",
                            "6. volume": "24560905",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-17": {
                            "1. open": "601.8878",
                            "2. high": "621.47",
                            "3. low": "601.34",
                            "4. close": "616.6",
                            "5. adjusted close": "616.6",
                            "6. volume": "22701350",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-16": {
                            "1. open": "597.535",
                            "2. high": "608.5",
                            "3. low": "593.5",
                            "4. close": "604.87",
                            "5. adjusted close": "604.87",
                            "6. volume": "21845739",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-15": {
                            "1. open": "616.69",
                            "2. high": "616.79",
                            "3. low": "598.23",
                            "4. close": "599.36",
                            "5. adjusted close": "599.36",
                            "6. volume": "17764145",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-14": {
                            "1. open": "612.23",
                            "2. high": "625.49",
                            "3. low": "609.18",
                            "4. close": "617.69",
                            "5. adjusted close": "617.69",
                            "6. volume": "20423983",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-11": {
                            "1. open": "610.23",
                            "2. high": "612.56",
                            "3. low": "601.52",
                            "4. close": "609.89",
                            "5. adjusted close": "609.89",
                            "6. volume": "16205303",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-10": {
                            "1. open": "603.88",
                            "2. high": "616.59",
                            "3. low": "600.5",
                            "4. close": "610.12",
                            "5. adjusted close": "610.12",
                            "6. volume": "23919606",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-09": {
                            "1. open": "602.17",
                            "2. high": "611.79",
                            "3. low": "597.6301",
                            "4. close": "598.78",
                            "5. adjusted close": "598.78",
                            "6. volume": "16584566",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-08": {
                            "1. open": "623.01",
                            "2. high": "623.09",
                            "3. low": "595.5",
                            "4. close": "603.59",
                            "5. adjusted close": "603.59",
                            "6. volume": "26053405",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-07": {
                            "1. open": "591.825",
                            "2. high": "610.0",
                            "3. low": "582.88",
                            "4. close": "605.13",
                            "5. adjusted close": "605.13",
                            "6. volume": "22543682",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-04": {
                            "1. open": "579.71",
                            "2. high": "600.61",
                            "3. low": "577.2",
                            "4. close": "599.05",
                            "5. adjusted close": "599.05",
                            "6. volume": "24036896",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-03": {
                            "1. open": "601.8",
                            "2. high": "604.55",
                            "3. low": "571.22",
                            "4. close": "572.84",
                            "5. adjusted close": "572.84",
                            "6. volume": "30111893",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-02": {
                            "1. open": "620.13",
                            "2. high": "623.36",
                            "3. low": "599.14",
                            "4. close": "605.12",
                            "5. adjusted close": "605.12",
                            "6. volume": "23302779",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-06-01": {
                            "1. open": "627.8",
                            "2. high": "633.8",
                            "3. low": "620.55",
                            "4. close": "623.9",
                            "5. adjusted close": "623.9",
                            "6. volume": "18084890",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-28": {
                            "1. open": "628.5",
                            "2. high": "635.59",
                            "3. low": "622.38",
                            "4. close": "625.22",
                            "5. adjusted close": "625.22",
                            "6. volume": "22737038",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-27": {
                            "1. open": "620.24",
                            "2. high": "631.13",
                            "3. low": "616.21",
                            "4. close": "630.85",
                            "5. adjusted close": "630.85",
                            "6. volume": "26370593",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-26": {
                            "1. open": "607.56",
                            "2. high": "626.17",
                            "3. low": "601.5",
                            "4. close": "619.13",
                            "5. adjusted close": "619.13",
                            "6. volume": "28639305",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-25": {
                            "1. open": "607.31",
                            "2. high": "613.99",
                            "3. low": "595.71",
                            "4. close": "604.69",
                            "5. adjusted close": "604.69",
                            "6. volume": "28005933",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-24": {
                            "1. open": "581.6",
                            "2. high": "614.48",
                            "3. low": "573.65",
                            "4. close": "606.44",
                            "5. adjusted close": "606.44",
                            "6. volume": "34558089",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-21": {
                            "1. open": "596.11",
                            "2. high": "596.68",
                            "3. low": "580.0",
                            "4. close": "580.88",
                            "5. adjusted close": "580.88",
                            "6. volume": "26030595",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-20": {
                            "1. open": "575.0",
                            "2. high": "588.85",
                            "3. low": "571.07",
                            "4. close": "586.78",
                            "5. adjusted close": "586.78",
                            "6. volume": "30821119",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-19": {
                            "1. open": "552.55",
                            "2. high": "566.21",
                            "3. low": "546.98",
                            "4. close": "563.46",
                            "5. adjusted close": "563.46",
                            "6. volume": "39578395",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-18": {
                            "1. open": "568.0",
                            "2. high": "596.25",
                            "3. low": "563.38",
                            "4. close": "577.87",
                            "5. adjusted close": "577.87",
                            "6. volume": "36830567",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-17": {
                            "1. open": "575.5531",
                            "2. high": "589.73",
                            "3. low": "561.2",
                            "4. close": "576.83",
                            "5. adjusted close": "576.83",
                            "6. volume": "32390360",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-14": {
                            "1. open": "583.41",
                            "2. high": "592.87",
                            "3. low": "570.46",
                            "4. close": "589.74",
                            "5. adjusted close": "589.74",
                            "6. volume": "33370856",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-13": {
                            "1. open": "601.545",
                            "2. high": "606.4599",
                            "3. low": "559.65",
                            "4. close": "571.69",
                            "5. adjusted close": "571.69",
                            "6. volume": "44184916",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-12": {
                            "1. open": "602.49",
                            "2. high": "620.41",
                            "3. low": "586.765",
                            "4. close": "589.89",
                            "5. adjusted close": "589.89",
                            "6. volume": "33823646",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-11": {
                            "1. open": "599.24",
                            "2. high": "627.0999",
                            "3. low": "595.6",
                            "4. close": "617.2",
                            "5. adjusted close": "617.2",
                            "6. volume": "46503896",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        },
                        "2021-05-10": {
                            "1. open": "664.9",
                            "2. high": "665.05",
                            "3. low": "627.6101",
                            "4. close": "629.04",
                            "5. adjusted close": "629.04",
                            "6. volume": "31392417",
                            "7. dividend amount": "0.0000",
                            "8. split coefficient": "1.0"
                        }
                    }
                }
            ]
            this.init();
        }

        Destroy() {
            RemoveUIBindings.call(this);
            delete PB.Portfolio;
        }

        init() {
            ApplyUIBindings.call(this);
            fetchData.call(this)
        }
    }

    function ApplyUIBindings() {
        //getTickerPrice.bind(this);
    }

    function RemoveUIBindings() {

    }

    function initChart() {
        //google.charts.load('current', {'packages':['corechart']});
        drawChart.call(this);
    }

    function drawChart() {
        console.log(this.chartData)
        let data = google.visualization.arrayToDataTable([
            [
                "Task",
                "Hours per Day"
            ],
            [
                "LMND",
                76
            ],
            [
                "AAPL",
                154
            ],
            [
                "TSLA",
                754
            ]
        ]);

        let options = {
            title: 'My Portfolio'
        };
        let chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

    function fetchData() {
        let date = new Date();
        let newDate = date.toISOString().split('T')[0]

        for (let i = 0; i < this.tempData.length; i++) {
            let key = this.tempData[i]["Meta Data"]["2. Symbol"];
            let val = this.tempData[i]["Time Series (Daily)"]["2021-09-09"]["4. close"];
            let obj = [key, parseInt(val)];
            this.chartData.push(obj);
        }

        initChart.call(this);

        // let promiseArray = [];
        // for (let i = 0; i < this.tickersToCheck.length; i++) {
        //     let promise = new Promise((resolve, reject) => {
        //         let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.tickersToCheck[i]}&outputsize=compact&apikey=${this.apiKey}`
        //         App.utility.restServiceGet(url).then((data) => {
        //             this.chartData.push(data);
        //             resolve();
        //         }).catch(err => {
        //             console.error(err);
        //             reject();
        //         });
        //     });
        //     promiseArray.push(promise);
        // }
        // Promise.all(promiseArray).then(() => {
        //     console.log(this.chartData);
        // });
    }



    // function getTickerPrice() {
    //     let tickerArr = ['TSLA', 'APPL', 'WMT', 'LMND'];
    //     for (let i = 0 ; i < tickerArr.length; i++) {
    //         $.ajax({
    //             url: `https://finnhub.io/api/v1/quote?symbol=${tickerArr[i]}&token=${this.apiKey}`,
    //             success:function(data){
    //                 console.log(data);
    //             }
    //         });
    //     }
    // }

    return Portfolio;
});

// let allStockChart_X_Values = [];
// let allStockChart_Y_Values = [];
// let walletBalance = 1000;
// let popularSymbols = ['NXE', 'BTG', 'ORLA', 'RMED', 'GOED'];
// let specificStockChart_X_Values = [];
// let specificStockChart_Y_Values = [];
// const APIKey = '1N6SG4GFLF1257TV';
// let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSLA&outputsize=compact&apikey=${APIKey}`;
// $.ajax({
//     url: apiCall,
//     success:function(data){
//         for (var key in data['Time Series (Daily)']) {
//             specificStockChart_X_Values.push(key);
//             specificStockChart_Y_Values.push(data['Time Series (Daily)'][key]['1. open']); 
//         }
//         console.log(specificStockChart_Y_Values)
//     }   
// });