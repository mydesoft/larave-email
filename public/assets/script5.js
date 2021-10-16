
                            
                                    (function ($) {
                                            document.body.addEventListener("stm_gmap_api_loaded", stm_init_map, false);
                                            function stm_init_map() {
                                                var default_marker_icon;
                                                var map_6000126a0ed20;
                                                var markers = [];
                                                var gmarkers = [];
                                                var owl_6000126a0ec6a =
                                                $("#owl_6000126a0ec6a");
				
                                                default_marker_icon = 'wp-content/uploads/sites/3/2017/03/marker.png';
                                				
                                                var mapId = 'stm-gmap-6000126a0ece6';
                                                var mapOptions = {
                                                    zoom: 18,
                                                    zoomControlOptions: {
                                                        position: google.maps.ControlPosition.LEFT_TOP
                                                    },
                                                    streetViewControl: false,
                                                    scrollwheel: false,
                                					styles :[{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]                };
                                                var $mapElement = $('body').find('#stm-gmap-6000126a0ece6');
                                                var mapElement = $mapElement[0];

                                                if (mapElement == null) return;
                                                if ($mapElement.html() !== '') return;
                                				map_6000126a0ed20 = new google.maps.Map(mapElement, mapOptions);
                                                var owlId = owl_6000126a0ec6a;
                                                var owlData = null;
                                                var inited = false;


                                                owlId.owlCarousel({
                                                    dotsContainer: '#owl-nav-6000126a0eca9',
                                                    items: 3,
                                                    margin: 50,
                                                    loop: false,
                                                    responsive: {
                                                                                0: {
                                                            items: 1
                                                        },
                                                        550: {
                                                            items: 2                        },
                                                        980: {
                                                            items: 3                        },
                                                        1199: {
                                                            items: 3                        }
                                                                            },
                                                    onTranslated: function () {
                                                        pearl_setMarkers();
                                                        $('.gmap_addresses .owl-item.active').last().addClass('last-active');
                                                    },
                                                    onDragged: function () {
                                                    },
                                                    onTranslate: function () {
                                                        $('.owl-item').removeClass('last-active');
                                                    },
                                                    onInitialized: function () {
                                                        $('.gmap_addresses .owl-item.active').last().addClass('last-active');
                                                        pearl_setMarkers();
                                                    }
                                                });

                                                owlData = owlId.data('owlCarousel');


                                                function pearl_setMarkers() {
                                                    var owlId = owl_6000126a0ec6a;
                                                    var latlngbounds = new google.maps.LatLngBounds();
                                                    var map = map_6000126a0ed20;


                                                    markers = [];
                                                    owlId.find('.owl-item.active').each(function (i) {
                                                        markers.push([parseFloat($(this).find('.item').data('lat')), parseFloat($(this).find('.item').data('lng')), $(this).find('.item').data('title')]);
                                                    });
                                                    for (i = 0; i < gmarkers.length; i++) {
                                                        gmarkers[i].setMap(null);
                                                    }

                                                    for (var i = 0; i < markers.length; i++) {
                                                        var marker_array = markers[i];
                                                        var latlng = new google.maps.LatLng(marker_array[0], marker_array[1]);

                                                        var marker = new StmMarker(
                                                            latlng,
                                                            map,
                                                            {
                                                                title: marker_array[2],
                                                                marker_id: 'marker_' + i,
                                                                icon: default_marker_icon,
                                                                content: marker_array[2],
                                                                created: function () {

                                                                var markerDom = this.markerDom;
                                                                if (typeof  markerDom === 'undefined') return;

                                                                if (default_marker_icon.indexOf('data:image/svg+xml;base64') >= 0) {
                                                                    markerDom.find('img').attr('width', 75);
                                                                }

                                                                var higlighted = owlId.find('.owl-item.active').eq(markerDom.index());

                                                                this.markerDom.on('hover', function () {
                                                                        higlighted.addClass('highlighted');
                                                                        higlighted.find('.icon').addClass('stc');
                                                                    },
                                                                    function () {
                                                                        higlighted.removeClass('highlighted');
                                                                        higlighted.find('.icon').removeClass('stc');

                                                                    }
                                                                )
                                                            }
                                                        }
                                                    );
                                                    latlngbounds.extend(new google.maps.LatLng(marker_array[0], marker_array[1]));
                                                    gmarkers.push(marker);

                                                    }
                                                    map.fitBounds(latlngbounds);

                                                    if (markers.length === 1) {
                                                        var listener = google.maps.event.addListener(map, "idle", function () {
                                							map_6000126a0ed20.
                                                            setZoom(18);
                                                            google.maps.event.removeListener(listener);
                                                        });
                                                    }

                                                    google.maps.event.addListenerOnce(map_6000126a0ed20, 'bounds_changed', function () {
                                                        offsetCenter(latlngbounds.getCenter(), 0, $("#map_6000126a0ed20 .gmap_addresses").innerHeight());


                                                        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                                							map_6000126a0ed20.
                                                            setZoom(map_6000126a0ed20.getZoom() - 4
                                                        )
                                                            ;
                                                        } else {
                                							map_6000126a0ed20.
                                                            setZoom(map_6000126a0ed20.getZoom() - 1
                                                        );}
                                                    });


                                                }


                                                function offsetCenter(latlng, offsetx, offsety) {

                                                    var map = map_6000126a0ed20;

                                                    var scale = Math.pow(2, map.getZoom());
                                                    var nw = new google.maps.LatLng(
                                                        map.getBounds().getNorthEast().lat(),
                                                        map.getBounds().getSouthWest().lng()
                                                    );
                                                    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
                                                    var pixelOffset = new google.maps.Point((offsetx / scale) || 0, (offsety / scale) || 0);

                                                    var worldCoordinateNewCenter = new google.maps.Point(
                                                        worldCoordinateCenter.x - pixelOffset.x,
                                                        worldCoordinateCenter.y + pixelOffset.y
                                                    );

                                                    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

                                                    map.setCenter(newCenter);

                                                }
                                            }
                                        })
                                    (jQuery);
                                