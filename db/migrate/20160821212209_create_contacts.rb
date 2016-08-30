class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
   	  t.column :First_Name, :string, :limit => 32, :null => false
   	  t.column :Last_Name, :string, :limit => 32
   	  t.column :Date_of_Birth, :date 
   	  t.column :Phone, :string, :limit => 32
   	  t.column :Email, :string
   	  t.column :Notes, :string
      t.timestamps null: false
    end
  end
end
