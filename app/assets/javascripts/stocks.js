var init_stock_lookup;

init_stock_lookup = function() {
  $("#stock-lookup-form").on("ajax:success", function(event, data, status) {
    $("#stock-lookup").replaceWith(data);
    //reinitilize the listner cause if you replaceWith, listener is gone
    init_stock_lookup();
  });
};

$(document).ready(function() {
  init_stock_lookup();
});
