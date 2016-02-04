

TicTacToe.TwitterWrapper	=	function() {
	
	/** @scope TicTacToe.Wrapper */
	return {
		shareStatus		:	function() {
								window.open("http://twitter.com/home?status=" + TicTacToe.GameState.gameDescription + " goo.gl/sfb8L", 'title', 'height=300, width=480');
							}
	};
}();		
