//工具1：获取16进制的颜色函数
function getRandomColor(){
    str = "#";
    for( var i = 0 ; i < 6 ; i++ ){
        str += Math.floor( Math.random() * 16 ).toString( 16 );
    }
    return str;
}

//工具2：获取rgb()模式的颜色
function randomColor(){
    return "rgb(" + Math.floor( Math.random()*256 ) + "," + Math.floor( Math.random()*256 ) + ","  + 
    Math.floor( Math.random()*256 ) + ")" ;
}

//工具3：获得min-max之间的一个随机数
function getSectionRandomNum( min , max ){
    return Math.round( Math.random() * ( max - min ) + min );
}

//工具4：获得当前的时间，返回的是一个字符串
function getTime(){
    var now = new Date();
    var times = now.getTime( now );

    //获得今天的年月日
    var year = now.getFullYear() ;
    var month = now.getMonth() + 1 ;
    var day = now.getDate() ;
    //console.log( year , month , day ) ;

    //获得时分秒
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //console.log( hour , minute , second );

    return year + "年" + month + "月" + day + "日" + " " + ten(hour) + "时" + ten(minute) + "分" + ten(second) + "秒";

}

//工具5：如果小于10返回0数字（比如：05），大于10就返回本身
function ten( n ){
    return n < 10 ? ( "0" + n ) : n;
}

//工具6：通过ID获得变量
function $id( id ){
    return document.getElementById( id );
}

//工具7：碰撞函数（碰上了返回true）
function pz( d1 , d2 ){

    var L1 = d1.offsetLeft ; 
    var R1 = d1.offsetLeft + d1.offsetWidth ;
    var T1 = d1.offsetTop ;
    var B1 = d1.offsetTop + d1.offsetHeight ;

    var R2 = d2.offsetLeft + d2.offsetWidth ;
    var L2 = d2.offsetLeft ;
    var B2 = d2.offsetTop + d2.offsetHeight ;
    var T2 = d2.offsetTop ;

    if( R2 < L1 || R1 < L2 || B2 < T1 || B1 <T2 ){
        return false  ;  //没有撞上
    }else{
        return true ;   //撞上了
    }
}

//工具8：运动函数：适合匀速运动，缓冲运动，链式运动，完美运动

//第一个参数是操作的对象，json主要是设置目标，以对象的形式进行存储，最后一个参数是回调函数，主要用在链式运动
function move( obj , json , callback ){
    clearInterval( obj.timer );

    obj.timer = setInterval( function(){
        var flag =  true ;
        for( var attr in json ){
            
            var current = 0 ;
            if( attr == "opacity" ){
                current = getStyle( obj , attr ) * 100 ;
            }else{
                current = parseInt( getStyle( obj , attr ) ); 
            }

            var speed = ( json[ attr ] - current ) / 10 ;
            speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

            if( json[ attr ] != current ){
                flag = false ;
            }

            if( attr == "opacity" ){
                obj.style.opacity = ( current + speed ) / 100 ;
            }else{
                obj.style[ attr ] = current + speed + "px" ;
            }

        }

        if( flag ){
            clearInterval( obj.timer );
            if( callback ){
                callback();
            }
        }

    } , 20 )


}


//获取元素的外部样式值
function getStyle( obj , attr ){
    if( window.getComputedStyle ){
        return window.getComputedStyle( obj )[ attr ];
    }else{
        return obj.currentStyle( attr )
    }
}
//alert( getStyle( div , "width" ) );