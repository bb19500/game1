

TicTacToe.FBWrapper	=	function() {
	
	/** @scope TicTacToe.FBWrapper */
	return {
        accessToken     : null,
        namespace       : 'tictactoeextended',
        checkLoginStatus: function(response) {
                            console.log('checkLoginStatus');
                            if(response && response.status == 'connected') {
                                TicTacToe.FBWrapper.accessToken = response.authResponse.accessToken;
                                FB.api('/me', function(response) {
                                    console.log(response);
                                    TicTacToe.GameState.p1Name = response.name;
                                    $('#p1NameDiv1').val(response.name);
                                });
                                if (TicTacToe.GameState.makeFBPost == true) {
                                    TicTacToe.FBWrapper.postAction();
                                }
                            } else {
                                TicTacToe.FBWrapper.accessToken = null;
                            }
                          },
        postAction      : function() {
                            console.log('postaction');
                            if (TicTacToe.FBWrapper.accessToken != null) {
                                FB.api('/me/' + TicTacToe.FBWrapper.namespace + ':earn',
                                        'post',
                                        {'report' : TicTacToe.GameState.gameDescription,
                                            badge : 'http://www.gethugames.in/tictactoe/badge.php?rank=' + (10 - TicTacToe.GameState.rank) },
                                        function(response) {
                                            console.log(response);
                                        });
                            }
                          },
		shareStatus		: function() {
                          }
	};
}();		
