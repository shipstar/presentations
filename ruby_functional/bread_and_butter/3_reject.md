!SLIDE

# reject #

    @@@ ruby
    [1, 2, 3, 4].reject{ |n| n.even? }
    # => [1, 3]

    [1, 2, 3, 4].reject{ |n| n > 5 }
    # => [1, 2, 3, 4]
