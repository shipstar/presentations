!SLIDE

# Generic Presentation

## on the subject of

# Generic Space Shooter

<p class="footnote">Presented this 15th day of August</p>

<p class="footnote">by Two Guys</p>

!SLIDE

## We made a game.

<div class="footnote">(Part of one, anyway.)</div>

!SLIDE

[space-shooter.kyleshipley.com](http://space-shooter.kyleshipley.com)

!SLIDE

## How did we do it?

!SLIDE small

    @@@ html

    <canvas id="game" width="500" height="300">
      Canvas not supported.
    </canvas>

!SLIDE

# The End

!SLIDE

j/k

<div class="footnote">(lulz)</div>

!SLIDE

## Coffeescript Warning!

<div class="footnote">(That's why we did this.)</div>

!SLIDE small

## We need a drawing context.

    @@@ coffeescript

    $ ->

      canvas = $("canvas#game")

      context = canvas.get(0).getContext("2d")

<br/>
<br/>
<br/>
<br/>

(We'll be using this a lot.)

!SLIDE small

## Now that we have a context, let's draw something.

    @@@ coffeescript

    context.fillRect(50, 25, 150, 100) # x, y, w, h

!SLIDE

## Let's make it move.

!SLIDE

## But first!

We need a game loop.

    @@@ coffeescript

    gameLoop ->

      drawRect()
      clearCanvas()

    clearCanvas = ->

      context.clearRect(0, 0, canvas.width(), canvas.height())

    setInterval gameLoop, 17 # ~60 fps