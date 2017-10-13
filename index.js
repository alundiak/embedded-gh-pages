function setup(){
	var urls = [
		'https://behind-the-code.herokuapp.com/',
		'https://alundiak.github.io/cv/',
		'https://alundiak.github.io/worknme/',
		'https://alundiak.github.io/punktyk/',
		'https://alundiak.github.io/optimized-english/'
	];
	var row = `<tr><td><iframe></td></tr>`;

	var container = document.querySelector('.container');
	urls.forEach(function(url){
		var iFrame = document.createElement('iframe');
		iFrame.src = url;
		container.appendChild(iFrame);
	});
}


setup();