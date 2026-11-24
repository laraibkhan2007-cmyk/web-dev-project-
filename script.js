let expenses = [];

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name == "" || amount <= 0 || !Number.isFinite(amount) || document.getElementById("amount").value == "" || category == "") {
        alert("Please enter valid details");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    showExpenses();
}


function showExpenses() {

    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

        if (filter == "All" || filter == expenses[i].category) {

            let div = document.createElement("div");

            div.className = "expense";

            div.innerHTML = expenses[i].name + " - ₹" +
                expenses[i].amount + " - " +
                expenses[i].category;

            let btn = document.createElement("button");

            btn.innerText = "Delete";
            btn.className = "delete";

            btn.onclick = function() {
                deleteExpense(i);
            };

            div.appendChild(btn);

            list.appendChild(div);
        }
    }

    document.getElementById("total").innerText = total;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
}