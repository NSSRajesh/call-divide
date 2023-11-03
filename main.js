function operation(num1,num2,num){
	return num(num1,num2)
}
operation("10","5",divide)

function divide(num1,num2){
	let num3=num1%num2;
	document.write(num3);
}