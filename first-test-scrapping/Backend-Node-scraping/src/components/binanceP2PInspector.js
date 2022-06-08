const puppeteer = require('puppeteer');

const binanceInspector = async () => {
    const navigator = await puppeteer.launch({ headless: false });
    const page = await navigator.newPage();
    await page.setViewport({
        width: 1080,
        height: 720,
    });
    try {
        await page.goto('https://c2c.binance.com/es')

        // ## Interaccion Binance ##
        // Setear Moneda Argentina
        await page.waitForSelector('#ARS')
        await page.click('#C2Cfiatfilter_searhbox_fiat');
        let monedaSeleccionada = 'ARS';
        await page.click(`#${monedaSeleccionada}`)
        await page.waitForTimeout(10000)
        await page.waitForSelector('.css-1m1f8hn');

        // Extraccion de Datos
        const extractedDataBuy = await page.evaluate(() => {
            let vendors = [];
            const nodeListVendors = document.querySelectorAll('.css-1rhb69f');
            for (nodeListVendor of nodeListVendors) {
                vendors.push(nodeListVendor.innerText.split('\n')[1])
            }

            let completedOrders = [];
            const nodeListCompletedOrders = document.querySelectorAll('.css-1a0u4z7');
            for (nodeListCompletedOrder of nodeListCompletedOrders) {
                completedOrders.push(nodeListCompletedOrder.innerText
                    // .match(/\d+/g)[0]
                    )
            }

            let reliabilities = [];
            const nodeListReliabilities = document.querySelectorAll('.css-19crpgd');
            for (nodeListReliability of nodeListReliabilities) {
                reliabilities.push(nodeListReliability.innerText
                    // .match(/\d+/g)
                    )
            }

            let prices = [];
            const nodeListPrices = document.querySelectorAll('.css-1m1f8hn');
            for (nodeListPrice of nodeListPrices) {
                prices.push(nodeListPrice.innerText)
            }

            let paymentMethods = [];
            const nodeListPaymentMethods = document.querySelectorAll('.css-tlcbro');
            for (nodeListPaymentMethod of nodeListPaymentMethods) {
                paymentMethods.push(nodeListPaymentMethod.innerText.split('\n'))
            }                

            const infoData = vendors.map((vendor, i) => (
                {
                    vendor: vendor,
                    completedOrders: completedOrders[i],
                    reliabilities: reliabilities[i],
                    prices: prices[i],
                    paymentMethods: paymentMethods[i],
                }
            ))

            return infoData
        })

        await page.click('.css-yxrkwa');
        await page.waitForTimeout(10000)


        const extractedDataSell = await page.evaluate(() => {
            let vendors = [];
            const nodeListVendors = document.querySelectorAll('.css-1rhb69f');
            for (nodeListVendor of nodeListVendors) {
                vendors.push(nodeListVendor.innerText.split('\n')[1])
            }

            let completedOrders = [];
            const nodeListCompletedOrders = document.querySelectorAll('.css-1a0u4z7');
            for (nodeListCompletedOrder of nodeListCompletedOrders) {
                completedOrders.push(nodeListCompletedOrder.innerText
                    // .match(/\d+/g)[0]
                    )
            }

            let reliabilities = [];
            const nodeListReliabilities = document.querySelectorAll('.css-19crpgd');
            for (nodeListReliability of nodeListReliabilities) {
                reliabilities.push(nodeListReliability.innerText
                    // .match(/\d+/g)
                    )
            }

            let prices = [];
            const nodeListPrices = document.querySelectorAll('.css-1m1f8hn');
            for (nodeListPrice of nodeListPrices) {
                prices.push(nodeListPrice.innerText)
            }

            let paymentMethods = [];
            const nodeListPaymentMethods = document.querySelectorAll('.css-tlcbro');
            for (nodeListPaymentMethod of nodeListPaymentMethods) {
                paymentMethods.push(nodeListPaymentMethod.innerText.split('\n'))
            }                

            const infoData = vendors.map((vendor, i) => (
                {
                    vendor: vendor,
                    completedOrders: completedOrders[i],
                    reliabilities: reliabilities[i],
                    prices: prices[i],
                    paymentMethods: paymentMethods[i],
                }
            ))

            return infoData
        })

        // console.log('1',[ extractedDataBuy , extractedDataSell ])
        await navigator.close()
        
        return [extractedDataBuy , extractedDataSell]
    } catch (error) {
        await navigator.close()
        console.error(error);
    }
}

module.exports = binanceInspector().then( res => res)