/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
     $("#btnLlenar").click(function(){
                llenar();
        });
});

            
            function llenar(){
                var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                var feed;
                $.getJSON(flickrApi,{
                    tags:$("#tag").val(),
                    tagmode:"any",
                    format:"json"}).done(function (data){
                        console.log(data);
                        $.each(data.items,function (i,item){
                            
                            feed = '<div class="panel panel-default" style="width: 500px;"><div class="panel-heading">'+item.author+' <p class="pull/right">'+item.published+'</p></div><div class="panel-body">'+item.description+'<br><p>'+item.title+'</p></div></div>';
                            $("#images").append($(feed));
                        });
                    });
                
            }

