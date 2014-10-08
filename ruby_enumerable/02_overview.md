!SLIDE

## Overview

!SLIDE

### each

* each
* each\_with\_index
* enumerators

!SLIDE

each

    @@@ ruby
    (1..10).each { |i| puts i }
    # will print each number to the console
    # returns the original collection

    %w(ant bear cat).each_with_index do |a, i|
      puts a if i.even?
    end
    # prints ant + cat

!SLIDE

each (enumerator)

    @@@ ruby
    iter = (1..10).each

    iter.next
    => 1
    # ...
    iter.next
    => StopIteration: iteration reached an end


    %w(ant bear cat).each.with_index do |a, i|
      puts a if i.even?
    end
    # prints ant + cat

!SLIDE

### Booleans

* all?
* any?
* one?
* none?
* many? (Rails)
* include?

!SLIDE

    @@@ ruby

    [2, 4, 6, 8].all? { |n| n.even? }
    => true

    [2, 4, 6, 8].any? { |n| n.odd? }
    => false

    [2, 4, 6, 9].one? { |n| n.odd? }
    => true

    [2, 4, 6, 8].none? { |n| n.odd? }
    => true

!SLIDE

    @@@ ruby

    [2, 4, 6, 8].include? 2
    => true

    # Rails only
    [2, 4, 6, 8].many? { |n| n.even? }
    => true

!SLIDE

    @@@ ruby
    [2, false, 6, 8].all?
    => false

    [2, false, 6, 8].any?
    => true

    [2, false, nil, nil].one?
    => true

    [nil, false, 0, nil].none?
    => false

    [nil, false, true, 1].many?
    => true

!SLIDE execute

### Symbol#to_proc

    @@@ ruby

    # One weird trick...
    # Pythonistas HATE this!

    (1..10).map { |n| n.even? } ==
      (1..10).map(&:even?)

!SLIDE

### Sorting

* sort
* sort_by

!SLIDE

sort

    @@@ ruby
    [3, 1, 2, 4].sort
    => [1, 2, 3, 4]

    [3, 1, 2, 4].sort { |a, b| b <=> a }
    => [4, 3, 2, 1]

!SLIDE

sort

    @@@ ruby

    people.sort do |p1, p2|
      if p1.name > p2.name
        p1.age <=> p2.age
      elsif p1.name < p2.name
        p1.ssn <=> p2.ssn
      else
        0
      end
    end

!SLIDE execute

sort_by

    @@@ ruby
    %w(bear pig!!! man).sort_by(&:length)
    => ["man", "bear", "pig!!!"]

    people.sort_by { |p| [p.name, p.age] }
    # careful of nil!

!SLIDE

### Filtering + Grouping

* detect / find
* select
* reject
* group_by
* partition

!SLIDE

find / detect

    @@@ ruby

    [2, 4, 5, 6].find { |n| n.odd? }
    # => 5

    [1, 3, 5, 7].find { |n| n.even? }
    # => nil

    people.find { |p| p.name == "Waldo" }

!SLIDE

select

    @@@ ruby
    (1..10).select(&:even?)
    => [2, 4, 6, 8, 10]

    def bounce
      people.select { |p| p.age >= 21 }
    end

!SLIDE

reject

    @@@ ruby
    (1..10).reject(&:even?)
    => [1, 3, 5, 7, 9]

    def i_call_it_singles_city
      people.reject { |p| p.tease? }
    end

!SLIDE

group_by

    @@@ ruby
    (1..10).group_by(&:even?)
    => {
          false => [1, 3, 5, 7, 9],
          true => [2, 4, 6, 8, 10]
       }

    people.group_by { |p| p.name[0] }
    => {
         "K" => [kyle, kevin],
         "M" => [miles, matt]
       }

!SLIDE

partition

    @@@ ruby
    (1..10).partition(&:even?)
    => [
         [2, 4, 6, 8, 10],
         [1, 3, 5, 7, 9]
       ]

    tallies, shorties =
      people.partition { |p| p.height > 6.25 }

    tallies
    => [kyle, kevin]

    shorties
    => [miles, matt]

!SLIDE

### Transformations

* map
* inject
* flatten / flat_map

!SLIDE

map / collect

    @@@ ruby
    (1..10).map { |n| n * 3 }
    => [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

    # different format for select box
    people.map do |p|
      {
        id: p.id,
        value: p.name
      }
    end
    => [
          { id: 1, value: "Kyle" },
          { id: 2, value: "Kevin" }
       ]

!SLIDE

inject / reduce

    @@@ ruby
    (1..10).inject(0) { |sum, n| sum + n }
    => 55

    # or (1..10).inject(:+)

!SLIDE small

inject / reduce

    @@@ ruby
    # collect stats
    users.inject({}) do |stats, user|
      stats[user.email] = site.visit_count_for(user)
      stats
    end



    # email users with a calendar event today
    users.inject({}) do |events, user|
      events[user.email] = Event
        .joins(team: { memberships: :user })
        .where('start_time between ? and ?', start_time, end_time)
        .where('users.id = ?', user.id)
      events
    end

!SLIDE

flat_map

    @@@ ruby
    springfieldians.map(&:kids)
    => [
         ["Bart", "Lisa", "Maggie"],
         ["Rod", "Tod"],
         ["Thrillho"]
       ]

    springfieldians.flat_map(&:kids)
    => [
         "Bart", "Lisa", "Maggie",
         "Rod", "Tod", "Thrillho"
       ]

    # or map.flatten


!SLIDE execute

Enumerable methods **don't** mutate.

    @@@ ruby

    arr = (1..10).to_a

    numsTimes3 = arr.map { |n| n * 3 }

    arr


    # There are bang! methods, but
    # avoid them. (map!, flatten!, etc.)

!SLIDE

Bonus: lazy!

    @@@ ruby

    (1..Float::INFINITY)
      .map { |n| n * 3 }
      .first(10)
    # infinite loop!

    (1..Float::INFINITY)
      .lazy
      .map { |n| n * 3 }
      .first(10)
    => [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

!SLIDE execute

Bonus: lambdas!

    @@@ ruby
    under_age = ->(n) { n < 21 }
    (1..30).reject(&under_age)

    # or as a method
    # def under_age
    #  ->(n) { n < 21 }
    # end

!SLIDE[tpl=underscore] execute

Bonus: underscore.js!
(or lodash)

    @@@ coffeescript
    times3 = (n) -> n * 3

    result = _.map [1, 2, 3], times3
    result = _([1, 2, 3]).map times3
