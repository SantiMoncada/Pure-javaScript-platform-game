class PhysicsObject {
  constructor(ctx, canvasSize, tile, width, height) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.tile = tile;
    this.pos = { x: undefined, y: undefined };
    this.size = { w: width * this.tile, h: height * this.tile };
    this.speed = { x: 0, y: 0 };

    this.physics = { gravity: 0.15 * this.tile, drag: 0.7 };
  }
  updatePhysics(blocks) {
    this.pos.y += this.speed.y;
    this.speed.y += this.physics.gravity;
    this.speed.x *= this.physics.drag;
    this.pos.x += this.speed.x;

    const collision = this.checkForCollision(blocks);

    if (collision.y) {
      this.pos.y = collision.y;
      this.speed.y = 0;
    }
    if (collision.x) {
      this.pos.x = collision.x;
    }
  }
  checkForCollision(blocks) {
    let output = { x: null, y: null };
    for (const block of blocks) {
      //check if the player has colided with a block
      if (
        block.pos.x < this.pos.x + this.size.w &&
        block.pos.x + block.size.w > this.pos.x &&
        block.pos.y < this.pos.y + this.size.h &&
        block.size.h + block.pos.y > this.pos.y
      ) {
        //return the closes cords to the currrent cords from the previous cords with out cliping
        //return 0 if the cords on x or y stay the same
        //compare in all the four directions to get the shortest path outside the block
        const outUp = -block.pos.y + this.pos.y + this.size.h;
        const outDown = block.pos.y + block.size.h - this.pos.y;
        const outLeft = -block.pos.x + this.pos.x + this.size.w;
        const outRight = block.pos.x + block.size.w - this.pos.x;
        //get the smaller one
        const min = Math.min(outUp, outDown, outLeft, outRight);
        //we get the max in case there are multiple collisions to get the furthest away that we need
        if (outUp === min) {
          output.y = Math.max(output.y, this.pos.y - outUp);
        } else if (outDown === min) {
          output.y = Math.max(output.y, this.pos.y + outDown);
        } else if (outLeft === min) {
          output.x = Math.max(output.x, this.pos.x - outLeft);
        } else if (outRight === min) {
          output.x = Math.max(output.x, this.pos.x + outRight);
        }
      }
    }
    return output;
  }
  //using a box casting to check if it colides with a block
  isGrounded(blocks) {
    const boxCastLength = 1 * this.tile;
    let output = false;
    let boxCast;
    if (this.wallJump) {
      boxCast = {
        x: this.pos.x - 1,
        y: this.pos.y + this.size.h,
        h: boxCastLength,
        w: this.size.w + 2,
      };
    } else {
      boxCast = {
        x: this.pos.x,
        y: this.pos.y + this.size.h,
        h: boxCastLength,
        w: this.size.w,
      };
    }
    for (const block of blocks) {
      if (
        block.pos.x < boxCast.x + boxCast.w &&
        block.pos.x + block.size.w > boxCast.x &&
        block.pos.y < boxCast.y + boxCast.h &&
        block.size.h + block.pos.y > boxCast.y
      ) {
        output = true;
        break;
      }
    }
    return output;
  }
  checkForCollision(blocks) {
    let output = { x: null, y: null };
    for (const block of blocks) {
      //check if the player has colided with a block
      if (
        block.pos.x < this.pos.x + this.size.w &&
        block.pos.x + block.size.w > this.pos.x &&
        block.pos.y < this.pos.y + this.size.h &&
        block.size.h + block.pos.y > this.pos.y
      ) {
        //return the closes cords to the currrent cords from the previous cords with out cliping
        //return 0 if the cords on x or y stay the same
        //compare in all the four directions to get the shortest path outside the block
        const outUp = -block.pos.y + this.pos.y + this.size.h;
        const outDown = block.pos.y + block.size.h - this.pos.y;
        const outLeft = -block.pos.x + this.pos.x + this.size.w;
        const outRight = block.pos.x + block.size.w - this.pos.x;
        //get the smaller one
        const min = Math.min(outUp, outDown, outLeft, outRight);
        //we get the max in case there are multiple collisions to get the furthest away that we need
        if (outUp === min) {
          output.y = Math.max(output.y, this.pos.y - outUp);
        } else if (outDown === min) {
          output.y = Math.max(output.y, this.pos.y + outDown);
        } else if (outLeft === min) {
          output.x = Math.max(output.x, this.pos.x - outLeft);
        } else if (outRight === min) {
          output.x = Math.max(output.x, this.pos.x + outRight);
        }
      }
    }
    return output;
  }
  isColliding(blocks) {
    let output = false;
    for (const block of blocks) {
      //check if the player has colided with a block
      if (
        block.pos.x < this.pos.x + this.size.w &&
        block.pos.x + block.size.w > this.pos.x &&
        block.pos.y < this.pos.y + this.size.h &&
        block.size.h + block.pos.y > this.pos.y
      ) {
        output = true;
        break;
      }
    }
    return output;
  }
  collidedWith(block) {
    let output = false;
    if (
      block.pos.x < this.pos.x + this.size.w &&
      block.pos.x + block.size.w > this.pos.x &&
      block.pos.y < this.pos.y + this.size.h &&
      block.size.h + block.pos.y > this.pos.y
    ) {
      output = true;
    }
    return output;
  }
  resetTo(newPos) {
    this.pos = { x: newPos.x * this.tile, y: newPos.y * this.tile };
    this.speed = { x: 0, y: 0 };
  }
}
