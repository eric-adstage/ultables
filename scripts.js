$(function(){

  function thisWidth(){
    return $(this).width();
  }

  function thisHeight(){
    return $(this).height();
  }

  $(".row1").height(function() {
      return Math.max.apply(Math, $("ul").find("li").map(thisHeight));
  });

  other_cols = $('ul.table-row').first().find('li:not(.fixed)')

  $("ul.table-row").each(function(){
    the_lis = $(this).find('li');
    the_lis.height(function(){
      return Math.max.apply(Math, the_lis.map(thisHeight));
    })

    fixed_col = $('li.fixed');
    fixed_col.css({
      'margin-left': function(){
        return -12+-1*Math.max.apply(Math, fixed_col.map(thisWidth));
      }
    });
    fixed_col.width(function(){
      return Math.max.apply(Math, fixed_col.map(thisWidth));
    });

    for (i=0;i<other_cols.length;i++){
      $('ul.table-row').find('li:eq('+i+')').width(function(){
        return Math.max.apply(Math, $('ul.table-row').find('li:eq('+i+')').map(thisWidth));
      });
    }
  });

  $('li').resizable()

  $('.alt-table-container .table-spacer-col').width($('li.fixed').outerWidth())

  var spacerWidth = 0;

  $('.table-container ul.table-col.fixed').each(function(){
    spacerWidth += $(this).outerWidth();
  })

  $('.table-container .table-spacer-col').css('width', spacerWidth);

});