function getInnerText(id) {
    const getInner = document.getElementById(id).innerText;
    return getInner;
}
function getNumber(id) {
    const getNumbers = parseInt(document.getElementById(id).innerText);
    return getNumbers;
}
const historyData = [];
document.getElementById('card-heart-icon-one')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-one')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;

        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling National Emergency Service 999...')
        const historyValue = {
            name: "National Emergency Number",
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        // historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('clear-btn')
    .addEventListener('click', function () {
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
    })
document.getElementById('copy-btn-one')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-one').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-two')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-tow')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;

        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Police Helpline Number 999...')
        const historyValue = {
            name: "Police Helpline Number",
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-two')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-two').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-Three')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-three')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Fire Service Number 999...')
        const historyValue = {
            name: "Fire Service Number",
            number: 999,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-three')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-three').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-four')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-four')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Ambulance Service 1994-999999...')
        const historyValue = {
            name: "Ambulance Service",
            number: '1994-999999',
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-four')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-four').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-five')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-five')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Women & Child Helpline 109...')
        const historyValue = {
            name: "Women & Child Helpline",
            number: 109,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-five')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-five').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-six')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-six')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Anti-Corruption Helpline 106...')
        const historyValue = {
            name: "Anti-Corruption Helpline",
            number: 106,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-six')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-six').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-seven')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-seven')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Electricity Outage 16216...')
        const historyValue = {
            name: "Electricity Outage",
            number: 16216,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-seven')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-seven').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-eignt')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('call-btn-eight')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Brac Helpline 16445...')
        const historyValue = {
            name: "Brac Helpline",
            number: 16445,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })
document.getElementById('copy-btn-eight')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-eight').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('card-heart-icon-nine')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;
        navHeart.innerText = result;
    })
document.getElementById('copy-btn-nine')
    .addEventListener('click', function () {
        const navCopy = document.getElementById('nav-copy');
        const navCopyNumber = parseInt(document.getElementById('nav-copy').innerText);
        console.log(navCopyNumber)
        const hotlineNine = document.getElementById('hotline-nine').innerText;
        navigator.clipboard.writeText(hotlineNine).then(() => {
            alert("Copied: " + hotlineNine)
        })
        const cardCopyOne = 1;
        const result = navCopyNumber + cardCopyOne;
        navCopy.innerText = result;
    })
document.getElementById('call-btn-nine')
    .addEventListener('click', function () {
        const availableCoins = getNumber('available-coins')
        const chargeParCall = 20;
        const result = availableCoins - chargeParCall;
        if (availableCoins < 20) {
            alert("You have no more coins");
            return
        }
        document.getElementById('available-coins').innerText = result;
        alert('Calling Bangladesh Railway 163...')
        const historyValue = {
            name: "Bangladesh Railway",
            number: 163,
            date: new Date().toLocaleTimeString()
        }
        historyData.push(historyValue);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerText = "";
        for (const data of historyData) {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="flex justify-between items-center rounded-[8px] bg-[#FAFAFA] p-4 mt-4 mb-3 shadow-md">
                        <div>
                            <h2 class="font-semibold text-[18px] text-black">${data.name}</h2>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <div>
                            <h1 class="text-[18px] text-black">${data.date}</h1>
                        </div>
                    </div>
                `
            historyContainer.appendChild(div);
            return
        }
    })