function TwitFunction(t){$(".twitter-share #share").html(t.count)}$.ajax({url:"http://urls.api.twitter.com/1/urls/count.json?url="+document.URL,dataType:"jsonp",jsonpCallback:"TwitFunction"});