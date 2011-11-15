!SLIDE small

# Why

Java-esque detect:
    @@@ ruby
    match = nil
    for el in array do
      if el.matches_condition?
        match = el
        break
      end
    end

Idiomatic:
    @@@ ruby
    array.detect(&:matches_condition?)

!SLIDE bullet smaller

# Why

* find/detect, select, reject, map/collect, and inject/reduce refer to specific concepts
  * select, reject = apply a filter
  * map = apply a function each element and collect the results
  * inject = collapse a list into a single value
* less state
  * not needed most of the time
* concurrency
  * map/reduce easy to distribute across multiple boxes
  * Hadoop, Storm, etc.