!SLIDE

# select #

    @@@ ruby
    [1, 2, 3, 4].select{ |n| n.even? }
    # => [2, 4]

    [1, 2, 3, 4].select{ |n| n > 5 }
    # => []

    [tiger, britney, kim_k].select(&:married?)
    # => [kim_k]
