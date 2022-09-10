console.log('DISCOMBOBULATE')

// (function( $ ) {
//   $.fn.makeLock = function(dialNum){ 
//       let combo
//       let dials = dialNum || $(this).attr('data-dials') || 3
//       let lock = $(this).addClass('myLock')
      
//       lock.append('<div class="lockInset">'
//                       +'<div class="lockLine"></div>'
//                       +'<div class="lockWrapper"></div>'
//                     +'</div>')
      
//       var enterBTN    = $('<div class="btnEnter button">Enter</div>').appendTo(lock)
  
//       var lockWrapper = lock.find('.lockWrapper')
      
//       for(var i = 0; i< dials; i++){
//         var dial = $( '<div class="dial"><ol></ol></div>').appendTo(lockWrapper)
//         var slider = dial.find('ol')
//         for(var n = 0; n < 10; n++){
//           slider.append('<li>'+n+'</li>')
//         }
//         slider.prepend( slider.find('li:last-child') )
//       }
//       lockWrapper.append('<div class="shadow"></div>')

//       var dialMove = function(e){
//         $(this).append( $('li:first-child', this))
  
//       }
//       lock.find('ol').on('click', dialMove)

//       var checkLock = function(e){
//         combo = ''
//         lock.find('li:nth-child(2)').each( function(){
//           combo += $(this).text()
//         })
//         if (combo = '000') return
//         console.log(combo)
//       }      
//       enterBTN.on('click', checkLock)
//     }
// }( jQuery ));

// $("#lock").makeLock()