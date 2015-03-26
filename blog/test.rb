class Car
     def initialize
          @engine = "V6"
     end

     def engine
          @engine
     end

     def wheels(sizeOfWheels)
          if sizeOfWheels > 20
           @engine = "V8"
          end
     end
end

truck = Car.new
p truck.engine
p truck.wheels(24)
p truck.engine

