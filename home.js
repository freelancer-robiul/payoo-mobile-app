function getElement(id) {
  let newElement = document.getElementById(id);
  return newElement;
}

// Home Page to Login page
getElement("btn-logout").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Featured Toggle
getElement("add-money").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("add-money-form").style.display = "block";
});

getElement("cash-out").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("cash-out-form").style.display = "block";
});

getElement("transfer-money").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("transfer-money-form").style.display = "block";
});

getElement("get-bonus").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("get-bonus-form").style.display = "block";
});

getElement("pay-bill").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("pay-bill-form").style.display = "block";
});

getElement("transaction-money").addEventListener("click", function () {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  getElement("transaction-history-form").style.display = "block";
});

// Add Money Button
getElement("btn-add-money").addEventListener("click", function () {
  let mainBalance = Number(getElement("main-balance").innerText);
  let inputAddAmount = Number(getElement("input-add-amount").value);
  let bankAccountNumber = 11223344556;
  let pinNum = 22331;
  let accountNumber = Number(getElement("input-account-number").value);
  let pinNumber = Number(getElement("pin-number").value);
  let selectBank = getElement("select-bank").value;
  let addMoneyH1 = getElement("add-moneyH1").innerText;

  if (selectBank === "") {
    return alert("Please select a Bank");
  } else {
    getElement("select-bank").value = "";
  }

  // Bank Account Number
  if (accountNumber !== bankAccountNumber) {
    alert("Please use this Account Number: 11223344556");
    getElement("input-account-number").value = "";
    return;
  } else {
    getElement("input-account-number").value = "";
  }

  // Dynamic Balance
  if (inputAddAmount <= 0) {
    alert("Input Valid Amount");
    getElement("input-add-amount").value = "";
    return;
  } else {
    let currentBalance = mainBalance + inputAddAmount;

    getElement("main-balance").innerText = currentBalance;
    getElement("input-add-amount").value = "";
  }

  // Pin Number
  if (pinNumber !== pinNum) {
    alert("Please use this Pin Number: 22331");
    getElement("pin-number").value = "";
    return;
  } else {
    getElement("pin-number").value = "";
  }

  // Time set ==========
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedTime =
    days[now.getDay()] + " " + hours + "." + minutes + " " + ampm;

  // Card Add to transaction div
  let transactionContainer = getElement("transaction-history-form");
  let newCardElement = document.createElement("div");
  newCardElement.innerHTML = `

      <div
        class="update-div flex justify-between items-center bg-white p-[20px] rounded-lg mb-[16px]"
      >
        <div class="flex items-center">
          <div
            class="bg-[#F4F5F7] p-[8px] rounded-full w-[45px] h-[45px] flex justify-center items-center"
          >
            <img src="./images/wallet1.png" alt="" />
          </div>
          <div class="content ml-[15px] text-[14px]">
            <h1 class="font-bold text-[16px]">${addMoneyH1} - ${inputAddAmount} TK.</h1>
            <p class="text-gray-500">${formattedTime}</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical text-[22px]"></i>
        </div>
      </div>
      
      `;
  transactionContainer.append(newCardElement);
});

// Withdraw Money Button =========================================
getElement("btn-cashout-money").addEventListener("click", function () {
  let mainBalance = Number(getElement("main-balance").innerText);
  let inputWithdrawAmount = Number(getElement("input-withdraw-money").value);
  let AgentNumber = 11223344556;
  let pinNum = 22331;
  let accountNumber = Number(getElement("withdraw-account").value);
  let withdrawPinNumber = Number(getElement("withdraw-pin-number").value);
  let cashOutH1 = getElement("cash-outH1").innerText;

  // Agent Account Number
  if (accountNumber !== AgentNumber) {
    alert("Please use this Account Number: 11223344556");
    getElement("withdraw-account").value = "";
    return;
  } else {
    getElement("withdraw-account").value = "";
  }

  // Dynamic Balance
  if (inputWithdrawAmount <= 0 || inputWithdrawAmount > mainBalance) {
    alert("Input Valid Amount");
    getElement("input-withdraw-money").value = "";
    return;
  } else {
    let currentBalance = mainBalance - inputWithdrawAmount;

    getElement("main-balance").innerText = currentBalance;
    getElement("input-withdraw-money").value = "";
  }

  // Pin Number
  if (withdrawPinNumber !== pinNum) {
    alert("Please use this Pin Number: 22331");
    getElement("withdraw-pin-number").value = "";
    return;
  } else {
    getElement("withdraw-pin-number").value = "";
  }

  // Time set ==========
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedTime =
    days[now.getDay()] + " " + hours + "." + minutes + " " + ampm;

  // Card Add to transaction div
  let transactionContainer = getElement("transaction-history-form");
  let newCardElement = document.createElement("div");
  newCardElement.innerHTML = `

      <div
        class="update-div flex justify-between items-center bg-white p-[20px] rounded-lg mb-[16px]"
      >
        <div class="flex items-center">
          <div
            class="bg-[#F4F5F7] p-[8px] rounded-full w-[45px] h-[45px] flex justify-center items-center"
          >
            <img src="./images/wallet1.png" alt="" />
          </div>
          <div class="content ml-[15px] text-[14px]">
            <h1 class="font-bold text-[16px]">${cashOutH1} - ${inputWithdrawAmount} TK.</h1>
            <p class="text-gray-500">${formattedTime}</p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical text-[22px]"></i>
        </div>
      </div>
      
      `;
  transactionContainer.append(newCardElement);
});
