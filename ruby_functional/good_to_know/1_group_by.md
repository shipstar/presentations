!SLIDE

# group_by #

    @@@ ruby
    [1, 2, 3, 4].group_by(&:odd?)
    # => {true=>[1, 3], false=>[2, 4]} 

    SpringfieldResident.all.group_by(&:race)
    # => {
    #   "White / Yellow" => [lenny],
    #   "Black" => [carl, lou],
    #   "Indian" => [apu]
    # }
