!SLIDE

# McBain: Let's Get Enumerable

### <a class="twitter" href="https://twitter.com/kyleashipley">@kyleashipley</a>

!SLIDE

## Why enumerable?

!SLIDE code execute

    @@@ ruby
    def find_evens(arr)
      i = 0
      evens = []

      while i < arr.length
        if arr[i] % 2 == 0
          evens << arr[i]
        end

        i += 1
      end

      evens
    end

    find_evens([1,2,3,4,5,6,7,8])

!SLIDE code execute

    @@@ ruby
    def find_evens(arr)
      evens = []

      arr.each do |num|
        evens << num if num.even?
      end

      evens
    end

    find_evens([1,2,3,4,5,6,7,8])

!SLIDE code execute

    @@@ ruby
    def find_evens(arr)
      arr.select { |num| num.even? }
    end

    find_evens([1,2,3,4,5,6,7,8])

!SLIDE bullets

* More expressive (once you get used to it)
* What, not how
* Limit side effects

!SLIDE

Mostly **Arrays** and **Hashes**

But you can define your own.

!SLIDE code execute

    @@@ ruby
    class Team
      include Enumerable

      def initialize(members)
        @members = members
      end

      def each
        @members.each { |m| yield m }
      end
    end

    team.each { |m| m.say_hi! }
    team.sort_by { |m| m.name }
    team.max { |m| m.age }

!SLIDE

You now have access to **every** method in [Enumerable](http://ruby-doc.org/core-2.1.3/Enumerable.html)!
