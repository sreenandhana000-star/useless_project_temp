let total = 0;

const budget = 50000;

function openModal() {
    document.getElementById("expenseModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("expenseModal").style.display = "none";
}


function addExpense(event) {

    event.preventDefault();

    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const category =
        document.getElementById("category").value;


    total += amount;


    // Update total

    document.getElementById("totalExpense")
        .textContent = "₹" + total.toLocaleString("en-IN");


    // Update remaining

    const remaining = budget - total;

    document.getElementById("remaining")
        .textContent = "₹" + remaining.toLocaleString("en-IN");


    // Monthly expense

    document.getElementById("monthlyExpense")
        .textContent = "₹" + total.toLocaleString("en-IN");


    // Chart total

    document.getElementById("chartTotal")
        .textContent = "₹" + total.toLocaleString("en-IN");


    // Budget percentage

    const percentage =
        Math.min((total / budget) * 100, 100);

    document.getElementById("budgetPercent")
        .textContent = Math.round(percentage) + "%";


    document.getElementById("budgetSpent")
        .textContent = "₹" + total.toLocaleString("en-IN");


    // Add table row

    const table =
        document.getElementById("expenseTable");


    const row =
        document.createElement("tr");


    row.innerHTML = `
        <td>${description}</td>

        <td>${category}</td>

        <td>${new Date().toLocaleDateString()}</td>

        <td class="amount">
            ₹${amount.toLocaleString("en-IN")}
        </td>
    `;


    table.prepend(row);


    // Reset form

    document.querySelector("form").reset();

    closeModal();
}
