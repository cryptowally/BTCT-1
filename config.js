{
    "pairs": {
        "poloniex": {
            "BTC_ETH": {
                "strategy": "tssl",
                "override": {}
            }
        },
        "bittrex": {
            "BTC-ETC": {
                "strategy": "tssl",
                "override": {}
            }
        },
        "kraken": {
            "XETHXXBT": {
                "strategy": "tssl",
                "override": {}
            },
            "GNOXBT": {
                "strategy": "tssl",
                "override": {}
            },
            "XXBTZEUR": {
                "strategy": "tssl",
                "override": {}
            }
        },
        "cryptopia": {
            "DOGE_BTC": {
                "strategy": "tssl",
                "override": {}
            }
        },
        "bitfinex": {
            "IOT-BTC": {
                "strategy": "tssl",
                "override": {}
            }
        }
    },
    "strategies": {
        "bb": {
            "NAME": "bb",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tsslbb": {
            "NAME": "tsslbb",
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_RANGE": 0.6,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gain": {
            "NAME": "gain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN": 2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gainbbrsi": {
            "NAME": "gainbbrsi",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_LEVEL": 0.6,
            "RSI_SELL_LEVEL": 70,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsigain": {
            "NAME": "bbrsigain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "RSI_BUY_LEVEL": 30,
            "GAIN": 2,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "pp": {
            "NAME": "pp",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_BUY": 1e-8,
            "PP_SELL": 0.12345678,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "ppbbrsi": {
            "NAME": "ppbbrsi",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "PP_BUY": 1e-8,
            "RSI_SELL_LEVEL": 70,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tsslpp": {
            "NAME": "tsslpp",
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_RANGE": 0.6,
            "PP_SELL": 0.12345678,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsipp": {
            "NAME": "bbrsipp",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "RSI_BUY_LEVEL": 30,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_SELL": 0.12345678,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgain": {
            "NAME": "stepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "BUYLVL": 2,
            "SELLLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tsslstepgain": {
            "NAME": "tsslstepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "BUY_RANGE": 0.6,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tssl": {
            "NAME": "tssl",
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_RANGE": 0.6,
            "SELL_RANGE": 0.6,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tsslgain": {
            "NAME": "tsslgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_RANGE": 0.6,
            "BUY_LEVEL": 0.1,
            "GAIN": 2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsitssl": {
            "NAME": "bbrsitssl",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "RSI_BUY_LEVEL": 30,
            "SELL_RANGE": 0.6,
			"GAIN": 2,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "pptssl": {
            "NAME": "pptssl",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "SELL_RANGE": 0.6,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_BUY": 1e-8,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgaintssl": {
            "NAME": "stepgaintssl",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "SELL_RANGE": 0.6,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "BUYLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gaintssl": {
            "NAME": "gaintssl",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN": 2,
            "SELL_RANGE": 0.6,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbtssl": {
            "NAME": "bbtssl",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "SELL_RANGE": 0.6,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsi": {
            "NAME": "bbrsi",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "RSI_BUY_LEVEL": 30,
            "RSI_SELL_LEVEL": 70,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 1,
            "LOW_BB": 1,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgainbbrsi": {
            "NAME": "stepgainbbrsi",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.6,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "RSI_SELL_LEVEL": 70,
            "BUYLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbbbrsi": {
            "NAME": "bbbbrsi",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_LEVEL": 0.6,
            "RSI_SELL_LEVEL": 70,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "tsslbbrsi": {
            "NAME": "tsslbbrsi",
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "BUY_RANGE": 0.6,
            "RSI_SELL_LEVEL": 70,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "TSSL_TARGET_ONLY": true,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsibb": {
            "NAME": "bbrsibb",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 5,
            "RSI_BUY_LEVEL": 30,
            "GAIN":2,
            "EMA1": 24,
            "EMA2": 12,
            "HIGH_BB": 45,
            "LOW_BB": 45,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbrsistepgain": {
            "NAME": "bbrsistepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "RSI_BUY_LEVEL": 30,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 49,
            "LOW_BB": 49,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbgain": {
            "NAME": "bbgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gainbb": {
            "NAME": "gainbb",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbstepgain": {
            "NAME": "bbstepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgainbb": {
            "NAME": "stepgainbb",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "BUYLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "bbpp": {
            "NAME": "bbpp",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_SELL": 0.12345678,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "ppbb": {
            "NAME": "ppbb",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_BUY": 1e-8,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gainstepgain": {
            "NAME": "gainstepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgaingain": {
            "NAME": "stepgaingain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "BUYLVL": 2,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "gainpp": {
            "NAME": "gainpp",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_SELL": 0.12345678,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "ppgain": {
            "NAME": "ppgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "PP_BUY": 1e-8,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "stepgainpp": {
            "NAME": "stepgainpp",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "BUYLVL1": 0.6,
            "BUYLVL2": 2,
            "BUYLVL3": 70,
            "BUYLVL": 2,
            "PP_SELL": 0.12345678,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        },
        "ppstepgain": {
            "NAME": "ppstepgain",
            "TRADING_LIMIT": 0.001,
            "PERIOD": 15,
            "BUY_LEVEL": 0.1,
            "GAIN":2,
            "EMA1": 16,
            "EMA2": 8,
            "HIGH_BB": 40,
            "LOW_BB": 40,
            "STDV": 2,
            "SMAPERIOD": 50,
            "SELLLVL1": 0.6,
            "SELLLVL2": 2,
            "SELLLVL3": 70,
            "SELLLVL": 2,
            "PP_BUY": 1e-8,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "STOP_LIMIT": 60,
            "BUY_ENABLED": true,
	    "OKKIES_MODE": true,
	    "BTC_MONEY_FLOW": 35,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001,
            "TRADES_TIMEOUT": 600
        }
    },
    "exchanges": {
        "bittrex": {
            "key": "",
            "secret": ""
        },
        "poloniex": {
            "key": "",
            "secret": ""
        },
        "kraken": {
            "key": "",
            "secret": ""
        },
        "cryptopia": {
            "key": "",
            "secret": ""
        },
        "bitfinex": {
            "key": "",
            "secret": ""
        }
    },
    "bot": {
        "debug": false,
        "BOT_DELAY": 1,
	"BOT_CCLEAN": 999,
        "interval_ticker_update": 25000,
        "period_storage_ticker": 2000,
        "timeout_buy": 60000,
        "timeout_sell": 60000,
        "TV_GAIN": 0.6,
        "TV_TRADING_LIMIT_BUY": 0.001,
        "TV_PYRAMID": true,
        "TV_TRADING_LIMIT_SELL": 0.001,
        "TV_PROTECTION": true,
	"TV_TRADING_LIMIT_CAP": 0.9,
	"TV_STOPLOSS_PERCENTAGE": 60,
        "VERBOSE": true,
        "WATCH_MODE": false
    },
    "ws": {
        "port": 5001,
        "clientport": 3000,
        "hostname": "127.0.0.1"
    },
    "imap_listener": {
        "enabled": false,
        "authorized_froms": "[\"noreply@tradingview.com\"]",
        "user": "YOUR_EMAIL_HERE",
        "password": "YOUR_PASSWORD_HERE",
        "host": "imap.gmail.com",
        "port": 993,
        "tls": true,
        "tlsOptions": {
            "rejectUnauthorized": false
        }
    }
}
