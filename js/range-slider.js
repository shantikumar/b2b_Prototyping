$(document).ready(function() {
    var btsSliders = [];
     $('.input-range').each(function (ind, elem) {
         var value = $(this).attr('data-slider-value');
         var separator = value.indexOf(',');
         if (separator !== -1) {
             value = value.split(',');
             value.forEach(function (item, i, arr) {
                 arr[i] = parseFloat(item);
             });
         } else {
             value = parseFloat(value);
         }
 
         btsSliders[ind] = $(this).slider({
             formatter: function (value) {            
                 return value;
             },
             min: parseFloat($(this).attr('data-slider-min')),
             max: parseFloat($(this).attr('data-slider-max')),
             range: $(this).attr('data-slider-range'),
             value: value,
             tooltip_split: $(this).attr('data-slider-tooltip_split'),
             tooltip: 'always'
         });
         console.log($('.min-slider-handle').attr('aria-valuenow'));
     });
    sliderRange = btsSliders[0];
     $(".input-range").on("change", function () {
         var $this = $(this),
             value = $this.prop("value").split(",");
         var inputNumberFirst = $(this).parents('.filter-item__body').find('input[type="number"]:first');
         var inputNumberSecond = $(this).parents('.filter-item__body').find('input[type="number"]:last');
 
         inputNumberFirst.val(value[0]);
         inputNumberSecond.val(value[1]);
     });
     $('input[type="number"]').on('change', function () {
         var min = 1,max = 20;
         var inputRange = $(this).parents('.filter-item__body').find('.input-range');
 
         if ($(this).attr('id').indexOf('age') > 2) sliderRange = btsSliders[1];
         if ($(this).attr('id').indexOf('min') > 10) min = 1 * $(this).val();
         else min = 1 * $(this).parents('.filter-item__body').find('input[id*=min]').val();
 
         if ($(this).attr('id').indexOf('max') > 10) max = 1 * $(this).val();
         else max = 1 * $(this).parents('.filter-item__body').find('input[id*=max]').val();
         sliderRange.slider('setValue', [min, max]);
     });
    $('.btn-danger').click(function(){
      alert("Диапазон значений "+ sliderRange.slider('getValue'));
    })
 });