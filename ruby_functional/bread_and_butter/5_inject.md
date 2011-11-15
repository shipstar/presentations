!SLIDE small

# inject (aka reduce) #

    @@@ ruby
    DTEmployee.all.inject({}) do |memo, emp|
      memo[emp.name] = emp.clients.count
      memo
    end

    # => {
    #  "Jason" => 10_000,
    #  "Bob" => 5,
    #  "Chad" => -2
    # }

Don't forget to return the memo!

Really useful for converting arrays to hashes!