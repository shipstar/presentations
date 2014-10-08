!SLIDE

## Exercises

!SLIDE

### 1. Given a list of names, return a new list with every name shorter than 8 characters reversed and capitalized.

    @@@ ruby
    names = [
      "Allen", "Barbara", "Christine",
      "Doug", "Elizabeth", "Frederick",
      "George"
    ]

    rev_cap names
    => ["NELLA", "ARABRAB", "GUOD", "EGROEG"]

!SLIDE

My solution:

    @@@ ruby
    def rev_cap(names)
      names
        .select { |n| n.length < 8 }
        .map { |n| n.reverse.upcase }
    end

!SLIDE

### 2. Given a list of animals from a crappy data source, figure out how many of each kind there are.

    @@@ ruby
    animals = [
      ["dog", "DMX"],
      ["dog", "Charles Barkley"],
      ["cat", "Whiskers"],
      ["fish", "Splashy McGee"],
      ["fish", "Swims McKenzie"]
    ]

    count_by_type animals
    => { "dog": 2, "cat": 1, "fish": 2 }

!SLIDE

My solution:

    @@@ ruby
    def count_by_type(animals)
      animals.inject(Hash.new(0)) do
        |counts, (type, _)|

        counts[type] += 1
        counts
      end
    end

!SLIDE

Another solution:

    @@@ ruby
    def count_by_type(animals)
      Hash[*animals
        .group_by { |type, _| type }
        .flat_map { |type, list|
          [type, list.count]
        }
      ]
    end

!SLIDE small

### 3. An item is oversized if (1) weight or dimensional weight > 20, (2) the shortest dimension is greater than 8, (3) the median dimension is greater than 14, OR (4) the longest dimension is greater than 20.

    @@@ ruby
    class Item
      MAX_WEIGHT = 20
      MAX_DIMENSIONS = [8, 14, 18]
      DIMENSIONAL_WEIGHT_FACTOR = 194

      def initialize(length, width, height, weight)
        @dimensions = [length, width, height]
        @weight = weight
      end

      def oversized?

      end

      def dimensional_weight
        @dimensions.inject(:*) / DIMENSIONAL_WEIGHT_FACTOR
      end
    end

!SLIDE

My solution:

    @@@ ruby
    def oversized?
      shipping_weight > MAX_WEIGHT ||
        @dimensions
          .sort
          .zip(MAX_DIMENSIONS)
          .any? { |d, max| d > max }
    end

    def shipping_weight
      [dimensional_weight, @weight].max
    end

!SLIDE

# We did it!

### <a class="twitter" href="https://twitter.com/kyleashipley">@kyleashipley</a>
