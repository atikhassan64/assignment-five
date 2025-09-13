// Get element by Id innertext
function getInnerText(id) {
    const getInner = document.getElementById(id).innerText;
    return getInner;
}
// Get element by Id Number value 
function getNumber(id) {
    const getNumbers = parseInt(document.getElementById(id).innerText);
    return getNumbers;
}

// for all cards 
const historyData = [];




// card-1
// heart 1 growth------------------------------------------
document.getElementById('card-heart-icon-one')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })

// call button-1
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-2
// heart 2 growth------------------------------------------
document.getElementById('card-heart-icon-two')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })


// call button-2
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-3
// heart 3 growth------------------------------------------
document.getElementById('card-heart-icon-Three')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })


// call button-3
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-4
// heart 4 growth------------------------------------------
document.getElementById('card-heart-icon-four')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })

// call button-4
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-5
// heart 5 growth------------------------------------------
document.getElementById('card-heart-icon-five')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })


// call button-5
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-6
// heart 6 growth------------------------------------------
document.getElementById('card-heart-icon-six')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })


// call button-6
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-7
// heart 7 growth------------------------------------------
document.getElementById('card-heart-icon-seven')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })

// call button-7
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-8
// heart 8 growth------------------------------------------
document.getElementById('card-heart-icon-eignt')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })

// call button-8
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

        // history 
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
        }



    })
// --------------------------------------------------------------

// card-9
// heart 9 growth------------------------------------------
document.getElementById('card-heart-icon-nine')
    .addEventListener('click', function () {
        const navHeart = document.getElementById('nav-heart');
        const navHeartNumber = getNumber('nav-heart');
        const cardHeartIconOne = 1;
        const result = navHeartNumber + cardHeartIconOne;

        navHeart.innerText = result;
    })


// call button-9
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

        // history 
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
        }



    })
// --------------------------------------------------------------










// This section for Clear button 

document.getElementById('clear-btn')
    .addEventListener('click', function(){
        document.getElementById('history-container').style.display = "none";
        historyData.style.display = "block";
        
    })