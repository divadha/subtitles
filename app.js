(function init() {
	document.getElementById("showData").addEventListener("click", loadData);
})();

function loadData() {
	let data = document.getElementById('data').value;
	if (data == '') {
		alert("The textarea doesn't have text");
		return;
	}
	let text = '<ul class="list-group pl-5 pr-5">';
	data = data.split('\n');
	let style = true;
	let counter = 0;
	for (let line of data) {
		if (line.length > 0) {
			counter++;
			text += '<p class="list-group-item list-group-item-' + (style ? 'warning' : 'info') + ' pl-5">' + counter + '.-&emsp;' + line + '</p>';
			style = !style;
		}
	}
	text += '</ul>';
	document.getElementById('text').innerHTML = text;
}
