
$.tdg.init({
    columns:3,
    space:5,
    delayTime:1000,
    gridBackgroundColor:'#e1e1e1',
    itemBackgroundColor:'#fff',
    itemBorderColor:'transparent',
    itemBorderWidth:0,
    itemBorderRadius:10
});

var items = [];

var coll = Alloy.Collections.feed;
var posts = [];
coll.fetch({success:function(){
	
	var a = 0;
	
	coll.map(function(post){
		var thumb = "http://blog.foolprooflabs.com/wp-content/uploads/2014/02/logo-600x225.jpg";
		if(post.has('thumbnail')){
			thumb = post.get('thumbnail');
		}
		posts.push({itemId:post.get('id'),title:post.get('title'),image:thumb,subtitle:post.get('excerpt'),content:post.get('content')});
	});

	for (var x=0; x < posts.length; x++){

	    //CREATES A VIEW WITH OUR CUSTOM LAYOUT
	    var view = Alloy.createController('detail',{data:posts[x]}).getView();

	    //THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
	    var values = {
	    	itemId:posts[x].itemId,
	        title: posts[x].title,
	        image: posts[x].image,
	        subtitle:posts[x].subtitle,
	        content: posts[x].content
	    };

	    //NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
	    items.push({
	        view: view,
	        data: values
	    });
	};

	//ADD ALL THE ITEMS TO THE GRID
	$.tdg.addGridItems(items);
	

}});

$.tdg.setOnItemClick(function(e){
	var cv = Alloy.createController("contentview", {
		model:coll.get(e.source.data.itemId)
	}).getView();
	$.navwin.openWindow(cv);
});

$.navwin.open();

