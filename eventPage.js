const search = (list, alias) => {
	for (let i = 0; i < list.length; i++) {
		if (list[i].alias === alias) {
			return i;
		}
	}
	return -1;
}

const contextMenuItem = {
	id: 'addSnippet',
	title: 'Save selection as new snippet',
	contexts: ['selection']
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
	let allSnips = [];
	chrome.storage.sync.get('allSnips', function (data) {
		allSnips = data.allSnips || [];
		if (clickData.menuItemId === contextMenuItem.id && clickData.selectionText) {
			let alias = prompt('Enter an alias for the new snippet');
			let sr = search(allSnips, alias);
			if (sr === -1) {
				allSnips.push({ alias, code: clickData.selectionText });
				chrome.storage.sync.set({ 'allSnips': allSnips });
				alert('Added');
			} else {
				alert('Duplicate alias!');
			}
		}
	})
});
