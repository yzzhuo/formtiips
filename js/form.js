/*============================================================*/
/*==========================公共方法和类======================*/
/*============================================================*/


// 规则数组
var json = {
	{
		name: 'defalut'，
		options: {
			[{
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}, {
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}, {
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}]
		}
	}, {
		name: 'defalut'，
		options: {
			[{
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}, {
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}, {
				err: 'java',
				right: 'JAVA',
				level: 'danger'
			}]
		}
	}
}


(function tipTool() {
	/*public variable*/
	var prompt = {
		suggest: '建议改为:',
		warning: '强烈建议改为:',
		danger: '必须改为:'
	}
	var timer;
	var errors = {};
	var values = {};
	/*reset*/
	$('.tip-tool').after('<div><i class="triangle"></i><b></b><em></em></div>');
	$('.tip-tool').siblings('div').addClass('tip');
	/*listening*/
	$('.tip-tool').on('focus', function(e) {
		errors['suggest'] = question($(this).attr('err-suggest')).split(',');
		errors['warning'] = question($(this).attr('err-warning')).split(',');
		errors['danger'] = question($(this).attr('err-danger')).split(',');
		values['suggest'] = question($(this).attr('en-suggest')).split(',');
		values['warning'] = question($(this).attr('en-warning')).split(',');
		values['danger'] = question($(this).attr('en-danger')).split(',');
	}).on('blur', function() {
		errors = null;
		values = null;
	}).on('input propertychange', function(e) {
		var res = new String();
		var req = $(this).val();
		res = checkString(req, errors, values);
		if (res === '') {
			return;
		}
		console.log(res);
		$(this).siblings('.tip').find('em').html(res);
		$(this).siblings('.tip').show();
	});
	var question = function(obj) {
		return (obj === undefined) ? '' : obj;
	}
	var checkString = function(req, err, val) {
		var res = '';
		if (!(err['suggest'].length < 1 || err['suggest'] == null || err['suggest'] == undefined)) {
			$.each(err['suggest'], function(index, key) {
				if (key === '') return;
				if (req.indexOf(key) > -1) {
					res += '<span class="text-info">' + key + '</span>' + prompt['suggest'] + '<span class="text-info">' + val['suggest'][index] + '</span>';
				}
			})
		}
		if (!(err['warning'].length < 1 || err['warning'] == null || err['warning'] == undefined)) {
			$.each(err['warning'], function(index, key) {
				if (key === '') return;
				if (req.indexOf(key) > -1) {
					res += '<span class="text-warning">' + key + '</span>' + prompt['warning'] + '<span class="text-warning">' + val['warning'][index] + '</span>';
				}
			})
		}
		if (!(err['danger'].length < 1 || err['danger'] == null || err['danger'] == undefined)) {
			$.each(err['danger'], function(index, key) {
				if (key === '') return;
				if (req.indexOf(key) > -1) {
					res += '<span class="text-danger">' + key + '</span>' + prompt['danger'] + '<span class="text-danger">' + val['danger'][index] + '</span>';
				}
			})
		}
		return res;
	}
})();

(function($) {
	$.fn.extend({
		"highLight": function(options) {
			var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
			this.each(function() { //这里的this 就是 jQuery对象
				//遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
				var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
				//根据参数来设置 dom的样式
				$this.css({
					backgroundColor: opts.background,
					color: opts.foreground
				});
			});

		}
	});
	//默认参数
	var defaluts = {
		foreground: 'red',
		background: 'yellow'
	};
})(window.jQuery);