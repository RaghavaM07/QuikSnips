# <p style="text-align: center">Quik Snips</p>

<div align="center">
	<img src="icons/icon128.png">
</div>
	<hr>

Quik Snips is a Chrome extension built to simplify working on writing long texts. It helps you to copy pre-saved snippets of text/code quickening your job.

Originally intended to copy code snippets of user-defined functions in online code editors like those of LeetCode/GeeksForGeeks. I mean, that question was only a simple modification of the binary search problem!

# Installation

The extension is currently unpublished, so only way to install it is throughthe developer mode of the Google Chrome Extensions page.

1. Clone this repository to an easily navigable location.
2. Visit `chrome://extensions/` on your Google Chrome.
3. On the top right corner of the page (right end of the nav bar), turn on `Developer Options`.
4. Select the `Load unpacked` option and locate the folder that contains the `manifest.json` file.
5. Click on the extension icon of Chrome and pin the extension.

# Features

All the basic operations possible with the extension are displayed on the **_Options_** page of the extension, accessed by right clicking on the icon and selecting _Options_ entry.

## Adding a new snippet

All you need to create a new snippet are 2 things:

1. a unique alias to identify the snippet (like `binary search`, `dfs` etc.)
2. the snippet text. It can be a multi-line string too, for obvious reasons.

> **Note:** On entering a duplicate alias, you are alerted that the alias already exists and hence you have entered a duplicate alias. To edit a snippet, please see the next feature, _Editing a snippet_.

## Editing a snippet

The extension supports editing of previously defined snippets. All you need to do is enter the old snippet name and the new snippet code. The extension can be used to obtain the previously saved snippet text if the need be.

## Deleting a snippet

Snippet deletion needs only the alias of the snippet.
