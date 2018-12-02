(function ($) {
	"use strict";
    
    
    $(document).ready(function($) {          
         $('.map')
      .gmap3({
        center:[-34.6029959, -58.392677],
        zoom:14,
        mapTypeId: "mapa", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapa"]
        }
      })
        .marker({
            position: [-34.6029959,-58.392677 ],
          })
      .styledmaptype(
        "mapa",
        [
        
        ],
        {name: ""}
      );
        
    });	  


}(jQuery));	