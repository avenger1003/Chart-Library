function Chart(data){
	var xBar = data.data;
	var yBar = data.name;
	var chartWidth = data.data.length * 70;

	/* 
	Calculating ratio to create bar chart 
	*/
	var ratio = 300/Math.max.apply( Math, xBar);

	/* 
	* Create a wrapper div for chart  
	*/
	var chartWrap = $($('#chartWrapTemplate').html()).css('width',chartWidth+100);					

	/* 
	* Create chart div for placing bar on it	
	*/			
	var chartDiv = $('.chart',chartWrap).css('width',this.width);					

	/*
	* Getchart method is to graw graph dynamically
	* @param 'targetId'
	* @output Html markup 
	* 
	*/
	this.getChart = function(targetId){

		var yBarUnits = $('.y-bar-units', chartDiv);	

		for(var i=0;i<xBar.length;i++){

			var bar = $($('#barTemplate').html()).css('height',xBar[i]*ratio);

			yBarUnits.prepend('<div>'+parseInt(i+1, 10)+'</div>');			

			barName = $('.bar-name',bar).html(yBar[i]);

			bar.append(barName);

			chartDiv.append(bar);	
		}


		/* 
		* Adding units on Y-bar 
		*/
		$('div',yBarUnits).css('height',ratio* Math.max.apply( Math, xBar)/xBar.length);

		
		$('#'+targetId).html(chartWrap);			
	}

	/* 
	* Executing getchart function 
	*/
	this.getChart('chart_holder');
}
