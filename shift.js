$(function() {

var lastChecked = null;
var lastCheck = null;
var $chkboxes = $('.checkbox input[type="checkbox"]');
var $lblBox = $('.checkbox label');

   $lblBox.click(function(f) {

		if(!lastCheck) {
			//console.log("This was the first label clicked" + lastChecked);
			lastCheck = this;
			return;
		}
		
		if(f.shiftKey) {

var starts = $lblBox.index(this);
var ends = $lblBox.index(lastCheck);

	//loop through starting with first, to end and then make then trigger click
	$lblBox.slice(Math.min(starts,ends) +1, Math.max(starts,ends)+ 1).siblings().trigger("click");

}
   });


	$chkboxes.click(function(e) {
	
	 //if all are manually clicked change button text to Uncheck all
		var l = $('input[type="checkbox"]:checked').length;
		var k = $('input[type="checkbox"]').length;
	
		if (l == k) {
			$("#allSelected").text("Uncheck all");
		}
		

		if(!lastChecked) {
			//console.log("This was the first checkbox clicked" + lastChecked);
			lastChecked = this;
			return;
		}
		
		if(e.shiftKey) {
			//console.log("Shift held");
			var start = $chkboxes.index(this);
			
			var end = $chkboxes.index(lastChecked);
			//loop through starting with first, to end and then make the property checked true or false
			$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
		}
		lastChecked = this;
	});
	
	
	$("#allSelected").click(function() {
    var c = $("#allSelected").text();
    "Uncheck all" == c
      ? ($('.checkbox input[type="checkbox"]').prop("checked", !1),
        $(this).text("Check all"))
      : "Check all" == c &&
        ($('.checkbox input[type="checkbox"]').prop("checked", !0),
        $(this).text("Uncheck all"));
        return false;
        
  });
});