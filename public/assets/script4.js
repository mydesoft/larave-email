
                                        (function ($) {
                                            "use strict";
                                            $(window).on('load',function () {
                                                var carousel = 'stm_carousel_AWpwhaIZFC';
                                                var big_carousel = 'stm_carousel1_WhErlPJDbZ';
                                                var small_carousel = 'stm_carousel2_GNkmeYgdZy';
                                                var small_carousel_item = '.stm_carousel__small #' + small_carousel + ' .owl-item';

                                                var flag = false;
                                                var duration = 800;

                                                var owlRtl = false;
                                                if ($('body').hasClass('rtl')) {
                                                    owlRtl = true;
                                                }

                                				
                                                var owl_big = $('#' + big_carousel).owlCarousel({
                                                    rtl: owlRtl,
                                                    items: 5,
                                                    dots: false,
                                                    nav: false,
                                                    slideBy: 1,
                                                    margin: 0,
                                                    smartSpeed: 800,
                                                    autoplay: true,
                                                    navText: '',
                                                    loop: true,
                                                    responsive: {
                                                        0: {
                                                            items: 1,
                                                        },
                                                        550: {
                                                            items: 3                        },
                                                        768: {
                                                            items: 4                        },
                                                        900: {
                                                            items: 4                        },
                                                        1025: {
                                                            items: 5                        }
                                                    }
                                                }).on('changed.owl.carousel', function (e) {
                                                var currentSlide = (parseFloat(e.item.index) + 1);
                                                var currentSpan = '#' + carousel + ' .stm_carousel__pagination .current';
                                                $(currentSpan).text(currentSlide);
                                                stm_light_gallery(false);

                                                $(small_carousel_item).find('.stm_carousel__single').removeClass('current');
                                                $(small_carousel_item).eq(e.item.index).find('.stm_carousel__single').addClass('current');

                                                if (!flag) {
                                                    flag = true;
                                                    owl_small.trigger('to.owl.carousel', [e.item.index, duration, true]);
                                                    flag = false;
                                                }
                                            });

                                            var owl_small = $('#' + small_carousel).owlCarousel({
                                                rtl: owlRtl,
                                                items: 6,
                                                dots: false,
                                                nav: false,
                                                slideBy: 1,
                                                smartSpeed: 800,
                                                navText: '',
                                                responsive: {
                                                    0: {
                                                        items: 2,
                                                    },
                                                    550: {
                                                        items: 4                        },
                                                    768: {
                                                        items: 5                        },
                                                    1000: {
                                                        items: 6                        }
                                                }
                                            }).on('changed.owl.carousel', function (e) {
                                                if (!flag) {
                                                    flag = true;
                                                    owl_big.trigger('to.owl.carousel', [e.item.index, duration, true]);
                                                    flag = false;
                                                }
                                            }).on('click', '.owl-item', function (event) {
                                                owl_big.trigger('to.owl.carousel', [$(this).index(), 400, true]);
                                            });

                                            });
                                        })
                                    (jQuery);
                              
