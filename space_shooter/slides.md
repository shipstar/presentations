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

!SLIDE small

# Core concepts:

* Canvas
* Drawing Context
* Drawing Commands
* Sprites
* Keyboard Handling
* Audio
* Game Loop

!SLIDE

## Amateur Warning!

We've made part of a game once. YMMV.

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

## Drawing Context

    @@@ coffeescript

    context = canvas.get(0).getContext('2d')

(There's no 3d -- it's webgl.)

!SLIDE

## Drawing Commands

!SLIDE small

## fillRect

    @@@ coffeescript

    context.fillRect x, y, w, h

!SLIDE small

## clearRect

    @@@ coffeescript

    context.clearRect x, y, w, h

(You'll need this for your game loop.)

!SLIDE small

## drawImage

    @@@ coffeescript

    context.drawImage img, x, y

    context.drawImage img, x, y, w, h

    # Useful with sprite sheets
    context.drawImage img, sx, sy, sw, sh,
                            x,  y,  w,  h

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

    # Note: Translation happens in terms of
    # the origin, kind of like an OpenGL camera.

    context.save()

    context.translate x, y

    context.rotate angle

    context.translate -x, -y

    context.drawImage img, x, y, width, height

    context.restore()

(Kind of like OpenGL transformation matrices)

!SLIDE small

## Sprites

    @@@ coffeescript

    sprite = new Image()

    sprite.src = 'foo.png'

!SLIDE small

## Keyboard Handling

    @@@ coffeescript

    # Remember, we used jQuery FOR NO RAISIN.

    $(document).keydown (event) -> # handler

    $(document).keyup (event) -> # handler

    $(document).keypress (event) -> # handler

    $.ui.keyCode.LEFT # or RIGHT, or SPACE

!SLIDE small

## Audio

    @@@ coffeescript

    sound = new Audio("file.wav")
    
    sound.play()

    sound.pause()

    # what we did for bgm

    <audio id="bgm" src="sound.ogg" preload autoplay>
      Audio element not supported.
    </audio>

!SLIDE small

## Game Loop

    @@@ coffeescript

    # It turns out that setInterval
    # is not the best way to do this.
    # Stay tuned!

    setInterval gameLoop, 17 # ~60 fps

    gameLoop ->

      updateObjects()

      drawObjects() # clearing the canvas first

!SLIDE small

## You now have all of the elements necessary to make a game:

* Draw shapes and images

* Move shapes and images

* Play some sounds

* Repeat ad nauseum

!SLIDE smaller

## Collision Detection

(Fine, fine. You probably need this too.)

    @@@ coffeescript

    rectanglesIntersect = (r1, r2) ->
      r1.x < r2.x + r2.width  && r1.x + r1.width  > r2.x &&
      r1.y < r2.y + r2.height && r1.y + r1.height > r2.y

<br/>
<br/>
<br/>
Collision detection gets harder as the shapes
<br/>
get more complex and more objects collide.

!SLIDE smaller

## Anthony's Particle Engine

    @@@ coffeescript

    particles = []
    ttl = 200 * Math.random() + 200

    for i in [0..9]
      for j in [0..9]
        particles.push
          velocity:
            x: Math.random() * 2 - 1
            y: Math.random() * 2 + ySpeed
          position:
            x: systemX + i * 3
            y: systemY + j * 3
          width: 3
          height: 3
          timeToLive: ttl
          originalTimeToLive: ttl
          expired: false

    particleSystems.push
      expired: false
      particles: particles
      color: color

!SLIDE small

## Future Improvements

* Game object instead of global state

* Less coupled algorithms

* Start extracting a game framework
  * But build a game first

* Better animation
  * Replace setInterval / clearInterval with requestAnimationFrame / cancelAnimationFrame

!SLIDE

# Questions?

[presentations.kyleshipley.com](http://presentations.kyleshipley.com)

@kyleashipley / @panozzaj