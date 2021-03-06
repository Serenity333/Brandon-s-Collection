hs.graphicsDir = 'highslide/graphics/';
hs.creditsPosition = 'top center';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.75;
hs.align = 'center';
hs.captionEval = 'this.thumb.title';
hs.captionOverlay.position = 'below';


// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'large-dark',
		opacity: 0.6,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	}
});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	transitions: ['expand', 'crossfade']
};
