const copyCode = async (alias, code) => {
	await navigator.clipboard.writeText(code);
	document.getElementById('messageSpan').innerText = `Copied ${alias}!`;
}

const getCard = (alias, code) => {
	let li = document.createElement('li');
	let div = document.createElement('div');
	div.classList.add('card');
	div.onclick = () => copyCode(alias, code);
	let p = document.createElement('p');
	p.textContent = alias;
	div.append(p);
	li.append(div);
	return li;
}

const searchBox = document.getElementById('searchBox');
const snippetList = document.getElementById('snippetList');

let allSnips = [];
chrome.storage.sync.get('allSnips', function (data) {
	allSnips = data.allSnips || [];
	if (allSnips.length === 0) {
		snippetList.innerHTML = '<h2>No snips yet!</h2>';
	}
	else {
		for (let i = 0; i < allSnips.length; i++) {
			snippetList.append(getCard(allSnips[i].alias, allSnips[i].code));
		}
	}
})

searchBox.addEventListener('keyup', (e) => {
	snippetList.replaceChildren();
	const st = searchBox.value;
	for (let i = 0; i < allSnips.length; i++) {
		if (allSnips[i].alias.includes(st)) {
			snippetList.append(getCard(allSnips[i].alias, allSnips[i].code));
		}
	}
});
