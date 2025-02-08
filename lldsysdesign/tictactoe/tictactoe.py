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

class Board:
    def __init__(self,size):
        self.reset(size)
    

    def reset(self,size):
        self.board = [["" for x in range(size)] for y in range(size)];
        self.size = size;
        self.rowCounts = {};
        self.colCounts = {};
        self.diagCounts = {};
        

    def place(self,player,x,y):
        #O(1) complexity
        marker = player.marker
        
        if(self.board[x][y] != ''):
            raise ValueError("Invalid Move")
        else:
            self.board[x][y] = marker

            self.rowCounts[y] = self.rowCounts.get(y,{});
            self.rowCounts[y][marker] = self.rowCounts[y].get(marker,0) + 1;

            if self.rowCounts[y][marker] == self.size:
                return True
            
            self.colCounts[x] = self.colCounts.get(x,{});
            self.colCounts[x][marker] = self.colCounts[x].get(marker,0) + 1;

            if self.colCounts[x][marker] == self.size:    
                return True
            
            if x == y:
                self.diagCounts["forwards"] = self.diagCounts.get("forwards",{});
                self.diagCounts["forwards"][marker] = self.diagCounts["forwards"].get(marker,0) + 1;

                if self.diagCounts["forwards"][marker] == self.size:
                    return True

            if x + y == self.size - 1:
                self.diagCounts["backwards"] = self.diagCounts.get("backwards",{});
                self.diagCounts["backwards"][marker] = self.diagCounts["backwards"].get(marker,0) + 1;

                if self.diagCounts["backwards"][marker] == self.size:
                    return True
            
            return False




class Game:
    gameId = str(uuid.uuid4());
    winner = "";

    def __init__(self,player1,player2,board):
        self.player1 = player1;
        self.player2 = player2;
        self.moves = [];
        self.winner = "";
        self.startingTime = time.time();
        self.board = board
        self.player1.marker = "O"
        self.player2.marker = "X"

    def playGame(self):
        currTurn = 1;
        gameDone = False;
        while not gameDone:
            currPlayer = self.player1 if currTurn % 2 == 1 else self.player2
            x = int(input("Write x position of marker : "))
            y = int(input("write y position of marker : "))
            try:
                if self.board.place(currPlayer,x,y):
                    gameDone = True
                    self.moves.append([x,y]);
                    print(self.moves)
                    print(f"{currPlayer.name} wins!")
                else:
                    self.moves.append([x,y]);
                    print(self.moves)
                    currTurn += 1
            except ValueError as e:
                print(f"{e}")


player1 = Player("yash",22)
player2 = Player("yogender",23)

board = Board(3)

game = Game(player1,player2,board);

game.playGame();
