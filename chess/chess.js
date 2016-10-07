$(function(){
            // Create an array to store all the pieces and their locations
            var whitePieces =
            {
                'piece-h1': 'h1',
                'piece-g1': 'g1',
                'piece-f1': 'f1',
                'piece-e1': 'e1',
                'piece-d1': 'd1',
                'piece-c1': 'c1',
                'piece-b1': 'b1',
                'piece-a1': 'a1',
                'piece-h2': 'h2',
                'piece-g2': 'g2',
                'piece-f2': 'f2',
                'piece-e2': 'e2',
                'piece-d2': 'd2',
                'piece-c2': 'c2',
                'piece-b2': 'b2',
                'piece-a2': 'a2'
            }

            //console.log(whitePieces);
            $(document).ready(function() {
                $(".piece").draggable({
                    grid: [103, 103]
                });
                
                $(".square").droppable({
                  drop: function(event, ui)
                  { 
                    // When the piece is dropped we need to confirm that it is a legal move
                    //console.log(ui.helper.context);
                    var color = "";
                    if(ui.helper.context.className.search("white") > 0)
                        color = "white";
                    else
                        color = "black";
                    
                    if(squareFree(this.id, color))
                    {
                        // First we need to set the revert to false and update the current position of the piece
                        $( ".piece" ).draggable( "option", "revert", false );
                        eval(color + 'Pieces')[ui.helper.context.id] = this.id;
                    }
                    else
                        $( ".piece" ).draggable( "option", "revert", true );
                    
                    // If it is a legel move we need to check if the piece is taking another piece
                  }
                });
              });
            
            function squareFree(square, color)
            {
                // Loop through the pieces object and see if the square is available, this only checks for current color
                
                var free = true;
                for(pieces in eval(color + 'Pieces'))
                {
                    if(eval(color + 'Pieces')[pieces] == square)
                        free = false;
                }
                return free;
            }
            
    });