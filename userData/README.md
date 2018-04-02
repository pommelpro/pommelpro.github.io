To run this code on a local host you only need to type in 'python -m SimpleHTTPServer' in the console to run a simple python server. The html file is named 'index.html' so the server knows to look at that file as the opening file.

The javascript file 'buildTable.js' checks to see if the code is being hosted somewhere. 
	- If it is, then it will be able to read in a JSON file. 
	- If it is not, it will set the value of the JSON object to the default provided. This is because internet browsers do not let you load in local files due to security reasons.

After populating the JSON variable, the code generates DOM objects and adds them to the page. It keeps doing this until all elements of the JSON variable have been rendered onto the page.
	- if the row element contains a phone number, a black phone icon will appear next to the name.
	- if the row element does not contain a phone number, a black phone icon with a red circle and line over it will appear next to the name.

After the elements have been loaded, the user will be able to click on a row and see extended information from that row. If the user clicks on the same row again, the row will collapse. If the user clicks on a different row, the open row will collapse and the clicked row will expand.

The page has 2 states. 
1. When the webpage is displayed in a large viewport, the user will see larger text and icons. Also, the header will be fixed to the top of the page and the text will scroll under it.

2. If the user resizes the viewport or views the page on a mobile device (tablet or phone), the user will see smaller text and icons. Also, the header will become static and scroll out of view along with the text.

The objects in the JSON variable are displayed in alphabetical order based on the item's 'name' attribute.