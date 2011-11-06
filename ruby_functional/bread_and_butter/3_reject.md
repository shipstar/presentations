!SLIDE

# reject #

    @@@ ruby
    [1, 2, 3, 4].reject{ |n| n.even? }
    # => [1, 3]

    [1, 2, 3, 4].reject{ |n| n > 5 }
    # => [1, 2, 3, 4]

    [astley, led_zep].reject(&:unskilled?)
    # => [astley]

<a href="http://www.youtube.com/watch?v=oHg5SJYRHA0">Interesting diagram of select/reject</a>
