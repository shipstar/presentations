!SLIDE

# sort_by #

    @@@ ruby
    words = "The dog is brown".split

    words.sort_by{ |w| w.length }
    # => ['is', 'the', 'dog', 'brown']

    words.sort_by(&:length)
    # => ['is', 'the', 'dog', 'brown']
