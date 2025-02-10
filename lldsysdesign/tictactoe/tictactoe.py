#first create a player
#player -> object has name,id,games
#games ->gameId, has 2 player id ,moves,board,winner,size of board,marker of player 1 and player 2

import time
import uuid

class Player:
    playerId = str(uuid.uuid4());
    def __init__(self,name,age):
        self.name = name
        self.age = age

class Game:
    gameId = str(uuid.uuid4());
    winner = "";

    def __init__(self,playerId1,playerId2,player1Marker,player2Marker,size):
        self.playerId1 = playerId1;
        self.playerId2 = playerId2;
        self.player1Marker = player1Marker;
        self.player2Marker = player2Marker;
        self.board = [["" for x in range(size)] for y in range(size)];
        self.size = size;
        self.moves = [];
        self.player1 = player1;


player1 = Player("yash",22)
player2 = Player("yogender",23)

newGame = Game(player1.playerId,player2.playerId,"X","O",3);
print(newGame.gameId);

print(newGame.board)
