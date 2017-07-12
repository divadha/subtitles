(function init() {
	document.getElementById("showData").addEventListener("click", loadData);
})();

function loadData() {
	let data = document.getElementById('data').value;
	if (data == '') {
		alert("The textarea doesn't have text");
		return;
	}
	let text = '';
	data = data.split('\n');
	for (let line of data) {
		text += '<br>' + line;
	}
	document.getElementById('text').innerHTML = text;
}
