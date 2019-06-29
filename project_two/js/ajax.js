function ajaxGet( url , callback ){
    //创建ajax对象
    var xhr = null;
    if( window.XMLHttpRequest ){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
    }

    //与服务器建立连接
    xhr.open( "get" , url );

    //清除服务器缓存
    xhr.setRequestHeader( "If-Modified-Since","0" );

    //向服务器发送数据
    xhr.send(  );

    //返回数据
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
            callback( xhr.responseText );
        }
    }
}