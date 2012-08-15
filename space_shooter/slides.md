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

## Core concepts:

* Canvas
* Drawing Context
* Drawing Commands
* Sprites
* Game Loop

!SLIDE

## Coffeescript Warning!

<div class="footnote">(That's why we did this.)</div>

!SLIDE small

## Canvas

    @@@ coffeescript

    # Note: You don't have to use jQuery,
    # and we're kind of idiots for doing it.

    canvas = $('canvas#game')

!SLIDE small

## Drawing context

    @@@ coffeescript

    context = canvas.get(0).getContext('2d')

!SLIDE

## Drawing commands

!SLIDE small

## fillRect

    @@@ coffeescript

    context.fillRect x, y, w, h

!SLIDE small

## drawImage

Multiple signatures:

    @@@ coffeescript

    context.drawImage img, x, y

    context.drawImage img, x, y, w, h

    context.drawImage img, sx, sy, sw, sh,
                            x,  y,  w,  h

!SLIDE small

## clearRect

    @@@ coffeescript

    context.clearRect x, y, w, h

(You'll need this for your game loop.)

!SLIDE

## More complicated examples

!SLIDE small

## Drawing a light blue circle

    @@@ coffeescript

    context.globalAlpha = 1

    context.lineWidth = 25

    context.beginPath()

    context.strokeStyle = "#aaaaff"

    context.arc x, y, radius, startAngle,
      endAngle, counterClockwise

    context.closePath()

    context.stroke()

!SLIDE small

## Making something wobble (+ push/pop context)

    @@@ coffeescript

    context.save()
    context.translate x, y
    context.rotate angle
    context.translate -x, -y
    context.drawImage img, x, y, width, height
    context.restore()

(Kind of like OpenGL transformation matrices)