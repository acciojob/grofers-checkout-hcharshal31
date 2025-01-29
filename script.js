const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let priceTd = document.getElementsByClassName("price");
	let sum = 0;
	Array.from(priceTd).forEach(item => {
		sum += parseInt(item.innerText) || 0;
	})
  let sumRow = document.createElement("tr");
	sumRow.innerHTML = `
		<td id="total">Total</td>
		<td id="sum">${sum}</td>
	`;
	let table = document.getElementsByTagName("table")[0];
	if(table){
		table.appendChild(sumRow);
	} else {
		console.log("No table exist.");
	}
};

getSumBtn.addEventListener("click", getSum);

