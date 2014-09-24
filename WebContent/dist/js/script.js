$(document).ready(function(){
	 $("#id-Button").click(function(){
		 $("#divDinamic").load("page1.html");
		 window.history.pushState('Object', 'Pagina 1', "page1.html");
	});
	 $("#id-ButtonMain").click(function(){
		 $("#divDinamic").load("index.html");
		 window.history.pushState('Object', 'Pagina Inicial', "index.html");
	});
	 $("#id-Button2").click(function(){
		 $("#divDinamic").load("page2.html");
		 window.history.pushState('Object', 'Pagina Inicial', "page2.html");
	});
});