!SLIDE

# sort_by #

    @@@ ruby
    words = "The dog is communist".split

    words.sort_by{ |w| w.length }
    # => ['is', 'the', 'dog', 'communist']
