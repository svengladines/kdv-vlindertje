  	var loadBanners = function() {

  	    $jq.getJSON( "resources/json/banners.json", { format: "json" })
  		    .done(function( banners ) {
  		    	
  				fillBanners( banners );
  				
  			})
  	  	    .always(function( xhr ) {
  				var i = xhr;
  			})
  			.fail(function( jqxhr, textStatus, error ) {
  	    		var err = textStatus + ", " + error;
  	    		console.log( "Request Failed: " + err );
  			});
  	};
  	
  	var fillBanners = function(banners) {
  		
  		var now = new Date();
  		var fullDaysSinceEpoch = Math.floor(now/8.64e7);
  		var shifter = 0;
  		$jq( ".banner" ).each( function() {
  			
  			var elementID = new Number( $jq(this).attr("data-banner-index") ).valueOf();
  			var index = (elementID + fullDaysSinceEpoch) % 14;
  			var banner = banners[index];
  			var a = $jq("<a/>").attr("href",banner.link);
  			var i = $jq("<img/>").attr("src", "resources/images/banners/" + banner.img);
  			a.append( i );
  			$jq(this).append( a );
  		});
  		
  	};