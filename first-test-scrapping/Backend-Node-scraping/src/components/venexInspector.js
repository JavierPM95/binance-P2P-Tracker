const puppeteer = require('puppeteer');

( async () => {
    const navigator = await puppeteer.launch({ headless: false});
    const page = await navigator.newPage()
    try {
        await page.goto('https://www.venex.com.ar');
        
        // Interaccion con el buscador Venex
        await page.waitForSelector('#combos');
        let productToSearch = 'RTX 3060'
        await page.type('#combos', productToSearch)
        
        for (let i = 0; i < productToSearch.length; i++) {
            await page.keyboard.press('ArrowLeft');
        }

        await page.keyboard.down('Shift');
        await page.keyboard.press('ArrowUp')
        await page.keyboard.up('Shift');
        await page.keyboard.press('Backspace')

        await page.click('.input-group-addon')

        await page.waitForSelector('.product-box-body h3.product-box-title');
        // await page.screenshot({ path: 'screenshots/Venex1.jpg' })
        
        //Extraccion de datos
        const extractedData = await page.evaluate(() => {

            const nodeListTitle = document.querySelectorAll('.product-box-title')

            productTitles = []
            for (let i = 0; i < nodeListTitle.length; i++) {
                productTitles.push(nodeListTitle[i].innerText)
            }
            
            const nodeListPrice = document.querySelectorAll('.current-price')

            productPrices = []
            for (let i = 0; i < nodeListPrice.length; i++) {
                productPrices.push(nodeListPrice[i].innerText)
            }

            const productData = productTitles.map((title, i) => {
                return {
                    title: title,
                    price: productPrices[i],
                }
            })

            return productData;
        })
        // let extractedData = await page.evaluate(() => {
        //     const tituloProducto = document.querySelector('.tituloProducto').innerText;
        //     const precioProducto = document.querySelector('.textPrecio').innerText;
        //     return {
        //         producto: tituloProducto,
        //         precio: precioProducto,
        //     }
        // })
        
        console.log(extractedData);
        await navigator.close();
    } catch (error) {
        await navigator.close();
        console.log(error)
    }
}
)()