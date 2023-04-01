const search = (list, alias) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i].alias === alias) {
			return i;
		}
	}
	return -1;
}

const addAliasTxt = document.getElementById('addAliasTxt');
const addCodeTxt = document.getElementById('addCodeTxt');
const updAliasTxt = document.getElementById('updAliasTxt');
const updCodeTxt = document.getElementById('updCodeTxt');
const delAliasTxt = document.getElementById('delAliasTxt');

let allSnips = [];
chrome.storage.sync.get('allSnips', function (data) {
	allSnips = data.allSnips || [];
})

document.getElementById('addBtn').addEventListener('click', (e) => {
	let sr = search(allSnips, addAliasTxt.value);
	if (sr === -1) {
		allSnips.push({ alias: addAliasTxt.value, code: addCodeTxt.value });
		chrome.storage.sync.set({ 'allSnips': allSnips });
		alert('Added');
	} else {
		alert('Duplicate alias!');
	}
})

document.getElementById('updBtn').addEventListener('click', (e) => {
	let sr = search(allSnips, updAliasTxt.value);
	if (sr !== -1) {
		allSnips[sr].code = updCodeTxt.value;
		chrome.storage.sync.set({ 'allSnips': allSnips });
		alert('Updated');
	} else {
		alert('Alias DNE!');
	}
})

document.getElementById('delBtn').addEventListener('click', (e) => {
	let sr = search(allSnips, delAliasTxt.value);
	if (sr !== -1) {
		allSnips.splice(sr, 1);
		chrome.storage.sync.set({ 'allSnips': allSnips });
		alert('Removed');
	} else {
		alert('Alias DNE!');
	}
})
