!SLIDE

# any? #

    @@@ ruby
    [1, 2, 3, 4].any?{ |n| n.even? }
    # => true

    [2, 4, 6, 8].any?{ |n| n.odd? }
    # => false
