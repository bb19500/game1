

/**
  This class handles all the sound related functionalities 
	
	@class
*/
TicTacToe.AudioManager	=	function() {

	/** this element hold the BGM
		@private */
	var bgm;

	/** flag for mute feature
	 	@type bool
		@private */	
	var isMute;

	/** @scope TicTacToe.AudioManager */
	return {
    init        : function() {
                    bgm       = new Audio('audio/bgm.ogg');
                    bgm.volume = 0.3;
					bgm.loop = true;
                    bgm.play();
                  },

    click       :   function() {
                        var clickEffect;
                        clickEffect = new Audio('audio/clickEffect.ogg');
                        clickEffect.volume = 0.3;
                        clickEffect.play();
                    },

    chime       :   function() {
                        var eff;
                        eff = new Audio('audio/chimeEffect.ogg');
                        eff.play();
                    },

	mute		:	function() {
						isMute = true;
						bgm.pause();
					},

	unMute		:	function() {
						isMute = false;
						bgm.play();
					},

	toggleMute	:	function() {
						isMute = !isMute;
						if (isMute)
							bgm.pause();
						else
							bgm.play();
					}
	};

}();
