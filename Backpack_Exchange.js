const number = 100,
    minSleep = 10,
    maxSleep = 30;
let count = 0,
    totalBuy = 0,
    totalSell = 0;

clear();
console.log("\n__________START__________\n");

const delay = (e) => new Promise((t) => setTimeout(t, e));

const click_max = () => {
    const e = document.getElementsByClassName(
        "bg-accent-blue top-0.5 h-3.5 w-3.5 cursor-grab rounded-full"
    )[0];

    if (e) {
        const t = e.getBoundingClientRect().left;
        e.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, clientX: t }));
        e.dispatchEvent(
            new PointerEvent("pointermove", { bubbles: true, clientX: 0.95 * window.innerWidth })
        );
        e.dispatchEvent(
            new PointerEvent("pointerup", { bubbles: true, clientX: 0.95 * window.innerWidth })
        );
    } else {
        console.error("Element not found.");
    }
};

const orderMenu = document.getElementsByClassName("items-center justify-center flex-row flex gap-2 gap-x-0")[0];

if (orderMenu) {
    const e = Array.from(orderMenu.children).find((e) => e.textContent.trim() === "Market");
    if (e) {
        console.log("Click Market order", e);
        e.click();
    } else {
        console.log("Market button not found.");
    }
} else {
    console.log("orderMenu element not found.");
}

const Start = async () => {
    console.log("--------------------------");
    console.log(`Total: Buy: ${totalBuy}  |  Sell: ${totalSell}`);

    let e = document.getElementsByClassName("w-full rounded-xl text-sm font-semibold"),
        t = e[0],
        o = e[1];

    t.click();
    await delay(2000);
    click_max();
    await delay(2000);
    console.log(" - Click: BUY");

    let l = document.getElementsByClassName(
        "text-center font-semibold focus:ring-blue-200 bg-green-primary-button-background text-green-primary-button-text"
    )[0];

    try {
        l.click();
        totalBuy++;
    } catch (e) {
        console.log("ERROR: BUY: ", e);
    }

    await delay(5000);
    o.click();
    await delay(2000);
    click_max();
    await delay(2000);
    console.log(" - Click: SELL");

    let n = document.getElementsByClassName(
        "text-center font-semibold bg-red-primary-button-background text-red-primary-button-text"
    )[0];

    try {
        n.click();
        totalSell++;
    } catch (e) {
        console.log("ERROR: SELL: ", e);
    }

    const c = Math.floor(Math.random() * (maxSleep - minSleep + 1)) + minSleep;
    console.log(` - Waiting: ${c}s ...`);
    await delay(2000 * c);
    count++;

    if (count < number) {
        console.clear();
        await Start();
    }
};

Start();
