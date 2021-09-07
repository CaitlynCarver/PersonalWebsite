import React from "react";
import Grid from './Gridcomp';

//const lineByLine = require('n-readlines');
//const liner = new lineByLine('./puzzlenames.txt');

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../public/Pictures', false, /\.(png|jpe?g|svg)$/));


const imagesnames = images.map((ims, i) => 
  <Grid num = {i + 1} pic = {ims.default} names = {'puzzle coming soon'}></Grid>
);

function Canterbury() {
  return (
    <div>
      <div className="canter">
        <div className="canterheader">
          <h2>The Canterbury Puzzles</h2>
          <p>The following intractive puzzles are from the book, <em>"The Canterbury Puzzles and Other Curious Problems"(1907)</em> by 
             Henry Dudeney. This puzzle book was based off of the Original <em>Canterbry Tales</em> by Geoffrey Chaucer.
          </p>
          <p>
            All of the following puzzles have been rewritten for the sake modernizing and shortening the text. Feel free to 
            contact me if any are broken or have a photo that would be better for the puzzle. Since there are some puzzles in the
            orginal book that don't have pictures. 
          </p>
          <p>
            <br></br>
            I hope you enjoy them as much as I have! - CC
          </p>
          <p>
            <br></br>
            <em>"Man loves to be confronted by a mystery, and he is not entirely happy until he has solved it."</em> ~ Henry Dudeney
          </p>
        </div>
        <div>
        </div>
        <div class="rows2"> 
          { imagesnames }
        </div>
        </div>
    </div>
  );
}

export default Canterbury;
