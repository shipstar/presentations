!SLIDE

# detect (aka find) #

    @@@ ruby
    [2, 4, 5, 6].detect{ |n| n.odd? }
    # => 5

    [1, 3, 5, 7].detect{ |n| n.even? }
    # => nil

### Warning! Rails overrides find for ActiveRecord proxies!
