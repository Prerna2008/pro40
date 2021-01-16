class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 
            if(index === player.index){
                         
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25);
                text("Score:"+allPlayers[plr].score ,x-25,y+80);    
                
            }
        }


        // Give movements for the players using arrow keys


        // Create and spawn fruits randomly
        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }
    
         if (frameCount % 80 === 0) {
             fruit1 = createSprite(random(100, 1000), 0, 100, 100);
             fruit1.velocityY = 6;
             var rand = Math.round(random(1));
             switch(rand){
                 case 1: fruit1.addImage("fruit1",fruit1_img);
                 break;
             }
             fruitGroup1.add(fruit1);
         }
         if (frameCount % 80 === 0) {
            fruits2 = createSprite(random(100, 1000), 0, 100, 100);
            fruits2.velocityY = 6;
            var rand = Math.round(random(1));
            switch(rand){
                case 1: fruits2.addImage("fruit2",fruit2_img);
                break;
            }
            fruitGroup2.add(fruits2);
            
        }
        if (frameCount % 80 === 0) {
            fruits5 = createSprite(random(100, 1000), 0, 100, 100);
            fruits5.velocityY = 6;
            var rand = Math.round(random(1));
            switch(rand){
                case 1: fruits5.addImage("fruit5",fruit5_img);
                break;
            }
            fruitGroup5.add(fruits5);
            
        }
        if (frameCount % 80 === 0) {
            fruits3 = createSprite(random(100, 1000), 0, 100, 100);
            fruits3.velocityY = 6;
            var rand = Math.round(random(1));
            switch(rand){
                case 1: fruits3.addImage("fruit3",fruit3_img);
                break;
            }
            fruitGroup3.add(fruits3);
            
        }
        if (frameCount % 100 === 0) {
            fruits4 = createSprite(random(100, 1000), 0, 100, 100);
            fruits4.velocityY = 6;
            var rand = Math.round(random(1));
            switch(rand){
                case 1: fruits4.addImage("fruit1",fruit4_img);
                break;
            }
            fruitGroup4.add(fruits4);
        
        }
        
         
          if (player.index !== null) {
             //fill code here, to destroy the objects.
             if(player1.isTouching(fruitGroup1)||player2.isTouching(fruitGroup1)){
                 fruitGroup1.destroyEach();
                 player.score =player.score+1;
                    player.update();
             }
          }
          if (player.index !== null) {
            //fill code here, to destroy the objects.
            if(player1.isTouching(fruitGroup2)||player2.isTouching(fruitGroup2)){
                fruitGroup2.destroyEach();
                player.score =player.score+1;
                   player.update();
            }
         }
         if (player.index !== null) {
            //fill code here, to destroy the objects.
            if(player1.isTouching(fruitGroup5)||player2.isTouching(fruitGroup5)){
                fruitGroup5.destroyEach();
                player.score =player.score+1;
                   player.update();
            }
         }
         if (player.index !== null) {
            //fill code here, to destroy the objects.
            if(player1.isTouching(fruitGroup3)||player2.isTouching(fruitGroup3)){
                fruitGroup3.destroyEach();
                player.score =player.score+1;
                   player.update();
            }
         }
         if (player.index !== null) {
            //fill code here, to destroy the objects.
            if(player1.isTouching(fruitGroup4)||player2.isTouching(fruitGroup4)){
                fruitGroup4.destroyEach();
                player.score =player.score+1;
                   player.update();
            }
         }
         if(player.score>60){
             game.update(2);
         }
        }
    end(){
       console.log("Game Ended");
    }
}