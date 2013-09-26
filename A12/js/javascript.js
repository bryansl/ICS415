function countLinks()
{
	var url = $("#url").val();
	
	var div = document.getElementById("div1");
	
	var table = document.getElementById("table");
	
	var list =
		['a', 'abbr', 'acronym', 'address', 'applet',
		'area', 'article', 'aside', 'audio', 'b', 'base',
		'basefont', 'bdi', 'bdo', 'big', 'blockquote',
		'body', 'br', 'button', 'canvas', 'caption',
		'center', 'cite', 'code', 'col', 'colgroup',
		'command', 'datalist', 'dd', 'del', 'details',
		'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em',
		'embed', 'fieldset', 'figcaption', 'figure',
		'font', 'footer', 'form', 'frame', 'frameset',
		'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head',
		'header', 'hr', 'html', 'i', 'iframe', 'img',
		'input', 'ins', 'kbd', 'keygen', 'label',
		'legend', 'li', 'link', 'map', 'mark', 'menu',
		'meta', 'meter','nav', 'noframes', 'noscript',
		'object', 'ol', 'optgroup', 'option', 'output',
		'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt',
		'ruby', 's', 'samp', 'script', 'section', 'select',
		'small', 'source', 'span', 'strike', 'strong',
		'style', 'sub', 'summary', 'sup', 'table',
		'tbody', 'td', 'textarea', 'tfoot', 'th',
		'thead', 'time', 'title', 'tr', 'track',
		'tt', 'u', 'ul', 'var', 'video', 'wbr'
		];
	if(table==null)
	{
		table = document.createElement("table");
		
		table.id = "table";
		table.setAttribute("border","1");
		
		var th1 = document.createElement("th");
		var th2 = document.createElement("th");
		
		th1.innerHTML = "Tag";
		th2.innerHTML = "Count";
		
		table.appendChild(th1);
		table.appendChild(th2);
		
		
		div.appendChild(table);
	}
	
	
	$.get(url, function(data){
		for(var i = 0; i < list.length; i++)
		{
			var elements = $(data).find(list[i]);
			var count = elements.size();

			if(count > 0)
			{
				table.appendChild(newRow(list[i],count));
			}
		}

	});
}

function newRow(element, number)
{
	var row = document.createElement("tr");
	
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	
	var p1 = "<p>"+element+"</p>";
	var p2 = "<p>"+number+"</p>";
	
	td1.innerHTML+=p1;
	td2.innerHTML+=p2;
	
	row.appendChild(td1);
	row.appendChild(td2);

	return row;
}

function getList()
{
	var url = $("#url").val();
	var jsList = new Array();
	
	var div = document.getElementById("div2");
	var list = document.getElementById("list");
	if(list==null)
	{
		var list = document.createElement("ul");
		var h3 = document.createElement("h3");
		h3.id = "jsHeader";
		list.id = "list";
		h3.innerHTML += "External Javascript Files";
		div.appendChild(h3);
	}
	$.get(url, function(data){
		jsList = $(data).find('script');
		var count=jsList.length;
		
		for(var i = 0; i < count; i++)
		{
			var txt = "<li>" + jsList[i].src + "</li>";
			list.innerHTML += txt;
		}
		div.appendChild(list);
	});
}