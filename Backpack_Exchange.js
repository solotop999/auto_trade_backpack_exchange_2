
/////// Setting here ///////
const number = 1000; // total number buy/sell
const minSleep = 10; // 10s
const maxSleep = 30; // 30s
///////////////////////////

let count = 0;
let totalBuy = 0;
let totalSell = 0;
clear()
console.log("\n__________START__________\n");

if (document.getElementsByClassName("border-b-2 border-accentBlue")[3].textContent !== 'Market'){
    console.log(" - Click Market trade")
    document.getElementsByClassName("flex flex-col cursor-pointer justify-center py-2")[9].click()
}

const Start = async () => {
    console.log('--------------------------')
    console.log(`Total: Buy: ${totalBuy}  |  Sell: ${totalSell}`)
    let trade_btn = document.getElementsByClassName('border-b-baseBorderMed')[0];

    console.log(` - Click tab: ${trade_btn.textContent}`);// buy/sell button
    trade_btn.click();
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(` - Click button: ${document.getElementsByClassName('bg-baseBackgroundL1')[3].textContent}`); //max button
    document.getElementsByClassName('bg-baseBackgroundL1')[3].click(); 
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log(`   === ${trade_btn.textContent} ===`);
    if (trade_btn.textContent === 'Buy'){
        document.getElementsByClassName('bg-greenPrimaryButtonBackground ')[0].click() // Start Buy
        totalBuy++
    } else {
        document.getElementsByClassName('bg-redPrimaryButtonBackground')[0].click() // Start sell
        totalSell++
    }

    const randomNumber = Math.floor(Math.random() * (maxSleep - minSleep + 1)) + minSleep; 
    console.log(` - Waiting: ${randomNumber}s ...`);
    await new Promise(resolve => setTimeout(resolve, randomNumber * 1000));
    
    count++;

    if (count < number) {
        console.clear()
        await Start();
    }
}

Start();
