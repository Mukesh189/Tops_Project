
function enter_number() 
{
  
   var count=document.getElementById('notes').value;
   var result=2000*count;
   document.getElementById('total').innerHTML=result;

// 500

   var five=document.getElementById('five').value;
   var five_number=500*five;
   document.getElementById('five_total').innerHTML=five_number;

   // 200
   var two=document.getElementById('two').value;
   var two_number=200*two;
   document.getElementById('two_total').innerHTML=two_number;

   // 100

var one=document.getElementById('one').value;
   var one_number=100*one;
   document.getElementById('one_number').innerHTML=one_number;

   // 50
   var fifty=document.getElementById('fifty').value;
   var fifty_number=50*fifty;
   document.getElementById('fifty_number').innerHTML=fifty_number;
   
   // 20
   var twenty=document.getElementById('twenty').value;
   var twenty_number=20*twenty;
   document.getElementById('twenty_number').innerHTML=twenty_number;

   // 10

   var ten=document.getElementById('ten').value;
   var ten_number=10*ten;
   document.getElementById('ten_number').innerHTML=ten_number;

   // 5
   
   var fives=document.getElementById('fives').value;
   var fives_number=5*fives;
   document.getElementById('fives_number').innerHTML=fives_number;

   var total1=(document.getElementById('totals').innerHTML=
   result + five_number + two_number + one_number + fifty_number + twenty_number + ten_number + fives_number

);
}
