// 	8
// 	9
// 	13
// 	16
// 	17
// 	18
// 	19
//  	20
// 	27
//  	33
//  	34
// 	35
// 	36
//  	37
//  	38
//  	39
//  	40
// 	45
// 	46
// 	48
// 	49
// 	50
// 	51
// 	52
// 	53
// 	54
// 	55
// 	56
// 	57
// 	65
// 	66
// 	67
// 	68
 	
	
// 	69
// 	70
// 	71
// 	72
// 	73
// 	74
// 	75
// 	76
// 	77
// 	78
// 	79
// 	80
// 	81
// 	82
// 	83
// 	84
// 	85
// 	86
// 	87
// 	88
// 	89
// 	abc-90-e
//   	abc-9-e
//   	92
//  	93
//  	96
//  	97
//  	98
//  	99
//  	100
//  	101
//  	102
//  	103
 	
	
//  	104
//  	105
// 	106
// 	107
// 	109
//  	110
// 	111
// 	112
// 	113
// 	114
// 	115
// 	116
// 	117
// 	118
// 	119
// 	120
// 	121
// 	122
// 	123
//  	144
//  	145
// -	186
//  	187
// 	188
// 	189
// 	190
//  	191
//  	192
//  	219
//  	220
//  	221
//  	222

// $(document).ready(function(){jQuery(".hp-txt").keydown(function(event){let obj,lenVal,maxLength,nbr;function checkKeyCode(n)
//     {if((n>=48&&n<=57)||(n>=65&&n<=90)||(n>=96&&n<=111)||(n>=186&&n<=222))
//     return true;return false;};obj=jQuery(this);lenVal=obj.val().length;maxLength=obj.attr("class").trim().match(/huypad-\d{1,15}/)[0].trim().split("-")[1];nbr=Number(maxLength);if(lenVal>=nbr){if(checkKeyCode(event.keyCode))
//     event.preventDefault();}});});


$(document).ready(function(){


    jQuery(".hp-txt").keydown(function(event){
        
        let obj, lenVal, maxLength, nbr;
        function checkKeyCode(n)
        {
            if( 
                
                    ( n >= 48 && n <= 57 ) 

                    || ( n >= 65 && n <= 90 ) 
                    || ( n >= 96 && n <= 111 )
                    || (n >= 186 && n <= 222)
                
            )
                return true;
            return false;
        };

        obj = jQuery(this);
        lenVal = obj.val().length;
        maxLength = obj
            .attr("class").trim()
            .match(/huypad-\d{1,15}/)[0].trim()
            .split("-")[1];
        
        nbr = Number(maxLength);
        if (lenVal >= nbr){
            if(checkKeyCode(event.keyCode))
              event.preventDefault();
        }
    });

});
