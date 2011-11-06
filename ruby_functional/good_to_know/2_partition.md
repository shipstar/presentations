!SLIDE

# partition #

    @@@ ruby
    [1, 2, 3, 4].partition(&:odd?)
    # => [[1, 3], [2, 4]]

    iphones = [i_1, i_3g, i_3gs, i_4, i_4s]
    iphones.partition(&:obsolete?)
    # => [[i_1, i_3g, i_3gs, i_4], [i_4s]]
