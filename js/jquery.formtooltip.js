;(function($) {
	$.fn.extend({
		"tiptool":function(data){
		var prompt = {
		suggest: '建议改为:',
		warning: '强烈建议改为:',
		danger: '必须改为:'
		}
		var options = {};
			$(this).one("focus",function(){
			  var option = this.name; 
					for(var i in data){  
					if(data[i].name == option){
						 $(this).after('<div><i class="triangle"></i><b></b><em></em></div>');
			   	         $(this).siblings('div').addClass('tip');
			   	         options[option]=data[i].options;
					}
				}
			}).on('input propertychange', function(e) {
			var res = options[this.name];
			var req = $(this).val();
			var tip_Text = "";
		  	for(var i in res){ 
		  		var key = res[i].err.split(",");
		  		var value = res[i].right.split(",");
		  		for(var j in key){
		  			if(req.indexOf(key[j]) > -1){
		  			tip_Text += '<span class="text-info">' + key[j] + '</span>' + prompt[res[i].level] + '<span class="text-info">' + value[j] +'</span><br />';
		  			}
		  		}
		  	}
		  	if (tip_Text !="") {
		  	   $(this).siblings('.tip').find('em').html(tip_Text);
			   $(this).siblings('.tip').show();	
		  	} else{
		  	   $(this).siblings('.tip').hide();
		  	}
			})
		return $(this);
		}
		
	})
})(jQuery)