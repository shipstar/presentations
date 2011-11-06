!SLIDE

# detect (aka find) #

### Warning! Rails overrides find for ActiveRecord proxies!

    @@@ ruby

    [2, 4, 5, 6].detect{ |n| n.odd? }
    # => 5

    [1, 3, 5, 7].detect{ |n| n.even? }
    # => nil
