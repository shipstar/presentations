!SLIDE

# map (aka collect) #

    @@@ ruby
    (1..5).map{ |i| i * 3 }
    # => [3, 6, 9, 12, 15]

    DTEmployee.all.map(&:ssn)
    # => ['123-12-1234', '987-98-9876']

    # Please fill in your own and commit it
    # to the repository, along with a
    # credit card number. Just for funsies.
