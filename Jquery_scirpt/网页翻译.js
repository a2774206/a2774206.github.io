			//没有jq则引入
			(function(){
			   	 var hm = document.createElement("script");
			     hm.src = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";
			     var s = document.getElementsByTagName("body")[0];
			 	 s.parentNode.insertBefore(hm, s);
			})()

			$(function(){
				(function($){
				$.fn.extend({
					translate:function(){
						//
						$(document).off().on('mouseup','p,span,div,pre,li,h2,h1,h3,h4,h5,strong',function (e) {
							e.preventDefault();
							var txt;
							var $parentOffset = $(this).offset();
							var x = e.pageX - $parentOffset.left;
							var y = e.pageY - $parentOffset.top;
							var txt = window.getSelection();
							var word = txt;
							var that = $(this)
							if (txt.toString().length > 1) {//没选中字
								$.ajax({
									type:"get",
									url:'http://vip.progr.cn/fanyi.php',
									data:{'word':word.toString()},
									async:true,
									dataType:'jsonp',
									success:function(res){
										//console.log($(that))
										if(res.data.definition!='undefined'){
											$(that).attr('title',word+':'+res.data.definition);
										}else{
											$(that).attr('title',word+':词库太弱，翻译不了');
										}
									}
								});
							}
						});
					}
				})
			})(jQuery)
				$(document).translate();
			})