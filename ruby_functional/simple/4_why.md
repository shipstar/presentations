!SLIDE

# Why

Take all?, for example. Java-ish Ruby:

    @@@ ruby
    def all_odd?(array)
      array.each do |element|
        return false unless element.odd?
      end
      return true
    end

Idiomatic Ruby version
    @@@ ruby
    array.all?(&:odd?)

Less code = win