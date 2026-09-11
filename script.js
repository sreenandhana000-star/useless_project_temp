let total = 0;

function addExpense() {
    let description = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (description === "" || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    total = total + amount;

    document.getElementById("total").textContent = total;

    let item = document.createElement("li");

    item.textContent =
        description + " - ₹" + amount + " (" + category + ")";

    document.getElementById("expenseList").appendChild(item);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}
