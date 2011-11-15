# Examples #

!SLIDE small

# String parsing

    @@@ ruby
    records = File
      .open("file", 'r')
      .readlines
      .map(&:chomp)
      .map{ |line| line.gsub("-", "_" ).split("\t") }

!SLIDE

## Warning! Real-world examples from Giggil.

!SLIDE smaller

# Exclude non-media results

    @@@ ruby
    MEDIA = ["DVD", "Music", "Software", "Video Games", "Book"]
    
    filtered_results = search
      .results
      .select{ |r| MEDIA.include? r[:product_group] }

!SLIDE smaller

**Amazon Shipping Fee Calculations**

An item is **overweight** if (1) weight or dimensional weight > 20, (2) the shortest dimension is greater than 8, (3) the median dimension is greater than 14, OR (4) the longest dimension is greater than 20.

    @@@ ruby
    MAX_WEIGHT = 20
    MAX_DIMENSIONS = [8, 14, 18]
    DIMENSIONAL_WEIGHT_FACTOR = 194

    def oversized?
      weight > MAX_WEIGHT ||
        dimensions.sort
                  .zip(MAX_DIMENSIONS)
                  .any?{ |arr| arr[0] > arr[1] }
    end

    def dimensional_weight
      dimensions.inject(&:*) / DIMENSIONAL_WEIGHT_FACTOR
    end

    def shipping_weight
      [dimensional_weight, weight].max
    end

!SLIDE smaller

# Sanity check emails

1. Find all the methods beginning with check.
2. Sort them so that the order is consistent.
3. Call each method and store its result.

The Code
    @@@ ruby
    def generate_email
      lines = methods
        .select{ |m| m =~ /check_/ }
        .sort
        .inject([]){ |memo, m| memo << send(m).join(': ') }

      log_lines lines
      StatsMailer.deliver_sanity_check lines
    end

__Note__: Because << returns an array, I don't have to explicitly return my memo. (There's also reflection! Exciting and/or dangerous!)

!SLIDE smaller

# Bonus - Metaprogramming!

This is how we added some helper methods like create\_manual\_scan\_audit\_task and create\_inspection\_audit\_task.

    @@@ ruby
    AuditTaskType.all.map(&:name).each do |task_type|
      define_method "create_#{task_type}_audit_task" do
        return unless current_user.auditable?
        @audit_task = current_user.current_audit_period \
          .add_task! :task_type => task_type
      end
    end

(Normally you wouldn't want to call map(&:name) on an ActiveRecord list, but there's only about 15 AuditTaskTypes. If you have a bigger list, use ActiveRecord::Base.connection.select_values instead.)  

!SLIDE

# Now everything is a nail!

!SLIDE

# Questions?

Presentation by showoff (<https://github.com/schacon/showoff>)

Source available at <https://github.com/shipstar/presentations>

A better presentation at <http://speakerdeck.com/u/tomstuart/p/thinking-functionally-in-ruby>