!SLIDE

# all? #

    @@@ ruby
    [2, 4, 6, 8].all?{ |n| n.even? }
    # => true

    [1, 2, 3, 4].all?{ |n| n.odd? }
    # => false

    [stalin, lenin].all?(&:communist?)
    # => true
