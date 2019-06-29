//存cookie
function setCookie( key , value , day ){
    var now = new Date();
    now.setDate( now.getDate() + day );
    if( day ){
        document.cookie = key + "=" + value + ";expires=" + now;
    }else{
        document.cookie = key + "=" + value;
    }
}

//取cookie
function getCookie( key ){
    var str = document.cookie;  //sname=jack; sname1=jack1
    console.log( str );
    if( str ){
        var str1 = str.replace( /\s+/g , "" );  //去掉空格  //sname=jack;sname1=jack1
        console.log( str1 );
        var arr = str1.split( ";" );    //通过；进行拆分转换成数组  //["sname=jack", "sname1=jack1"]
        console.log( arr );
        for( var i = 0 ; i < arr.length ; i++ ){
            var item = arr[ i ].split( "=" );   //通过=继续拆解为一个小数组，第一个孩子是键，第二个孩子是值
            if( item[ 0 ] == key ){     //当第一个孩子（键）等于要查询的值的时候，返回第二个孩子，也就是所要查询的值
                return item[ 1 ];   
            }
        }
    }

    return "";
}

//删除cookie
function delCookie( key ){
    setCookie( key , "" );
}