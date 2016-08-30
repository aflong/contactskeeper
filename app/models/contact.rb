class Contact < ActiveRecord::Base
belongs_to :Keeper
validates_presence_of :Firtst_Name
validates_presence_of :Last_Name
end
