!SLIDE bullet smaller

# How?

    @@@ ruby
    class Team
      include Enumerable
   
      attr_accessor :members
   
      def initialize
        @members = []
      end
       
      def each &block
        @members.each{|member| block.call(member)}
      end
    end

Code from <http://kconrails.com/2010/11/30/ruby-enumerable-primer-part-1-the-basics/>

!SLIDE bullet

Congratulations! You now have access to all of the methods we're about to discuss.