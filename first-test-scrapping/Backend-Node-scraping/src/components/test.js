const texts = [
    "Banco Brubank",
    "Transferencia bancar...",
    "Banco Brubank\nUala",
    "Transferencia bancar...\nUala",
    "Banco Brubank\nUala",
    "Transferencia Bancar...\nTransferencia bancar...",
    "Transferencia bancar...\nMercadopago",
    "Transferencia bancar...\nMercadopago\nUala",
    "Transferencia bancar...\nMercadopago",
    "Transferencia bancar...\nUala"
];

const vendors = [
    "igorsenamed",
    "Arruda",
    "PentaKoren",
    "Deremi",
    "Yair",
    "lala123",
    "Drsilva",
    "mr trade",
    "Ivi",
    "jeronimo14"
]

let allTexts = [];
for (text of texts) {
    const arrayText = text.split('\n')
    // if (arrayText.length >= 2) {
    //     // const arrayLength = arrayText.length;
    //     arrayText.forEach((simpleText) => {
    //         allTexts.push(simpleText)
    //     })
    // } else {
        allTexts.push(arrayText)
    // }
    // allTexts.push(text);
}

// console.log(allTexts);

const data = vendors.map((vendor, i) => {
    return {
        vendor: vendor,
        bank: allTexts[i]
    }
})

console.log(data)